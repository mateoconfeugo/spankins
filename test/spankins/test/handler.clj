(ns spankins.test.handler
  (:require [expectations :refer [expect]]
            [clj-time.core :refer [local-date]]
            [spankins.handler :refer [app]]
            [ring.mock.request :refer [request]]))

(def test-req {:request-method :get
               :uri "/report"
               :header {}
               :content-type "text/csv"
               :query-string {:type "summary"  :begin-date (local-date 2014 12 15) :end-date (local-date 2014 12 19)}})

(def tr (request :get (:uri test-req) (:query-string test-req)))
(clojure.pprint/pprint (:query-string tr ))
(expect true (= (:status (app tr)) 200))
(expect true (= (:status (app (request :get "/clientconfig")) 200)))
(expect true (= (:status (app (request :get "/invalid-bogus-fake"))) 404))
(expect true (= (:status (app (request :get "/login"))) 200))
