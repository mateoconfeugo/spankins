(defproject spankins "0.1.0"
  :description "Continuous integration/delivery/deployment DSL running in the context of a web server"
  :url "http://mateoconfeugo.github.io/spankins"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :main spankins.core
  :aot :all
  :uberjar-name "spankins-0.1.0-standalone.jar"
  :jvm-opts ["-Xmx2g" "-server" "-XX:MaxPermSize=1g" "-XX:+CMSClassUnloadingEnabled"]
  :ring {:handler spankins.server/-main :auto-reload? true :auto-refresh true}
  :dependencies [[amalloy/ring-gzip-middleware "0.1.3" :exclusions [org.clojure/clojure]]
                 [com.ashafa/clutch "0.4.0"]
;;                 [com.taoensso/timbre "3.3.1"]
                 [compojure "1.3.1"]
                 [cheshire "5.4.0"]
;;                 [ch.qos.logback/logback-classic "1.1.2"]
                 [clj-http "1.0.1"]
                 [clj-time "0.8.0"]
                 [clj-webdriver "0.6.1"]
                 [clojure-csv/clojure-csv "2.0.1"]
                 [clojurewerkz/urly "1.0.0"]
                 [crypto-random "1.2.0"]
                 [de.ubercode.clostache/clostache "1.4.0"]
                 [enlive "1.1.5"]
                 [gapi "1.0.1"]
                 [incanter/incanter-core "1.5.5"]
                 [javax.servlet/servlet-api "2.5"]
                 [jayq "2.5.2"]
                 [korma "0.4.0"]
                 [me.raynes/fs "1.4.6"]
                 [mysql/mysql-connector-java "5.1.34"]
                 [org.clojure/java.jdbc "0.3.6"]
                 [org.apache.commons/commons-daemon "1.0.9"]
                 [org.clojure/core.match "0.2.2"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2411" :exclusions [org.apache.ant/ant]]
                 [org.clojure/core.typed "0.2.72"]
                 [org.clojure/data.zip "0.1.1"]
                 [org.clojure/data.csv "0.1.2"]
                 [org.xerial/sqlite-jdbc "3.8.7"]
                 [prismatic/plumbing "0.3.5"]
                 [ring/ring-codec "1.0.0"]
                 [riemann-clojure-client "0.2.12"]
                 [ring "1.3.2"]
                 [ring/ring-jetty-adapter "1.3.2"]
;;                 [ring.middleware.logger "0.5.0"]
                 [ring-anti-forgery "0.3.0"]
                 [ring-mock "0.1.5"]
                 [ring/ring-devel "1.3.2"]
                 [shoreleave "0.3.0"]
                 [shoreleave/shoreleave-remote "0.3.0"]
                 [shoreleave/shoreleave-remote-ring "0.3.0"]
                 [yesql "0.4.0"]]
  :cljsbuild {:builds [{:source-paths ["src-cljs"]
                         :compiler {:output-to "resources/public/js/main.js"
                                    :optimizations :whitespace
                                    :pretty-print true}}]}
  :plugins [[lein-ring "0.8.7"]
            [lein-cljsbuild "1.0.4-SNAPSHOT"]])
;;            [lein-ancient "0.5.4"]
;;            [com.palletops/pallet-lein "0.8.0-alpha.1"]
;;            [com.palletops/uberimage "0.3.0"] ;; Make a docker image
;;            [s3-wagon-private "1.1.2"] ;; uses AWS s3 bucket as a private repo for jars
;;            [lein-expectations "0.0.7"] ;; run expections via lein
;;            [lein-marginalia "0.7.1"] ;; literate programming documentation genration
            ;;            [lein-autoexpect "0.2.5"]
            ;;                 [expectations "2.0.13"]
