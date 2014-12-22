(ns spankins.repl-client
  (:require [clojure.tools.nrepl :as repl :refer [connect client message response-values]]
            [clojure.pprint :refer [pprint]]))

(defn read-all
  [f]
  "Reads all top-level forms from f, which will be coerced by
  clojure.java.io/reader into a suitable input source. Not lazy."
  (with-open [pbr (java.io.PushbackReader. (clojure.java.io/reader f))]
    (doall
     (take-while
      #(not= ::eof %)
            (repeatedly #(read pbr false ::eof))))))

(def src-code (read-all (java.io.FileReader. "test_job.clj")))

(defn run-loaded-code-on-server [file server port]
  (with-open [conn (repl/connect :port 7888)]
    (-> (repl/client conn 1000)
        (repl/message {:op :eval :code src-code})
        doall
        pprint)))

(defn load-code-on-server [filename server port]
  (with-open [conn (repl/connect :host server :port (or port 7888))]
    (-> (repl/client conn 1000)
        (repl/message {:op :eval :code "(load-file  filename)"})
        doall
        pprint)))

(defn get-job-src-code [job]
  "Gets the data model needed to build the job from  the document store"
  {})

(defn get-src-code-filename [user job base-dir]
  "Creates the file name based from user and job data"
  (str base-dir "/user-" (:id user) "-job-" (:id job) "-data.clj"))

(defn copy-to-delivery [filename server]
  "Moves the customized job clojure source code file to the delivery server")

(defn publish-job [user job destinations]
  "Publish to the destinations.
   A customized piece of clojure code that contains the function that
   the server uses to build the job that houses all the go routines and
   resources the workflow needs to run."
  (let [ls-src-code (get-job-src-code user job)
        filename (get-src-code-filename user job)]
    (doseq [d destinations]
      (publish-code code d)
      (load-code-on-server filename (:host d) (:port d))
      (with-open [conn (repl/connect (:host d) (:port d))]
        (-> (repl/client conn 1000)
            (repl/message {:op :eval :code "(report-publish-successful)"})
            doall)))))

(defn publish-code [code server]
  "Moves the clojure source code from the authoring area into
   the production publishing servers"
  (->> code spit (copy-to-delivery server))


(load-code-on-server src-code)
(run-loaded-code-on-server )
