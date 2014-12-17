(ns spankins.model.job_run
  "Mining and storing data from the Query the Lobbying Disclosure Act Database"
  (:require [clojure.core]
            [korma.core :refer [defentity database insert values has-many many-to-many
                                transform belongs-to has-one fields table prepare pk
                                subselect where belongs-to limit aggregate order]]
            [korma.db :refer [defdb mysql]]
            [spankins.database :refer [job-run-dbh]]))

(declare job run job_run job_log run_log)

(defentity job
  (pk :id)
  (table :job)
  (fields  :id :name :type :created_on :last_ran :last_success :last_fail)
  (many-to-many job_run {:fk :job_id}))

(defentity job_log)
(defentity run_log)

(defentity run
  (pk :id)
  (table :run)
  (fields :id :began :finished)
  (many-to-many job_run {:fk :run_id}) )

(defentity job_run
  (table :job_run)
  (fields :job_id :run_id))

(defentity url
  (pk :url)
  (table :url)
  (fields :url))

(defn validate-job [name] false)
(defn validate-run [] false)
(defn log-job [job] [:1])
(defn log-run [run] [:2])


(comment
(defn insert-entity [db entity]
  "Validate and attempt to store the entity in the database"
  (let [_ (defentity entity (database db))
        message (validate entity)
        is-valid (empty? message)]
    (when is-valid
      ({:id (:GENERATED_KEY (insert entity (values [])))})))))
