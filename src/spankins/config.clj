(ns spankins.config
  ;;  (:require  [shoreleave.server-helpers :refer [safe-read]])
  )

;;(def cfg (safe-read (slurp (str (System/getProperty "user.dir") "/resources/spankins_config.edn"))))
(def cfg { :sql-statements "spankins/model/sql/queries.sql"
          :export {:output-dir "resources/publish/output"}
          :javascript {:3rd-party "resources/public/js/lib"
                       :css "resources/public/css"
                       :images "resources/public/css"}
          :cljs "resources/public/"
          :spankins-daemon-port 10333
          :spankins-daemon-host "localhost"
          :monitor-host "localhost"
          :monitor-port 5555
          :spankins-dsn {:classname "org.sqlite.JDBC"
                         :subprotocol "sqlite"
                         :subname "spankins.sqlite"}
          })
