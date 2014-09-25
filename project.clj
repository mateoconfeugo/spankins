(defproject spankins "0.1.0"
  :description "jenkins inspired continuous integration server"
  :url "http://mateoconfeugo.github.io/spankins"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :main spankins.core
  :aot :all
  :dependencies [[cheshire "5.3.1"]
                 [clj-http "1.0.0"]
                 [com.taoensso/timbre "3.3.1"]
                 [com.datomic/datomic-free "0.9.4755"]
                 [com.keminglabs/zmq-async "0.1.0"]
                 [datomic-schema "1.1.0"]
                 [expectations "2.0.9"]
                 [org.clojure/clojure "1.6.0"]
                 [org.apache.commons/commons-daemon "1.0.9"]
                 [org.clojure/core.async "0.1.303.0-886421-alpha"]
                 [org.clojure/core.match "0.2.1"]
                 [prismatic/plumbing "0.3.3"] ;; function graphs
                 [me.raynes/fs "1.4.4"]]
  :plugins [[lein-ring "0.8.6"] ;; run ring server via lein
            [lein-ancient "0.5.4"]
            [s3-wagon-private "1.1.2"] ;; uses AWS s3 bucket as a private repo for jars
            [lein-expectations "0.0.7"] ;; run expections via lein
            [lein-marginalia "0.7.1"]
            [lein-autoexpect "0.2.5"]] ;; run continuous expections tests
  )
