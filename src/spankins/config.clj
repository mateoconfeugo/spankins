(ns spankins.config
  (:require  [shoreleave.server-helpers :refer [safe-read]]))

(def cfg (safe-read (slurp (str (System/getProperty "user.dir") "/resources/spankins_config.edn"))))
