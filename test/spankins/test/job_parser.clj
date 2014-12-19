(ns spankins.test.job-parser
  (:use [spankins.job-dsl])
  (:require [cheshire.core :refer :all]
            [clj-time.core :refer [date-time local-date]]
            [clojure.core.async :refer [>!! <!! go <! >! alts! chan]]
            [clojure.pprint :refer [pprint]]
            [clojure.string :as str]
            [clojure.test :refer [is use-fixtures deftest successful? run-tests]]
            [clojure.walk :as walk]
            [clojure.xml :as xml]
            [expectations :refer [expect]]
            [spankins.config :refer [cfg]]
            [spankins.database :refer :all]
            [spankins.job-parser :refer [parse-item parse-sexpr]]
            [plumbing.core :refer :all]
            [plumbing.graph :as graph]))

(def a (atom 0))
(expect :int (:type (parse-item 42 a)))
(expect 42 (:value (parse-item 42 a)))

(def test-seq  (list 1 2))
(expect :call (:type (parse-item test-seq a)))
(expect [1 2] (:value (parse-item [1 2] nil)))

;;------------------------------------------------------------------------
;; ****** WORKFLOW ROUTING ******
;;------------------------------------------------------------------------
(def test-dispatcher (defdispatcher
                       (builder
                        (step
                         (pprint "lein compile")))))

;;------------------------------------------------------------------------
;; ******  DSL JOB ******
;;------------------------------------------------------------------------
(comment
(pprint (macroexpand-1 '(wf-part :one (+ 1 1))))
(def fn-graph (wf-part :one (+ 1 1)))
(pprint )
(graph/eager-compile fn-graph)
 (go (>! (:data-in test-job-object) [:parameters [:message [:commit 121212]]]))

(def algo-step-1 (build-graph build-steps {}))
;;(pprint algo-step-1)
;;(pprint (reduce graph-node {} algo-step-1))
;;(pprint build-steps)
(def test-node (first steps))
(class)
(to-ast '(when true (print "yes")))
(macroexpand '(to-ast  (when true (print "yes") )))
)

(comment
  (def msg-data (atom {}))
  (def test-build (job "test-job"
                       (parameters [:commit :release])
                       (builder
                        (step
                         (pprint "lein compile")))))

  (to-ast test-build)

  (pprint test-build)



  (def steps (build
              (step-node :one (>! (session monitor)  (<! (:prev session))))
              (step-node :two (>! (session monitor) (<! :one)))
              (step-node :three (pprint (format "%s" (<! :two))))))

  (pprint (step-node :three (pprint (format "%s" (<! :two)))))

  (pprint steps)
  (pprint (step-node :two (>! (session monitor) (<! :one))))
  (graph/eager-compile (into {} (build-graph steps)))

  (pprint (macroexpand-1 (build steps)))

  (->> steps
       build-graph
       pprint
       (reduce assemble-parts))


  (def  (reduce assemble-parts {} (build-graph steps)))

  (pprint (macroexpand (build-graph steps)))

  (pprint (into {} (macroexpand-1 (build-graph steps))))
  (pprint (macroexpand-1 (first steps)) )
  (def test-node (first steps))

  (def node? (graph-node test-node))
  (def node? (macroexpand-1 (graph-node1 test-node)))
  (keys node?)


  (def test-job-spec-dsl (job "test-dsl-spec"
                              (parameters :commit :release)
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

;;(def test-build (graph/eager-compile test-build))
;;(def build-result (test-build {:build-number 2}))
(go (>! (:input build-result) [:build-in {:message "yeah baby"}]))


;;===========================================================================
;; TDG:
;; simulate the arguments a caller would provide
;; create a new object that contains the compiled job function graph
;; now start the workflow - this calls the function that returns immediately
;;============================================================================
(def tdg {:commit "asdf323fsd"
          :repo-uri "http://github.com/foo"
          :repo :git
          :parameters (fnk [commit repo-uri repo] {:commit commit :repo-uri repo-uri :repo :git})
          :dsl (fnk [parameters] (test-dsl-spec parameters))
          :build (fnk [dsl parameters] (dsl parameters))
          :channels (fnk [build] (let [keys [stdin stdout stderr] (build ci-deploy-build)]))})

(def tf (graph/eager-compile tdg))
(def td (tf {}))
(expect true (< 0 (count (:report td))))
)

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
  (def stuff (<! (:input test-result))))

(comment
  (defn compile-app [data] (prn data))
  (defn unit-test-app [data] (prn data)))

(comment
  (report (do (Thread/sleep 1000) (+ 1 1)))

  `{:parameters {:commit 456
                 :upstream-build 2}
    :scm-resources (fnk [parameters]
                        (>! ctrl [:scm-out (scm-get (:commit parameters))])
                                                :builders (fnk [parameters]))})
