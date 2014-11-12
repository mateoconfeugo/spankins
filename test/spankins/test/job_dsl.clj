(ns spankins.test.job-dsl
  (:require [cheshire.core :refer :all]
            [clojure.test :refer [is use-fixtures deftest successful? run-tests]]
            [expectations :refer [expect]]
            [clojure.core.match :refer [match]]
            [plumbing.core :refer :all]
            [plumbing.graph :as graph]
            [clojure.core.async :refer [>!! <!! go <! >! alts! chan]]
            [clojure.pprint :refer [pprint]]
            [clojure.xml :as xml]
            [clojure.string :as str]
            [clojure.walk :as walk]
            [spankins.job-dsl :refer [job parse-item to-ast parse-sexpr parameters
                                      parameters? step step? builder builder?]]))

(def a (atom 0))
(expect :int (:type (parse-item 42 a)))
(expect 42 (:value (parse-item 42 a)))

(def test-seq  (list 1 2))
(expect :call (:type (parse-item test-seq a)))
(expect [1 2] (:value (parse-item [1 2] nil)))

(expect true (step?  (step
                      (print "some")
                      (print "stuff"))))
(def test-step (step
                (print "some")
                (print "stuff")))
(expect :step (-> test-step
                  (parse-item a)
                  :value
                  :type))


(def test-step-01 (step
                (print "some")
                (print "stuff")))

(def test-step-02 (step
                (print "more")
                (print "things")))


(def test-build (builder
                 test-step-01
                 test-step-02))

(expect :builder (-> test-build
                     (parse-item a)
                     :value
                     :type))

(def params (parameters [:commit-hash :build-status]))
(expect true (parameters? params))
(parse-item (parameters [:commit-hash :build-status]) a)



;;Using the dsl to describe the specifics for a job build
(def msg-data (atom {}))
(def test-build (job "test-job"
                     [:build-in] (#(pprint %) msg-data)))

(def test-build (graph/eager-compile test-build))
(def build-result (test-build {:build-number 2}))

(go (>! (:input build-result) [:build-in {:message "yeah baby"}]))


  ;; test job spec dsl
(comment
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
  )
  ;; this creates:
  ;; map data structure an can be passed to a job engine which can be
  ;; in process or somewhere else on the system (pool of repl servers workers - slaves)
  ;; A object that implements the Job protocol
(comment
  ;; simulate the arguments a caller would provide
  (def test-parameters {:commit "asdf323fsd" :repo-uri "http://github.com/foo" :repo :git})

  ;; create a new object that contains the compiled job function graph
  (def ci-deploy-build (new-ci-deploy-job test-parameters))

  ;; now start the workflow - this calls the function that returns immediately
  (def ci-deploy-build-channels  (let [keys [stdin stdout stderr] (build ci-deploy-build)]))
)
  ;; feed the channels into some client
  ;; TODO: Connect the job to the management server via watchers
;;  (spankins-ui-watcher ci-deploy-build-channels)

  ;; instead of a structureless string, the ci-dsl represents job specifications as clojure maps
  ;; altering a job is now as simple a manipulating the default base line job map produced by the job
;; macro

  ;; One advantage of this approach is easy to run these jobs just cache the job map and then use a network
  ;; of spot instances to run the jobs and a reserved instance to host the lightweight
  ;; server and monitoring.  These lightweight tools will have clojurescript front ends
  ;; so that the bulk of traffic is just data.

  ;; This all possible because the code is data
(comment
;; Dummy functions that represent doing actual continuous integration type work
(defn compile-app [data] (prn data))
(defn unit-test-app [data] (prn data))

;; Using the dsl to describe the specifics for a job build
(def test-build (spankins.job-dsl/job "test-job"
                     [:build>!] (#(compile-app %) msg-data)
                     [:build<!] (#(unit-test-app %) msg-data)))

(def test-build (graph/eager-compile test-job))
(def build-result (test-build {:build-number 2}))

(macroexpand (builder :build>! (compile-app msg-data)))

(def test-job-spec (job-graph "test-job"
                              (builder :build>! (compile-app msg-data))
                              (builder :build<! (unit-test-app msg-data))))

(go (>! (:input test-result) [:build-out "cool"]))
(go (>! (:input test-result) [:build-in "cool"]))
(def stuff (<! (:input test-result)))
)
(comment)
 (defn compile-app [data] (prn data))
 (defn unit-test-app [data] (prn data))

(comment
  (report (do (Thread/sleep 1000) (+ 1 1)))

  `{:parameters {:commit 456
                 :upstream-build 2}
    :scm-resources (fnk [parameters]
                        (>! ctrl [:scm-out (scm-get (:commit parameters))])
                        :builders (fnk [parameters]))})
