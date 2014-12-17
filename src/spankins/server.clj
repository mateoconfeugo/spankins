(ns spankins.server
  (:require [ring.adapter.jetty :refer [run-jetty]]
            [spankins.handler :refer [app request-handler]]
            [spankins.config :refer [cfg]])
  (:gen-class))

(defn start-app
  [host port]

  (run-jetty request-handler {:host host :port port :join? false}))

(defn -main  []
  (start-app (:spankins-daemon-host cfg) (:spankins-daemon-port cfg)))
