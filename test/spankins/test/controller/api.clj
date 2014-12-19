(ns spankins.test.controller.api
  (:require [expectations :refer [expect]]
            [clj-time.core :refer [local-date]]
            [spankins.handler :refer [app]]
            [spankins.controller :refer [overview summary detail]]
            [ring.mock.request :refer [request]]))

;;======================================================================
;; Setup
;;======================================================================
(def test-req {:request-method :get
               :uri "/api/summary"
               :header {}
               :query-string {:job-id 1}})

;;======================================================================
;; SUMMARY TESTS
;;======================================================================
(def expected-summary   [{:name "job1" :run-id 1 :runtime nil :begin nil :end nil  :run-status :done :user nil}
                         {:name "job1" :run-id 2 :runtime nil :begin nil :end nil  :run-status :done :user nil}
                         {:name "job1" :run-id 3 :runtime nil :begin nil :end nil  :run-status :done :user nil}])

(def summary-tr (request :get (:uri test-req) (:query-string test-req)))
(expect true (= (:status (app tr)) 200))
(expect true (= (:body (app tr) expected-summary)))

;;======================================================================
;; OVERVIEW TESTS
;;======================================================================
(def overview-tr (request :get (assoc test-req :uri "/api/overview" )  (:query-string {})))
(expect true (= (:status (app tr)) 200))
(expect true (= (:body (app tr) expected-overview)))
(def expected-overview   [{:name "job1" :run-id 1
    :runtime nil :begin nil
    :end nil     :run-status :done
    :user nil}
   {:name "job2" :run-id 2 :runtime nil :begin nil :end nil  :run-status :fail :user nil}
   {:name "job3" :run-id 3 :runtime nil :begin nil :end nil  :run-status :pending :user nil}])

;;======================================================================
;; DETAIL TESTS
;;======================================================================
(def expected-detail  {:name "job1" :run-id 2 :runtime nil :begin nil :end nil :run-status :done :user nil} )
(def detail-tr (request :get (assoc test-req :uri "/api/detail" )  (:query-string test-req)))
(expect true (= (:status (app tr)) 200))
(expect true (= (:body (app tr) expected-detail)))
