(ns spankins.core
  (:import [org.apache.commons.daemon Daemon DaemonContext])
  (:require  [riemann.client :refer [send-event tcp-client]]
             [spankins.server :refer [start-app]]
             [spankins.config :refer [cfg]])
  (:gen-class :implements [org.apache.commons.daemon.Daemon]))

(def monitoring-bus (tcp-client :host (:monitor-host cfg)  :port (:monitor-port cfg)))
(def state (atom {}))

(defn init [args] (swap! state assoc :running true))

(defn start []
  (do
    (spankins.server/start-app (:spankins-daemon-host cfg) (:spankins-daemon-port cfg)))
    (if-let [monitoring-bus (try (tcp-client) (catch java.io.IOException e))]
      (riemann.client/send-event monitoring-bus {:service "spankins-daemon started" :state "info" :tags["spankins-daemon"]})))

(defn stop []  (swap! state assoc :running false))

;; Daemon implementation
(defn -init [this ^ DaemonContext context] (init (.getArguments context)))
(defn -start [this] (future (start)))
(defn -stop [this] (stop))
(defn -destroy [this])

;; Enable command-line invocation
(defn -main [& args] (init args) (start))
