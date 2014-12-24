(ns spankins.job-parser
  ^{:description "A parser to transform the dsl into a data structure that can be used to create a function graph."
    :author "Matthew Burns"}
  (:require [clojure.core.match :refer [match]]
            [clojure.pprint :refer [pprint]]
            [clojure.walk :as walk]
            [plumbing.core :refer :all]
            [plumbing.graph :as graph]
            [spankins.job-dsl :as dsl :refer :all]))

;;----------------------------------------------------------------------
;; PREDICATE FUNCTIONS: TODO simplify avoid the code duplication
;;----------------------------------------------------------------------
(defn parameters? [form] (if (= :parameters (:type form)) true  false))
(defn step? [form] (if (= :step (:type form))  true  false))
(defn builder? [form] (if (= :builder (:type form)) true  false))
(defn job? [form] (if (= :job (:type form)) true false))

;;----------------------------------------------------------------------
;; PARSER: TODO lookat at making a default that does the general case
;;----------------------------------------------------------------------
(declare parse-item)

(defn- parser-sexpr-dispatch
  [[sym & rest] ctx]
  (fn [[sym & rest] ctx]
    sym))

(defmulti parse-sexpr #'parser-sexpr-dispatch)

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

(defn- parse-item-dispatch
  "decide on how to parse the item by its form"
  [form ctx]
  (:type form))

(comment
  (fn [form ctx]
    (cond
     (seq? form) :seq
     (nil? form) :nil
     (symbol? form) :symbol
     (integer? form) :int
     (keyword? form) :keyword
     (parameters? form) :parameters
     (step? form) :step
     (builder? form) :builder
     (job? form) :job))
  )

(defmulti parse-item #'parse-item-dispatch)
(defmethod parse-item :seq [form ctx] (parse-sexpr (macroexpand form) ctx))
(defmethod parse-item :default [form ctx] {:type (:type form) :value (:value form) })
(defmethod parse-item :nil [form ctx] {:type :nil})
(defmethod parse-item :int [form ctx] {:type :int :value form})
(defmethod parse-item :keyword [form ctx] {:type :keyword :value form})
(defmethod parse-item :symbol [form ctx] {:type :symbol :value form})
(defmethod parse-item :parameters [form ctx] {:type :parameters :value form})

(defmethod parse-item :step
  [form ctx]
  (do
    {:1 (dsl/step-node 1 (:value form))}))

(defmethod parse-item :builder
  [form ctx]
  (let [steps (->> form
                   :value
                   (map #(step-node 1 %))
                   build-node
                   :build-steps)
        build (map (fn [s]
                      (let [n (nth s 0)
                            code (nth s 1)]
                        (workflow-task n code))) steps)]
    {:type :builder  :value build }))

(comment (defmethod parse-item :builder
  [form ctx]
  {:type :builder :value (map #(parse-item % ctx) (:value form))}) )


(defmethod parse-item :job
  [form ctx]
  {:type :job :value (map #(parse-item % ctx) (:value form))})

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
(step? form) :step)

(comment
(defmethod parse-item :properties [form ctx] {:type :properties :value form})
(defmethod parse-item :trigger [form ctx] {:type :trigger :value form})
(defmethod parse-item :publisher [form ctx] {:type :publisher :value form}))
