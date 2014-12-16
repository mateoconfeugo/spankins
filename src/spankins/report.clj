(ns spankins.report
  (:require [clojure.java.jdbc :refer[with-db-connection]:as sql]
            [clj-time.core :as t]
            [clojure.java.jdbc.deprecated :refer [with-connection connection create-table drop-table]]
            [yesql.core :refer :all]))

(def queries (defqueries "spankins/model/sql/queries.sql"))

(defn- report-dispatch
  [{:keys [type parameters db] :as args}]
  type)

(defmulti report #'report-dispatch)

(defmethod report :summary
  [{:keys [type parameters db] :as args}]
  (println "This is a place holder for the summary report data"))

(defmethod report :job-run
  [{:keys [type parameters db] :as args}]
  (println "This is a place holder for the data describing the particular run/build of a job"))
