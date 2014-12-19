(ns spankins.test.job-dsl
  "Test the different pieces of the dsl"
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
            [spankins.job-dsl :as dsl :refer :all]
            [spankins.job-parser :refer :all]
            [plumbing.core :refer :all]
            [plumbing.graph :as graph]))

;;----------------------------------------------------------------------
;; DSL PARAMETERS
;;----------------------------------------------------------------------
(def test-parameters (parameters [:commit-hash :build-status]))
(expect true (parameters? test-parameters))
(expect :parameters (-> test-parameters (parse-item a) :value :type))

;;----------------------------------------------------------------------
;; ****** DSL STEP ******
;;----------------------------------------------------------------------

(step? (step
                (print "some")
                (print "stuff")))
(def ctx (atom 0))
(def ctx {})

(def steps  (->>  (builder (step
                           (print "some")
                           (print "stuff"))
                          (step
                           (print "more")
                           (print "stuff")))
                  :value
                  (map #(step-node 1 %))
                  build-node
                  :build-steps
                  first

                  pprint))
 (do (print "more") (print "stuff"))

(pprint (first (map (fn [s]
                      (let [n (nth s 0)
                            code (nth s 1)]
                        (workflow-task n code))) steps)))

(def test-step (parse-item
                (job
                 (builder
                  (step
                   (print "some")
                   (print "stuff"))
                  (step
                   (print "more")
                   (print "stuff"))))
                ctx))

(-> test-step :value first :value first macroexpand  pprint)



(pprint (map #(graph-node ctx %)  (->> steps :build-steps)) )

(def test-fn (fn [] ((do (print "more") (print "stuff")))))
(def test-fn (clojure.core/fn [] (do (print "more") (print "stuff"))))
(test-fn)

;;     (reduce step-channels ctx)
()

(build-graph steps ctx)


(def test-builder (parse-item (builder (step
               (print "some")
               (print "stuff"))
              (step
               (print "more")
               (print "stuff"))) ctx))
(-> test-builder :value :build-steps build-node pprint )


  (def steps (build-node
              (step-node :one (>! (session monitor)  (<! (:prev session))))
              (step-node :two (>! (session monitor) (<! :one)))
              (step-node :three (pprint (format "%s" (<! :two))))))


  (->> steps
       build-graph
       pprint
       (reduce assemble-parts))


  (def  (reduce assemble-parts {} (build-graph steps)))

  (pprint (macroexpand (build-graph steps)))

  (pprint (into {} (macroexpand-1 (build-graph steps))))



(parse-item (step
                (print "some")
                (print "stuff")) ctx)

(:type (step
                (print "some")
                (print "stuff")))

(parse-item-fn (step
                (print "some")
                (print "stuff"))  ctx)

(parse-item (step
                (print "some")
                (print "stuff")) 0)


(step-node 1 (:value test-step))
(expect true (step? test-step))
(expect :step (-> test-step (parse-item a) :value :type))

;;----------------------------------------------------------------------
;; ****** DSL BUILDER ******
;;----------------------------------------------------------------------
(def test-step-01 (step
                   (print "some")
                   (print "stuff")))

(def test-step-02 (step
                   (print "more")
                   (print "things")))

(def test-build (builder
                 test-step-01
                 test-step-02))

(expect :builder (-> test-build (parse-item a) :value :type))

;; BUILDING INTERMIDIATE DATA STRUCTURES.
(step-node :one (>! (session monitor)  (<! prev-step)))

(def build-steps (build-node
                  [(step-node :one (>! (session monitor)  (<! prev-step)))
                   (step-node :two (>! (session monitor) (<! step-one)))
                   (step-node :three (pprint (format "%s" (<! step-two))))]))

(def fn-graph (wf-part :one (+ 1 1)))

;;------------------------------------------------------------------------
;; ****** WORKFLOW ROUTING ******
;;------------------------------------------------------------------------

(def build-steps (build-node
   [(step-node :one (>! (session monitor)  (<! prev-step)))
    (step-node :two (>! (session monitor) (<! step-one)))
    (step-node :three (pprint (format "%s" (<! step-two))))]))

;;------------------------------------------------------------------------
;; ******  DSL JOB ******
;;------------------------------------------------------------------------

(comment
(def test-dispatcher (defdispatcher
                       (builder
                        (step
                         (pprint "lein compile")))))



;;(pprint (macroexpand-1 '(wf-part :one (+ 1 1))))
;;(def fn-graph (wf-part :one (+ 1 1)))
;;(pprint )
;;(graph/eager-compile fn-graph)
;; (go (>! (:data-in test-job-object) [:parameters [:message [:commit 121212]]]))

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
