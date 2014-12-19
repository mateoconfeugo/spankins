(ns spankins.app
  (:require [jayq.core :refer [document-ready]]
            [spankins.workspace :refer [job-server overview  overview-page  display-stage run-test]]))

(defn main [& args]
  "Application driver attaches event handlers to elements and starts the application going"
  (job-server)
;;  (run-test)
  )
    ;;    (job-server)
(document-ready main)
