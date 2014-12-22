(ns spankins.repl-server
  (:require [clojure.tools.nrepl.server :refer [start-server stop-server]]
            [clojure.tools.nrepl :refer [connect client message response-values]]))

(test-job-data/van)
(ns-publics *ns*)
(user/mar )
(loaded-libs)
(defn foo []
  {:crazy :data})

(defonce server (start-server :port 7888))

(defn start-repl-server [port]
  (start-server :port port))

(defn stop-repl-server [server]
  (stop-server server))

(require 'expectations)

(def server (start-repl-server 7888))
(stop-repl-server server)


(with-open [conn (connect :port 7888)]
  (-> (client conn 1000)
      (message {:op :eval :code "(+ 1 1)"})
      response-values))