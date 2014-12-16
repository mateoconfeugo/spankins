(ns spankins.database
  (:require [clojure.java.jdbc :only[with-connection create-table drop-table
                                     with-server with-db-connection with-open]:as sql]
            [clojure.java.jdbc.deprecated :refer [with-connection connection create-table drop-table]]
            [spankins.config :refer [cfg]]
            [yesql.core :refer :all])
  (:use [korma.core :only [defentity database insert values select where]]
        [korma.db :only [defdb mysql sqlite3]]))

(def job-run-dbh (:job-run-dsn cfg))

(defmacro table-builder
  [dsn table-name & statements]
  `(with-connection ~dsn
     (create-table ~table-name ~@statements)))

(defn remove-table
  [table dsn]
  (with-connection dsn
    (try
      (drop-table (keyword table))
      (catch Exception _) )))

(defn drop-job-run-database
  "remove the database the has all the job run data"
  [dsn]
  (let [tables [""]]
    (doseq [t tables]
      (drop-table t dsn))))

(defn drop-database
  [dsn name]
  (with-connection dsn
    (with-open [s (.createStatement (connection))]
      (.addBatch s (str "DROP DATABASE IF EXISTS " name))
      (seq (.executeBatch s)))))

(defn create-database
  [dsn name]
  (with-connection dsn
    (with-open [s (.createStatement (connection))]
      (.addBatch s (str "DROP DATABASE IF EXISTS " name))
      (.addBatch s (str "create database " name))
      (seq (.executeBatch s)))))

(defn create-job-run-database
  [dsn]
  "Build schema for the job run  database"
  (table-builder dsn  :job
                 [:id :integer "PRIMARY KEY" "AUTO_INCREMENT"]
                 [:status "ENUM('active', 'inactive') NOT NULL"]
                 [:title  "VARCHAR(150) "])

    (table-builder dsn :run
                  [:id :integer "PRIMARY KEY" "AUTO_INCREMENT"]
                  [:user_id "INTEGER(11) NOT NULL"]
                  [:began  "DATETIME NOT NULL"]
                  [:ended  "DATETIME NOT NULL"]
                  [:result_uri "VARCHAR(255) NOT NULL"]
                  [:last_sign_in "DATETIME NOT NULL"])

    (table-builder dsn :job-run
                  [:job-id :integer]
                   [:run-id :integer]))
