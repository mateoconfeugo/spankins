(ns spankins.app
  (:require  [spankins.workspace :refer [job-server]]))

(defn main [& args]
  "Application driver attaches event handlers to elements and starts the application going"
  (do (job-server)
      (.log js/console "client app starting")))
