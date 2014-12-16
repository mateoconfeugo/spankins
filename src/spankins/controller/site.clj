(ns spankins.controller.site
  (:require [compojure.core :refer [defroutes GET]]
            [cheshire.core :refer [parse-stream]]
            [spankins.config :refer [cfg]]
            [spankins.view.host-dom :refer [render-dom]]
            [spankins.database :refer [job-run-dbh]]
            [spankins.report :as r :refer [report]]
            [ring.util.response :refer [response content-type status header]]))

(def site-data {:pages (:pages cfg)
                :menu (parse-stream (clojure.java.io/reader "resources/menu.json") true)})

(defn dispatch-job
  [type])

(defroutes site-routes
  (GET "/" [] (render-dom site-data))
  (GET "/job" [type] (dispatch-job type)))
