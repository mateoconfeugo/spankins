(ns spankins.dashboard
    ^{:author "Matthew Burns"
      :doc "Spankins Dashboard"}
  (:require-macros [cljs.core.match.macros :refer [match]]
                   [cljs.core.async.macros  :refer [go]]
                   [shoreleave.remotes.macros :as srm :refer [rpc]])
  (:require [cljs.core.async :refer [alts! chan >! >! put!]]
            [cljs.core.async.impl.ioc-helpers ]
            [jayq.core :as jq :refer  [$ text val on prevent remove-class add-class remove empty html children append]]
            [shoreleave.browser.storage.sessionstorage :refer [storage]]
            [shoreleave.remote]))

(def session "client side data"(storage))
(assoc! session :user-id 1)
(assoc! session :doc-id 1)

(defn extract-dom
  [event ui]
  "Gather the necessary dom and admin data from a droppable event and ui element node"
  (let [demo (jq/html ($ ".demo"))
        dom (nth (js->clj (.-item ui)) 0)
        xpath (js/getXPath dom)]
    {:page-html demo :snippet-html (.-innerHTML dom) :xpath xpath :dom dom
     :doc-id (:doc-id session) :user-id (:user-id session)}))

(defn data-from-event
  "Extracts and transforms event data into a clojure map"
  [event]
  (-> event .-currentTarget $ .data (js->clj :keywordize-keys true)))

(defn click-chan
  "Creates and returns a channel that encapsulates and delivers the click data on a given element determined by the selector"
  [selector msg-name]
  (let [rc (chan)]
    (jq/on (jq/$ "body") :click selector {}
           (fn [e]
             (jq/prevent e)
             (put! rc [msg-name (data-from-event e)])))
    rc))

(defn drop-channel
  [selector msg-name formatter]
  "Create an element channel that respondse to drop events on the element by extracting the
   relevent data from the event and ui object and sending it as a message to be dispatched
   via the created channel"
  (let [elm ($ selector)
        element-channel (chan)
        _ (.sortable elm (clj->js {:receive (fn [event ui]
                                              (do (.log js/console (clj->js [event ui elm]))
                                                  (go (>! element-channel [msg-name (assoc (formatter event ui) :target elm)]))))}))]
    element-channel))

(defn update
  "Call the server side update api method notice the use of using the console for debugging by print
   TODO: Replace console logging with something more tunable"
  [drop-channel & {:keys [biz-id biz-cat analytics] :as tuple}]
  (do (.log js/console "updating something")
      (.log js/console tuple)
      (srm/rpc
       (api/update tuple) [resp]
       (put!  drop-channel [:updated-dom (assoc resp :dom dom :target target)]))))

(defn save
  "Call the server side persiting logic to save site edits"
  [drop-channel & {:keys [page-html user-id doc-id] :as tuple}]
  (do (.log js/console "saving site")
      (.log js/console tuple)
      (srm/rpc
       (api/save {:page-html page-html :user-id user-id :doc-id doc-id}) [resp]
       (put! drop-channel [:site-saved {:page-html resp}]))))

(defn render-workspace
  [ch model elm host-element-class]
  "Insert the job with the recent edits"
  (do (if (:uuid model)
;;        (add-class ($ ((.-getElementsByXPath js/xpath) js/document (:xpath model))) (str "uuid_" (:uuid model))))
        (.log js/console (clj->js model)))
      (.log js/console (js/getXPath (:target model)))
      ;;      (add-class ($ (:dom model)) "demo")
      ;;      (add-class ($ elm) host-element-class)
      (jq/add-class ($ elm) "demo")
      (jq/html ($ elm) (or (:tmp-page-html model) (:page-html model)))))

(defn new-async-app
  "Create the event channels and start the loop that feeds the event data to the
   Dispatch table that routes channel event data to the correct handler.
   val is a vector with a keyword to be dispatched on and the value from the
   channel"
  [selector]
  (let [save-channel (click-chan "#save" :save)
        drop-channel (drop-channel ".demo" :drop extract-dom)
        channels [save-channel drop-channel]
        dispatcher (fn  [ch val]
                     (match [(nth val 0)]
                            [:save] (save drop-channel  {:page-html (jq/html ($ ".demo")) :user-id (:user-id session) :doc-id (:landing-site-id session)})
                            [:drop] (update drop-channel  (nth val 1))
                            [:update] (render-workspace ch (nth val 1) ($ ".demo") "")))]
    (go (while true
          (let [[val ch] (alts! channels)]
            (dispatcher ch val))))))
