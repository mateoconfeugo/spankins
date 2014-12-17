(ns spankins.test.model.job_run
  ^{:author "Matt Burns"
    :doc "Component level tests relating to storing and reporting on job run "}
  (:require [spankins.model.job_run :refer [log-job job_log log-run job_run validate-job validate-run]]
        [expectations :refer [expect]]
        [korma.core :refer [defentity database insert values select where] :as kdb]
        [korma.db :refer [defdb mysql]]))

(def good-test-job {})
(def bad-test-job {})
(def good-test-run {})
(def bad-test-run {})

(expect true (empty? (validate-job good-test-job)))
(expect false (empty? (validate-job bad-test-job)))
(expect true (empty? (validate-run  good-test-run)))
(expect false (empty? (validate-run bad-test-run)))
(comment
(def entry (log-job good-test-job))
(def retreived-record (first (kdb/select job_log
                                  (kdb/fields :full_name :email :phone)
                                  (kdb/where {:id  (:id entry)}))))

(expect true (= (:name good-test-job) (:name retreived-record)))

(def run-entry (log-run good-test-run))
(def retreived-record (first (kdb/select job_run
                                  (kdb/fields :job_id)
                                  (kdb/where {:id (:id run-entry)}))))
)
