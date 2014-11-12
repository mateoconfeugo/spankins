(ns spankins.job-dsl
  ^{:author "Matthew Burns"
    :description "A dsl to transform ci requirements into an executable language."}
  (:require [clojure.core.match :refer [match]]
            [clojure.pprint :refer [pprint]]
            [plumbing.core :refer :all]
            [plumbing.graph :as graph]
            [clojure.core.async :refer [go <! >! alts! chan]]
            [clojure.walk :as walk]))

;; <3> Level contsruct Abstract Syntax Tree Implementation that is used to create this
;; intermediate data. This is what gets generated as the DSL is walked.  It is the raw data.
;; From this that the function graphs is constructed.

(defmacro parameters [keywords]
  `{:type :parameters
    :keywords [~@ keywords]})

(defn parameters? [form]
  (if (= :parameters (:type form))
    true
    false))

(defmacro step [& body]
  `{:type :step
    :value '(do ~@body)})

(defn step? [form]
  (if (= :step (:type form))
    true
    false))

(defmacro builder [& body]
  `{:type :builder
    :value  (do [~@body])})

(defn builder? [form]
  (if (= :builder (:type form))
    true
    false))

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

(defmulti parse-item (fn [form ctx]
                       (cond
                        (parameters? form) :parameters
                        (step? form) :step
                        (builder? form) :builder
                        (keyword? form) :keyword
                        (integer? form) :int
                        (seq? form) :seq
                        (symbol? form) :symbol
                        (nil? form) :nil)))

(defmulti parse-sexpr (fn [[sym & rest] ctx]
                        sym))



(defmethod parse-sexpr 'if
  [[_ test then else] ctx]
  {:type :if
   :test (parse-item test ctx)
   :then (parse-item then ctx)
   :else (parse-item else ctx)})

(defmethod parse-sexpr 'do
  [[_ & body] ctx]
  {:type :do :body (doall (map (fn [x] (parse-item x ctx)) body))})

(defmethod parse-sexpr :default
  [[f & body] ctx]
  {:type :call
   :fn (parse-item f ctx)
   :args (doall (map (fn [x] (parse-item x ctx))
                     body))})

(defmethod parse-item :default
  [form ctx]
  {:type :default :value form})

(defmethod parse-item :seq
  [form ctx]
  (let [form (macroexpand form)]
    (parse-sexpr form ctx)))

(defmethod parse-item :int
  [form ctx]
  (swap! ctx inc)
  {:type :int :value form})

(defmethod parse-item :symbol
  [form ctx]
  {:type :symbol :value form})

(defmethod parse-item :nil
  [form ctx]
  {:type :nil})

(defmethod parse-item :parameters
  [form ctx]
  {:type :parameters :value form})

(defmethod parse-item :step
  [form ctx]
  {:type :step :value form})

(defmethod parse-item :keyword
  [form ctx]
  {:type :keyword :value form})

(defmethod parse-item :builder
  [form ctx]
  {:type :builder :value form})

(comment


(defmethod parse-item :properties
  [form ctx]
  {:type :properties :value form})

(defmethod parse-item :trigger
  [form ctx]
  {:type :trigger :value form})

(defmethod parse-item :publisher
  [form ctx]
  {:type :publisher :value form})
)

;; <4> Higher-level entities, data and control
(defmacro to-ast [form]
  (pr-str (parse-item form (atom 0))))

(to-ast '(when true (print "yes") ))
(macroexpand '(to-ast  (when true (print "yes") )))

(defn assemble-parts
  [dsl-ast])

(defn build-graph-spec
  [materials])

(defn create-csp-workflow
  [job-graph])

;; <5> Compile time create of runtime level construct for DSL code.
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

;; <6> Business level DSL constructs
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
                  input#))})
