(ns spankins.server
  ^ {:author "Matthew Burns"
     :doc "A jenkins inspired simple ci service"}
    (:require [cheshire.core :refer :all]
              [clojure.core.match :refer [match]]
              [plumbing.core :refer :all]
              [plumbing.graph :as graph]
              [clojure.core.async :refer [<!! go <! >! alts! chan]]
              [clojure.pprint :refer [pprint]]))

(defn clone-repo [commit-hash] {:commit-hash commit-hash})


(comment
(def base-job-logic
  {:parameters (fnk [opts] {:output opts
                            :commit-hash opts})
   :output (fnk [parameters] (chan))
   :scm (fnk [parameters] (clone-repo (:commit-hash parameters)))
   :wrappers nil
   :triggers (fnk [output]
                  (let [input (chan)]
                    (go
                      (while input
                        (let [data (<! input)
                              [msg-token job-graph] (take 2 data)]
                          (match [msg-token]
                                 [:trigger-downstream] (fn [result]
                                                         (>! output [:log
                                                                     {:message (-> result
                                                                                   :build-number
                                                                                   (format "build %s downstream triggered"))}]))
                                 [:build-complete] (fn [result output] (>! output [:log {:message "build complete trigger triped"}]))))))
                    input))
   :pre-builders nil
   :builders (fnk [result output] (go (>! output [:log {:message "build complete trigger triped"}])))
   :post-builders nil
   :publishers nil}))

(defn log [message] (println message))

(defn server-logic
  "All the clients: semi-autonomous jobs, user interface, communicate back to this server
   which operates with the logic defined by a commnicating sequence of of processes routed
   through a dispatch table."
  [{:keys [uri region] :as settings}]
  (let [build-request-channel (chan)
        output (chan)
        error (chan)]
    {:logic (fn [ch tuple]
              (let [[msg-token input] (take 2 tuple)]
                (match [msg-token]
                       [:log] ((fn [data] (log (:message data))) input)
                       [:error] ((fn [data] (log (:message data))) input)
                       [:triggered] ((fn [data]
                                       (go
                                         (while true
                                           (let [[msg-token job] (take 2 data)
                                                 in (:triggers job)]
                                             (>! in data))))) input)
                       [:build] ((fn [opts]
                                   (go
                                     (while true
                                       (let [job-graph (:job-graph opts)
                                             job-fn (graph/eager-compile job-graph)
                                             job (job-fn opts)
                                             build-results (<! (:buider job))]
                                         (>! output [:log (:results build-results)]))))) input)
                       [:publish] ((fn [data]
                                       (let [[msg-token job] (take 2 data)
                                              in (:publisher job)]
                                         (>! in data))) input))))
     :channels {:in build-request-channel
                :out output
                :error error}}))

(defn job-server
  [{:keys [uri region] :as settings}]
  (let [{:keys [dispatcher channels-map]} (server-logic settings)
        channels (vals channels-map)]
    (do (go (while true
              (let [[val ch] (alts! channels)]
                (dispatcher ch val))))
        channels-map)))

(comment
;; Jobs specifications realized by function graph that are feed into the
;; job servers input channel
;; it might be nice to get a results channel back from the the server upon making a request.
;;
(def awesome-ci-server (job-server {}))

(def listening? (atom true))

(while listening?
  (go
    (while on?
      (let [[val ch]] (alts! listeners)
          (>! (:in awesome-ci-server) [:build {:return-channel ch :parameters val}])))))


(defn make-me-a-job
  (let [job-spec (spankins.jobs.wgt-deploy/new-job {})])
  )
)
