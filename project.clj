(defproject spankins "0.1.0"
  :description "Continuous integration/delivery/deployment DSL running in the context of a web server"
  :url "http://mateoconfeugo.github.io/spankins"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :main spankins.core
  :aot :all
  :uberjar-name "spankins-0.1.0-standalone.jar"
  :jvm-opts ["-Xmx2g" "-server" "-XX:MaxPermSize=1g" "-XX:+CMSClassUnloadingEnabled"]
  :ring {:handler spankins.handler/request-handler :auto-reload? true :auto-refresh true}
  :dependencies [[org.clojure/clojure "1.6.0"] ; lisp and so much more on the jvm
                 [incanter/incanter-core "1.5.5"] ; statistics mathmatics package
                 [craygo/clj-google-spreadsheet "0.1.0"]
                 [cheshire "5.2.0"] ; json
                 [clj-time "0.8.0"] ; joda data time library
                 [com.google.oauth-client/google-oauth-client "1.15.0-rc"]
                 [com.google.http-client/google-http-client-jackson "1.15.0-rc"]
                 [com.google.apis/google-api-services-drive "v2-rev79-1.15.0-rc"]
                 [org.clojure/clojurescript "0.0-2411"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"] ;; CSP go like routines and channels
                 [compojure "1.1.5"] ; Web routing https://github.com/weavejester/compojure
                 [gapi "1.0.1"]
                 [enlive "1.1.5"] ; dom manipulation
                 [com.taoensso/timbre "3.3.1"] ; logging
                 [clj-webdriver "0.6.1"]
                 [clojure-csv/clojure-csv "2.0.1"] ;;
                 [org.clojure/data.zip "0.1.1"] ; System for filtering trees, and XML trees in particular
                 [mysql/mysql-connector-java "5.1.27"]
                 [jayq "2.5.0"] ; jquery
                 [korma "0.4.0"] ; rdbms orm
                 [org.clojure/java.jdbc "0.3.5"]; jdbc client
                 [ring/ring-codec "1.0.0"]
                 [org.clojure/data.csv "0.1.2"]
                 [org.xerial/sqlite-jdbc "3.7.2"]
                 [yesql "0.4.0"]
                 [clj-http "1.0.1"]
                 [org.apache.commons/commons-daemon "1.0.9"]
                 [org.clojure/core.match "0.2.1"] ;; erlang match dispatch
                 [prismatic/plumbing "0.3.3"] ;; function graphs
                 [riemann-clojure-client "0.2.11"] ; monitoring
                 [shoreleave "0.3.0"]
                 [shoreleave/shoreleave-remote "0.3.0"]
                 [shoreleave/shoreleave-remote-ring "0.3.0"] ; web server logging middleware
                 [me.raynes/fs "1.4.4"]
                 [ring "1.2.0"] ; Webserver framework
                 [ring/ring-jetty-adapter "1.2.0"]
                 [ring.middleware.logger "0.4.0"]
                 [ring-anti-forgery "0.3.0"] ;
                 [amalloy/ring-gzip-middleware "0.1.3" :exclusions [org.clojure/clojure]]
                 [de.ubercode.clostache/clostache "1.4.0"] ;; text templating
                 [com.ashafa/clutch "0.4.0-RC1"] ; CouchDB client https://github.com/clojure-clutch/clutch
                 [clojurewerkz/urly "1.0.0"]
                 [crypto-random "1.1.0"]
                 [ring-mock "0.1.5"]
                 [ring/ring-devel "1.2.1"]
                 [ch.qos.logback/logback-classic "1.0.9"]] ; filesystem utils
  :uberimage {:instructions ["RUN apt-get update && apt-get -y dist-upgrade && apt-get install sqlite3"]
              :tag "mateoconfeugo/ltd"}
  :profiles  {:dev {:dependencies [[expectations "1.4.56"]
                                   [ring-mock "0.1.5"]
                                   [ring/ring-devel "1.2.1"]]
                    :plugins [[com.palletops/pallet-lein "0.8.0-alpha.1"]]}
              :leiningen/reply {:dependencies [[org.slf4j/jcl-over-slf4j "1.7.2"]]
                                :exclusions [commons-logging]}}
  :cljsbuild { :builds [{:source-paths ["src-cljs"]
                         :compiler {:output-to "resources/public/js/app.js"  ; default: target/cljsbuild-main.js
                                    :optimizations :whitespace
                                    :pretty-print true}}]}
  :repositories [["private" {:url "s3p://marketwithgusto.repo/releases/"
                             :username :env
                             :passphrase :env}]]
  :plugins [[lein-ancient "0.5.4"]
            [lein-ring "0.8.6"] ;; run ring server via lein
            [lein-cljsbuild "1.0.3"] ;;  make ClojureScript development easy
            [com.palletops/uberimage "0.3.0"]
            [s3-wagon-private "1.1.2"] ;; uses AWS s3 bucket as a private repo for jars
            [lein-expectations "0.0.7"] ;; run expections via lein
            [lein-marginalia "0.7.1"] ;; literate programming documentation genration
            [lein-autoexpect "0.2.5"]]) ;; run continuous expections tests
