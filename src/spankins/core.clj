(ns spankins.core
  (:import [org.apache.commons.daemon Daemon DaemonContext])
  (:require  [riemann.client :only [send-event tcp-client]])
  (:gen-class :implements [org.apache.commons.daemon.Daemon]))

(comment
(if-let [monitoring-bus (try (tcp-client) (catch IOException e))]
  (riemann.client/send-event monitoring-bus {:service "builds" :state "success" :tags["jobs"]
}))
)

;;(def monitoring-bus (tcp-client :host monitoring-uri :port monitoring-port))

;; A placeholder approximation of application's state
(def state (atom {}))

(defn init
  [args]
  (swap! state assoc :running true))


(defn start
  []
  (while (:running @state)
    (println "tick") (Thread/sleep 2000)))

(defn stop
  []
  (swap! state assoc :running false))

;; Daemon implementation
(defn -init [this ^ DaemonContext context] (init (.getArguments context)))
(defn -start [this] (future (start)))
(defn -stop [this] (stop))
(defn -destroy [this])

;; Enable command-line invocation
(defn -main [& args] (init args) (start))
