(ns spankins.core
  (:import [org.apache.commons.daemon Daemon DaemonContext])
  (:require  [riemann.client :refer [send-event tcp-client]]
             [spankins.server :refer [start-app]]
             [spankins.config :refer [cfg]])
  (:gen-class :implements [org.apache.commons.daemon.Daemon]))

;; A placeholder approximation of application's state
(def state (atom {}))
(defn init [args] (swap! state assoc :running true))
(defn start [] (spankins.server/start-app (:spankins-daemon-host cfg) (Integer/parseInt (or (System/getenv "PORT") (:spankins-daemon-port cfg)))))
(defn stop []  (swap! state assoc :running false))

;; Daemon implementation
(defn -init [this ^ DaemonContext context] (init (.getArguments context)))
(defn -start [this] (future (start)))
(defn -stop [this] (stop))
(defn -destroy [this])

;; Enable command-line invocation
(defn -main [& args] (init args) (start))

(comment
  (def monitoring-bus (tcp-client :host monitoring-uri :port monitoring-port))
  (if-let [monitoring-bus (try (tcp-client) (catch IOException e))]
    (riemann.client/send-event monitoring-bus {:service "builds" :state "success" :tags["jobs"]})))
