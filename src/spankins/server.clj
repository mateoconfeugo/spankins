(ns spankins.server
  (:require [ring.adapter.jetty :refer [run-jetty]]
            [spankins.handler :refer [app]]
            [spankins.config :refer [cfg]])
  (:gen-class))

(defn start-app
  [host port]
  (run-jetty app {:host host :port port :join? false}))

(defn -main  []
  (start-app (:spankins-daemon-host cfg) (Integer/parseInt (or (System/getenv "PORT") "10033"))))

(comment
  (def test-app (-main))
  (.stop test-app)
  )
