(ns spankins.view.host-dom
  (:require [spankins.view.templates :refer [index-page]]))

(defn render-str [t] (apply str t))

(defn render-dom
  [{:keys [pages menu] :as args}]
  (index-page {:site-name "Spankins - Take it!" :pages nil :menu-data menu}))
