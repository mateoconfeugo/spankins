(ns spankins.routes
  (:require [clojure.core.async :refer [<! >! put! close! go]]
            [compojure.core :refer [defroutes GET routes]]
            [compojure.route :refer [resources not-found]]
            [shoreleave.middleware.rpc :refer [remote-ns]]
            [spankins.controller.api]
            [spankins.controller.site :refer [site-routes]]
            [spankins.controller.tools :refer [user-mgmt-routes]]))

(remote-ns 'spankins.controller.api :as "api")

(defroutes app-routes
  (resources "/design/" {:root "templates/html"})
  (resources "/design/css/" {:root "public/css"})
  (resources "/css/" {:root "public/css"})
  (resources "/js/" {:root "public/js"})
  (not-found "404 Page not found."))

(def all-routes (routes site-routes app-routes user-mgmt-routes))
