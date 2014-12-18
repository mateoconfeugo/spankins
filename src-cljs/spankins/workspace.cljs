(ns spankins.workspace
  ^{:doc "The browser side client for displaying and running jobs.
          Read code from the bottom of the file:
          - Populate client side data"
    :author "Matt Burns"}
  (:require [cljs.core.async :refer [alts! chan >! >! put!]]
            [cljs.core.async.impl.ioc-helpers ][enfocus.core :as ef]
            [cljs.core.match]
            [enfocus.effects :as effects]
            [enfocus.events :as ev]
            [goog.dom :as dom]
            [jayq.core :refer [$ text val on prevent remove-class add-class remove empty html children append]]
            [shoreleave.browser.storage.sessionstorage :refer [storage]]
            [shoreleave.remote])
  (:require-macros [enfocus.macros :as em]
                   [cljs.core.match.macros :refer [match]]
                   [cljs.core.async.macros  :refer [go]]
                   [shoreleave.remotes.macros :as srm :refer [rpc]]))

;; Populate client side data
(def session (storage))
(assoc! session :job-id 1)
(assoc! session :run [{:runid 1 :begin nil :status :active}])

;; Event channel related functionality
(defn data-from-event
  "Extracts a map of the event data."
  [event]
  (-> event .-currentTarget $ .data (js->clj :keywordize-keys true)))

(defn click-chan
  "Creates a channel that is a sink for click events occuring on the elements filtered by selector."
  [selector msg-name]
  (let [rc (chan)]
    (on ($ "body") :click selector {}
        (fn [e]
          (prevent e)
          (put! rc [msg-name (data-from-event e)])))
    rc))

(defn event-channel
  "Generic relating of elements filtered by selector of a certain type of events and calling them by a particular message name"
  [selector event-type msg-name]
  (let [rc (chan)]
    (on ($ "body") event-type  selector {}
        (fn [e]
          (prevent e)
          (put! rc [msg-name (data-from-event e)])))
    rc))

;; Dom utility routines
(defn scroll-to []
  (fn [nod]
    (. nod (scrollIntoView))))

(defn reset-scroll []
  (fn [nod]
    (set! (.-scrollTop nod) 0)))

(defn highlight-code [] (js/prettyPrint))

(defn navigate [page]
  (fn [] (page) (highlight-code)))

(declare overview-page job-page summary-page)

;; Client side wrappers of the server api
(defn overview
  "Get the data that gives a highlevel role up"
  [{:keys [] :as tuple}]
  (srm/rpc (api/overview {}) [resp]))

(defn summary
  "Retrieve data on the running of the job"
  [{:keys [job-id] :as tuple}]
  (srm/rpc (api/summary {:job-id job-id}) [resp]))

(defn detail
  "Retreive the job data"
  [{:keys [run-id] :as tuple}]
  (srm/rpc (api/detail {:run-id run-id}) [resp]))

;; Client side templating.
(em/defsnippet display-job :compiled "templates/job.html" ["#job"] [product])
(em/defsnippet display-summary :compiled "templates/summary.html" ["#summary"] [job])
(em/defsnippet display-overview :compiled "templates/overview.html" ["#overview"] [])

;; Client side web display components.
(em/defaction job-page [job] [:div#stage] (ef/content (display-job job)))
(em/defaction summary-page [job] [:div#stage] (ef/content (display-summary job)))
(em/defaction overview-page [] [:div#stage] (ef/content (display-overview)))
(em/defaction setup-events [width height] [:section#store :ul :li :a] (ev/listen :click (navigate overview-page)))

;; Application
(defn job-server []
  "The client side application server that creates event channels feeding the event data to the application control logic."
  (let [job-view-channel (event-channel "#blah" :mouseover :view-product)
        channels [job-view-channel]
        app-control-logic (fn [ch tuple]
                            (let [[msg-token data] (take 2 tuple)]
                              (match [msg-token]
                                     [:job]  (job-page data)
                                     [:summary] (summary-page (assoc data :drop-channel ch))
                                     [:overview] (overview-page ))))]
    (go (while true
          (let [[val ch] (alts! channels)]
            (app-control-logic ch val))))))

;; Entry point into the client side of the application
(set! (.-onload js/window) setup-events)
(job-server)
