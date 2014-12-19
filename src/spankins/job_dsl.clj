(ns spankins.job-dsl
  ^{:description "A dsl to transform ci requirements into an executable language."
    :author "Matthew Burns"}
  (:require [clojure.core.async :refer [go <! >! alts! chan]]
            [clojure.core.match :refer [match]]
            [clojure.pprint :refer [pprint]]
            [clojure.walk :as walk]
            [plumbing.core :refer :all]
            [plumbing.graph :as graph]
            [riddley.walk :as r]))

;;----------------------------------------------------------------------
;; <3> Level contsruct Abstract Syntax Tree Implementation
;;----------------------------------------------------------------------
;; intermediate data. This is what gets generated as the DSL is walked.  It is the raw data.
;; From this that the function graphs is constructed.
(def a (atom 0))

(defn step-channels
  [result node]
  (let [[name code ch] node]
    (assoc-in result [name :channels] ch)))

(comment
(defn graph-node
  [result node]
  (let [[name code ch] node]
    (update-in result
              [name :code]
              `{~name (fnk [] (do code
                                  ch))}))))

(defn graph-node
  [result node]
  (let [[name code ch] node]
;;    (update-in result
;               [name :code]
               `{~name (fnk [] (do code
                                   ch))}))

(defn build-graph
  [nodes ctx]
  (->> nodes
       :build-steps
       (reduce step-channels ctx)))

(defn build-node [steps]
  {:build-steps (into [] (map (fn [s]
                           (let [step-key (nth s 0)
                                 step-val (nth s 1)
                                 step-ch (chan)]
                             [step-key (:value step-val)  step-ch]))
                        (reverse steps)))})

(defn step-node [step-number & body] `[~step-number ~@body])

;; There are two function graphs. They can be merged but it helps to logically
;; think of them as two different tasks

;; 1. Creates a data structure of all the different parts of the work flow
;;   a. parts are the expressions running in the the context of a go routine
;;   b. each part of the function graph returns a common data structure of
;;      its channels.  These are aggregated as the output of the last step
;;      in function graph
;;   c. requiste macros
;;      i) wrap the expressions in go routines that watch:
;;         - for input into the step
;;         - signal channel to shutdown
;; <4B Control>
;;(defmacro build-node [& steps] `(into []  (reverse [~@steps])))
;;       ii)
;;
;;  Each step is running in a go routine that runs until a termination
;;  message comes through the signal channel
;;
;; 2. Connect the parts created in in the first function graph in the
;;    workflow order the dsl semantically caputures

;; So there needs to be some auxilary functions that composes these
;; two function graph in to usable object/functions.
;; Also a constraint heirarhy see what I can find from site builder

(defn workflow-task
  [name & body]
  `{~name '(fnk []
                (let [run?# (atom true)
                      in# (chan)
                      out# (chan)
                      err# (chan)
                      mon# (chan)
                      [:sig] #(when (= (:signal ctx#) :terminate) (print "false"))
                      channels-map# {:input in# :output out# :error err#  :monitor mon# :signal sig#}]
                  (do
                    (go
                      (while run?#
                        (let [[val# tuple#] (alts! [in# out# err# mon# sig#])
                              [msg-token# ctx#] (take 2 tuple#)]
                          (match [msg-token#]
                                 [:in] (fn [] ~@body)
                                 [:out] (>! out#  ctx#)
                                 [:mon] (>! mon# ctx#)
                                 [:err] (>! err# ctx#)
                                 [:sig] #(when (= (:signal ctx#) :terminate) (print "false"))))))
                    channels-map#)))})

;;----------------------------------------------------------------------
;; <4> Higher-level entities, data and control
;;----------------------------------------------------------------------
;; <4A Data>
(defmacro parameters [keywords]
  `{:type :parameters
    :keywords [~@ keywords]})

;;  These are all the same and should be simplfied into one macro that makes other macros
(defmacro step [& body]
  `{:type :step
    :value '(do ~@body) })

(defmacro builder [& body]
  `{:type :builder
    :value  [~@body]})

(defmacro job [& body]
  `{:type :job
    :value  (do [~@body])})

;; <4B Control>
(defmacro to-ast [form]
;;  (pr-str (parse-item form (atom 0)))
  )

(defn assemble-parts
  [result {:keys [name style]}]
  (update-in result [style] conj name))

(defn build-graph-spec
  [materials])

(defn create-csp-workflow
  [job-graph])

;;----------------------------------------------------------------------
;; <5> Compile time create of runtime level construct for DSL code.
;;----------------------------------------------------------------------
(defmacro job-object
  "Inserts into the namespace an object constructor function that hosts the algorithm
   for sequentially transforming types from the dsl to creating an object that hosts
   the method to run the job workflow - build. Where upon the build method is called
   against the instantiated job object the workflow is put in motion"
  [name & dsl]
  (let [job-run (-> dsl
                    to-ast
                    assemble-parts
                    build-graph-spec
                    create-csp-workflow
                    graph/eager-compile)])
  `(defn (format "new-%s-job" name) [parameters]
     (reify Job
       (build [this]
         (job-run parameters)))))

;;----------------------------------------------------------------------
;; <6> Business level DSL constructs
;;----------------------------------------------------------------------
(defmacro report
  [to-try]
  `(if ~to-try
     (println (quote ~to-try) "was successful:" ~to-try)
     (println (quote ~to-try) "was not successful:" ~to-try)))

(defmacro report
  [to-try]
  `(let [result# ~to-try]
     (if result#
       (println (quote ~to-try) "was successful:" result#)
       (println (quote ~to-try) "was not successful:" result#))))

(defmacro scm [body]
  `{:scm-resources (fn [parameters]
                     (>! ctrl [:scm-out ~@body]))})

;;(defmacro builder [event & body]
;;  '[event] ~'body)

(defmacro defdispatcher [& body]
  `(fn [msg-ch# msg-tuple#]
     (let [[msg-event-token# msg-data#] (take 2 msg-tuple#)]
       (do (match [msg-event-token#]
                  ~@body)))))

;;(def dt (defdispatcher (println "foo")))

(comment
(defmacro job
  "Returns  as function graph describing the sequence of job workflow tasks a build will perform.
   A build is run by calling the function that is created by compiling the function graph with the proper
   parameters and properties.
   This build functions returns immediately and processes the job build asynchronously each to the stages
   comminicating with those further down the workflow in a with a go routine"
  [name & body]
  `{:build-name (fnk [~'build-number] (str ~name "-" ~'build-number))
    :input (fnk [~'build-name]
                (let [input# (chan)
                      dispatch# (defdispatcher ~@body)]
                  (go (while true
                        (let [[val# selected-ch#] (alts! [input#])]
                          (dispatch# selected-ch# val#))))

                  input#))}))

(comment
(defn properties? [form] false)
(defn builder? [form ] false)
(defn triggers? [form] false)
(defn publisher? [form] true)

                        (parameters? form) :parameters
                        (properties? form) :properties
                        (triggers? form) :trigger
                        (builder? form) :builder
                        (publisher? form) :publisher
                        (step? form) :step
)



(comment
(defmethod parse-item :properties
  [form ctx]
  {:type :properties :value form})

(defmethod parse-item :trigger
  [form ctx]
  {:type :trigger :value form})

(defmethod parse-item :publisher
  [form ctx]
  {:type :publisher :value form}))
