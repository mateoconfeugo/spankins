(ns spankins.view.snippets
  (:require [net.cgrand.enlive-html :refer [defsnippet content sniptest emit* set-attr nth-of-type first-child do->]]))

(def ^:dynamic *default-stats-sel* [:section#default-stats])

(defsnippet default-stats-summary "templates/default_stats_summary.html" *default-stats-sel*
  [model]
  [:tr :td] (content "foo"))

(def ^:dynamic *job-summary-sel* [:section#default-stats])

(defsnippet  job-stats-summary "templates/job_stats_summary.html" *job-summary-sel*
  [model])


(defsnippet site-nav-header "templates/site-nav-header.html" [:nav.container-fluid]
  [site-name]
  [:a.brand] (content site-name))

(defsnippet menu-item-model "templates/site-nav-header.html" [[:ul.dropdown-menu (nth-of-type 1)] :> first-child]
  [item]
  [:a] (do->
        (content (:menu_item_text item))
        (set-attr :href (:menu_item_url item))))

(defsnippet menu-model "templates/site-nav-header.html" [:li.dropdown]
  [{:keys [drop_down_menu_name  menu_item]} model]
  [:.menu-header]   (content drop_down_menu_name)
  [:ul.dropdown-menu] (content (map model  menu_item)))

(defsnippet nav-bar  "templates/site-nav-header.html" [:nav.container-fluid]
  [{:keys [title menu-data]}]
  [:a.brand] (content title)
  [:ul#nav-bar-dropdown-menu] (content (map #(menu-model % menu-item-model)  menu-data)))
