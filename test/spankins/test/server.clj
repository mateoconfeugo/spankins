(ns spankins.test.server
  (:require [cheshire.core :refer :all]
            [clojure.test :refer [is use-fixtures deftest successful? run-tests]]
            [expectations :refer [expect]]
            [clojure.core.match :refer [match]]
            [plumbing.core :refer :all]
            [plumbing.graph :as graph]
            [learn-lambda.computer-vision :refer :all]
            [clojure.core.async :refer [<!! go <! >! alts! chan]]
            [leiningen.compile :refer :all]
            [clojure.pprint :refer [pprint]]))



(comment
  This set of macros corresponds to the different components in the job graph.
  Each macro takes an unevaluated job-graph and some code that is linked to a
  event tag.

(defmacro parameter)
(defmacro properties)
(defmacro scm)
(defmacro trigger)
(defmacro pre-build)
(defmacro build)
(defmacro post-build)
(defmacro publisher)

(defmacro job
  "Top level continuous integration construct that is used to host runs of builds"
  [{:keys [name commit-hash] :as args}]
  (parameter args)
  (properties args)
  (scm args)
  (trigger args)
  (pre-build args)
  (build args)
  (post-build args)
  (publisher args))

(def php-job-spec  (job :sample-job-name
                        (parameters {:commit-hash "unique id of the checkin theat triggered the build"})
                        (properties {})
                        (scm {:repo-uri})
                        (trigger  {})
                        (trigger  {})
                        (pre-build)
                        (build :lein-build
                               (lein/build))
                        (post-build)
                        (publisher :email {})))

(def foo-php-spec (job :foo-qa php-job-spec
                       (:trigger (fn [job] {}))
                       (publisher :coverage {})))




(def qa
  {:parameters (fnk [] nil)})

(def java
  {:publishers (fnk [] nil)})

(def phx
  {:scm (fnk [] nil)})

;; These are the generic actions we do at ops
;; A representation of the inheritance hierarchy

(def app-heirarchy (make-hierarchy (derive ::helios ::php-base)
                                   (derive ::phoenix ::java-base)
                                   (derive ::phx-qa ::phoenix)
                                   (derive ::phx-qa ::phoenix)))

(def env-heirarchy (make-hierarchy (derive ::qa ::base)
                                   (derive ::stg ::base)
                                   (derive ::prd ::stg)))

;; Run the jobs
(defn- build-dispatch [job-name env] env)

(defmult build [job]
  #'build-dispatch
  :default nil
  :hierarchy env-heirarchy)

(defmethod build nil [app env action]
  (action app env))

;; These are the generic jobs we do at ops
(defn- project-build-dispatch [app env])

(defmulti project-build [app env]
  #'project-build-dispatch
  :hierachy app-heirarchy)

(defmethod project-build :php-base [app env]
  (let []))

(defmethod project-build :java-base [app env parameters]
  (let [job-graph (merge base qa java phx)
        job (graph/eager-compile job-graph)]
    (chan (fn [] (job parameters)))))

;; How does this all fit into a reducible
(def php-jobs (reduce php-apps-job-batch-to-run {} [qa-php-jenkins-job-graph]))
(def java-jobs (reduce java-job-batch-to-run {} [qa-php-jenkins-job-graph]))

(def jenkins-job (graph/eager-compile test-data-graph))

(def)

(defn jenkins-server [job-channels])



(defmulti unit-test [app env])
(defmulti regression [app env])
(defmulti deploy [app env])
(defmulti rollback [app env])
)
