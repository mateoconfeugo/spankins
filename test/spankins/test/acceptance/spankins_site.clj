(ns acceptance.spankins-site
  (:use [pallet.action :only[with-action-options]]
        [pallet.configure :only[compute-service]]
        [pallet.api :only[converge]]
        [spankins.config :only [db-settings delivery-settings]]
        [expectations]
        [clj-webdriver.taxi :only [set-driver! to click exists? input-text submit quit] :as scraper]
        [clojure.core]
        )

;; Spin up a system of virtual machines to test with
(def service (compute-service (:provider db-settings)))
(def spankins-nodes (converge {database-group 1} :compute service))
(def spankins-node  ((first (@spankins-nodes :targets)) :node))
(def spankins-ip (.primary-ip db-node))
(def monitoring-nodes (converge {monitoring-group 1} :compute service))
(def monitoring-node  ((first (@db-nodes :targets)) :node))
(def monitoring-ip (.primary-ip db-node))

(defn wait-sec [n] (Thread/sleep (* 1000 n)))
(def test-port 8087)
(def signup-uri "/")
;;(def app-server (landing-site.handler/start test-port))
(def test-user {:email "matthewburns@gmail.com" :full_name "bob smit" :phone "8182546028"})

;; ACCEPTANCE TEST: Run job
(def app-uri (str "http://" spankins-ip ":" test-port signup-uri))
(scraper/set-driver! {:browser :firefox} app-uri)
;; select job
(scraper/click "#run-job-form-submit")
(.stop app-server)
(def run-record (first (kdb/select run
                                  (kdb/fields :id :job_id
                                  (kdb/where {:name (:name test-job}))))

(expect true (= (:name test-job) (:name run-record)))
(kdb/delete run
            (kdb/where {:user (:user test-job)}))
(comment
(power-down provider-host)
(destroy provider-host)
)
