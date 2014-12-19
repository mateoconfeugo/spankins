(ns spankins.protocols)

(defprotocol Job
  (build [this parameters]))