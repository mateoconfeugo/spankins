(ns spankins.controller.api
  ^{:author "Matthew Burns"
    :doc "API controller for editor client brings together client user data, database"}
  (:refer-clojure :exclude [assoc! conj! dissoc! parents])
  (:import [org.apache.commons.codec.binary Base64])
  (:require [clojure.core :as core]))

(defn overview
  "Latest status of all the most recent actvie jobs"
  []
  [{:name "job1" :run-id 1
    :runtime nil :begin nil
    :end nil     :run-status :done
    :user nil}
   {:name "job2" :run-id 2 :runtime nil :begin nil :end nil  :run-status :fail :user nil}
   {:name "job3" :run-id 3 :runtime nil :begin nil :end nil  :run-status :pending :user nil}])

(defn summary
  [job-id]
  [{:name "job1" :run-id 1 :runtime nil :begin nil :end nil  :run-status :done :user nil}
   {:name "job1" :run-id 2 :runtime nil :begin nil :end nil  :run-status :done :user nil}
   {:name "job1" :run-id 3 :runtime nil :begin nil :end nil  :run-status :done :user nil}])

(defn detail
  [job-id]
  {:name "job1" :run-id 2 :runtime nil :begin nil :end nil :run-status :done :user nil})
