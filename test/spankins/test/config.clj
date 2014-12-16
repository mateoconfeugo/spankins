(ns spankins.test.config
  (:require [expectations :refer [expect]]
            [spankins.config :refer [cfg]]))

(expect true (= "org.sqlite.JDBC" (-> cfg :spankins-dsn :classname)))
