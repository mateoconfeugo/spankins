(ns spankins.driver
  (:require-macros [jayq.macros :refer [ready]])
  (:require [spankins.dashboard :as dash :refer [new-async-app]]))

(defn main [& args]
  "Application driver attaches event handlers to elements and starts the application going"
  (do (dash/new-async-app :body)
      (.log js/console "client app starting")))

(comment
  (main)
  )
