(defproject spankins "0.1.0"
  :description "Continuous integration/delivery/deployment DSL running in the context of a web server"
  :url "http://mateoconfeugo.github.io/spankins"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :main spankins.core
  :source-paths ["src"]
  :aot :all
  :uberjar-name "spankins-0.1.0-standalone.jar"
  :jvm-opts ["-Xmx2g" "-server" "-XX:MaxPermSize=1g" "-XX:+CMSClassUnloadingEnabled"]
  :ring {:handler spankins.handler/request-handler :auto-reload? true :auto-refresh true}
  :dependencies [[amalloy/ring-gzip-middleware "0.1.3" :exclusions [org.clojure/clojure]]
                 [compojure "1.3.1"]
                 [cheshire "5.4.0"]
                 [clj-http "1.0.1"]
                 [clj-time "0.8.0"]
                 [enfocus "2.0.2"]
                 [enlive "1.1.5"]
                 [expectations "2.0.13"]
                 [jayq "2.5.2"]
                 [korma "0.4.0"]
                 [mysql/mysql-connector-java "5.1.34"]
                 [org.clojure/java.jdbc "0.3.6"]
                 [org.apache.commons/commons-daemon "1.0.9"]
                 [org.clojure/core.match "0.2.2"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2411" :exclusions [org.apache.ant/ant]]
                 [prismatic/plumbing "0.3.5"]
                 [ring/ring-codec "1.0.0"]
                 [riemann-clojure-client "0.2.12"]
                 [ring "1.3.2"]
                 [ring-server "0.3.1" :exclusions [[org.clojure/clojure] [ring]]]
                 [ring-refresh "0.1.2" :exclusions [[org.clojure/clojure] [compojure]]]
                 [ring/ring-jetty-adapter "1.3.2"]
                 [ring.middleware.logger "0.5.0"]
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
            [lein-cljsbuild "1.0.4-SNAPSHOT"]
            [lein-ancient "0.5.4"]
            [com.palletops/pallet-lein "0.8.0-alpha.1"]
            [com.palletops/uberimage "0.3.0"]
            [s3-wagon-private "1.1.2"]
            [lein-expectations "0.0.7"]
            [lein-marginalia "0.7.1"]
            [lein-autoexpect "0.2.5"]])
            ;;

;;                 [com.ashafa/clutch "0.4.0"]
;;                 [com.taoensso/timbre "3.3.1"]
;;                 [org.slf4j/slf4j-api "1.6.2"]
;;                 [org.slf4j/slf4j-log4j12 "1.6.2"]
                 ;;                 [log4j "1.2.16"]
;;                 [clojurewerkz/urly "1.0.0"]
                 ;;                 [commons-logging "1.1.1"]
;;                 [clj-webdriver "0.6.1"]
                 ;;                 [crypto-random "1.2.0"]
;;                 [gapi "1.0.1"]
;;                 [incanter/incanter-core "1.5.5"]
;;                 [javax.servlet/servlet-api "2.5"]
;;                 [log4j "1.2.17" :exclusions [javax.mail/mail javax.jms/jms com.sun.jdmk/jmxtools com.sun.jmx/jmxri]]
;;                 [me.raynes/fs "1.4.6"]
                 ;;                 [metis "0.3.3"] ; Validation
;;                 [org.clojure/core.typed "0.2.72"]
                 ;;                 [org.clojure/data.zip "0.1.1"]

;;                 [org.xerial/sqlite-jdbc "3.8.7"]
