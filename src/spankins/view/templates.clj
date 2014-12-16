(ns spankins.view.templates
  (:require [spankins.view.snippets :refer [site-nav-header menu-item-model menu-model nav-bar]]
            [net.cgrand.enlive-html :refer [deftemplate defsnippet content sniptest emit* set-attr]]))

(deftemplate index-page "templates/html/index.html"
  [{:keys [site-name pages menu-data] :as settings}]
  [:div#navbar] (content (nav-bar {:title site-name :menu-data menu-data})))
