(ns spankins.routes
  (:require [compojure.core :refer [defroutes GET routes]]
            [compojure.route :refer [resources not-found]]
            [shoreleave.middleware.rpc :refer [remote-ns]]
            [spankins.controller.api]
            [spankins.controller.site :refer [site-routes]]))

(remote-ns 'spankins.controller.api :as "api")

(defroutes app-routes
  (resources "/design/" {:root "templates/html"})
  (resources "/design/css/" {:root "public/css"})
  (resources "/css/" {:root "public/css"})
  (resources "/js/" {:root "public/js"})
  (not-found "404 Page not found."))

(def all-routes (routes site-routes app-routes))
