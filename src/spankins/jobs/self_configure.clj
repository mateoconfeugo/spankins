(ns spankins.jobs.self-configure
  (:require [clojure.core.async  :refer [put! >! chan go <!! alts! timeout take! <!]]
            [clojure.pprint :refer [pprint]]
            [clojure.core.match :refer [match]]
            [org.httpkit.client :as http]
            [plumbing.core :refer :all]
            [plumbing.graph :as graph]
            [riemann.client :refer [tcp-client send-event]]
            [spankins.protocols :refer [build Job]]))

(comment
  (def bacon {:one (fnk [] :blah)
              :two (fnk [one] :ham)})
  (plumbing.core/defnk [] (println "foo"))

  (def workflow {:ip "127.0.0.1"
                 :riemann (fnk[ip]
                              ;;                             (tcp-client {:host ip})
                              (print ip)
                              )

                 })


  :monitor (fnk [riemann]
                (let [mc (chan)]
                  (go  (while true
                         (when-let [x (<! mc)]
                           (send-event riemann x))))
                  mc))
  :build-results (fnk [input] (chan))
  :step-02 (fnk [input monitor]
                (let [output (chan)]
                  (when-let [input-data (go (<! input))]
                    (do (go (>! monitor input-data)
                            (pprint "lein compile"))
                        (go (>! output [:build-done {:message "completed build"}])))
                    output)))
  :step-01 (fnk [input monitor step-02]
                (let [output (chan)]
                  (go (while true
                        (when-let [[val ch] (alts! input)]
                          (do (>! monitor val)
                              (pprint "lein compile")
                              (>! step-02 [:step-02 {:message "transition to step 2xx"}])))))
                  output))
  :publisher-01 (fnk [build-results monitor publisher-02]
                     (let [output (chan)]
                       (go (while true
                             (when-let [[val ch] (alts! [build-results])]
                               (do (>! monitor val)
                                   (pprint "lein compile")
                                   (>! publisher-02 [:publisher-02 {:message "transition to step 2xx"}])))))))

  (defn new-job
  [{:keys [monitor-ip commit-hash] :as parameters}]
  (reify Job
    (build [this parameters]
      ((graph/eager-compile workflow) parameters))))

  )







(comment
  use lein uberimage to create all the applications in docker containers.
  These containers get installed in the weave network
  )

(comment
  ;; DESCRIPTION:

  ;; the dsl get transformed into a bunch of rules consumed by the  dispatcher
  ;; the correct workflow routing channels are inserted around the dsl forms
  ;;from the dsl create the ci  job spec such like:
  (def job-spec-dsl (job "ci-deploy"
                         (parameters :commit :release)  ;; dsl
                         (scm :git (:commit parameters))
                         (build
                          (step
                           (>! monitor "compiling app")
                           (pprint "lein compile"))
                          (step (pprint "lein test"))
                          (step (pprint "lein uberimage"))
                          (step (pprint "lein deploy private"))
                          (step (pprint "lien pallet lift groups/register-container")))
                         (publishers
                          (let [report (create-report (<! build-results))])
                          (publish (email (-> parameters :email :publisher) report))
                          (publish (archive report)))))


  ;; here is what gets created.
  )
