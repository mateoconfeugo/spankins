(ns spankins.workspace
  ^{:doc "The browser side client for displaying and running jobs.
          Read code from the bottom of the file:
          - Populate client side data"
    :author "Matt Burns"}
  (:require [cljs.core.async.impl.ioc-helpers ]
            [enfocus.core :as ef]
            [cljs.core.match]
            [enfocus.effects :as effects]
            [enfocus.events :as ev]
            [goog.dom :as dom]
            [jayq.core :refer [$ text val on prevent remove-class add-class remove empty html children append]]
            [shoreleave.browser.storage.sessionstorage :refer [storage]]
            [shoreleave.remote]
                 [cljs.core.async :refer [<! >! put! close! timeout chan]])
  (:require-macros [enfocus.macros :as em]
                   [cljs.core.match.macros :refer [match]]
                   [cljs.core.async.macros  :refer [go go-loop]]
                   [shoreleave.remotes.macros :as srm :refer [rpc]]))

;;===============================================================================
;; cljs utils
;;===============================================================================
(defn log [m]
  (.log js/console m))

(defn toJSON [o]
  (let [o (if (map? o) (clj->js o) o)]
    (.stringify (.-JSON js/window) o)))

(defn parseJSON [x]
  (.parse (.-JSON js/window) x))

;; Event channel related functionality
(defn data-from-event
  "Extracts a map of the event data."
  [event]
  (-> event
      .-currentTarget
      $
      .data
      (js->clj :keywordize-keys true)))

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

;;(em/deftemplate display-stage :compiled "templates/html/workspace/top_nav_bar.html"
;;  [:div.navbar-inner] (ef/html-content
;;
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

(em/defaction change [msg]
  [:button] (ef/content msg))

(em/defaction setup []
  [:#job-run] (ev/listen :click #(change "running")))

(set! (.-onload js/window) setup)

;; Client side web display components.
;;(em/defaction job-page [job] [:div#stage] (ef/content (display-job job)))
;;(em/defaction summary-page [job] [:div#stage] (ef/content (display-summary job)))


;;(em/defaction setup-events [width height] [:section#store :ul :li :a] (ev/listen :click (navigate overview-page)))
(em/defsnippet display-job :compiled "templates/job.html" [:#job]
  [data]
  [:#job-name] (ef/content (-> data :name))
  )

;;  [:#run-id] (ef/content (-> data :run-id) )
;;  [:#status] (ef/content (-> data :run-status))

(em/deftemplate display-stage :compiled "templates/overview.html"
  [data]
  ;;[:#stuff] (ef/content (-> data clj->js toJSON) )
  [:#stuff] (ef/content (map #(display-job %) data)))

(defn ^:export overview
  "Get the data that gives a highlevel role up"
  [id]
  (let [output (chan)]
    (srm/rpc
     (api/overview id) [resp]
     (go (>! output [:overview resp])))
    output))


;; Entry point into the client side of the application.
(defn job-server []
  (let [model (overview 1)
        app-control-logic (fn [ch tuple]
                            (let [[msg-token data] (take 2 tuple)]
                              (match [msg-token]
                                     [:job]  (job-page data)
                                     [:summary] (summary-page (assoc data :drop-channel ch))
                                     [:overview] (ef/at js/document "#stage" (ef/content (display-stage data)))
                              )))]
  (go (while true
        (let [[val ch] (alts! [model])]
          (app-control-logic ch val))))))
