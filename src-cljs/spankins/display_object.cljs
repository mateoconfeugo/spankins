(comment
(defn ^:export new-error-channel
  [{:keys [] :as args}]
  (chan))

(defn ^:export get-channels [display-object]
  [(:ec display-object) (:mqc display-object) (:css-in display-object)])

(defn ^:export render-display-object [display-object]
  (let [model (:model display-object)
        dispatch (:dispatcher display-object)]
    (dispatch  model (:ec display-object))))

(defn ^:export render-display-object-to-channel  [display-object channel]
  (go (>! channel (render-display-object display-object))))

(defn ^:export route-html-to-el [display-object])

(defn ^:export create-event-channels [dply-obj-cfg]
  (map #(listen (:el %) (:type %) (:handler-fn %)) (-> dply-obj-cfg :event-channel-handler)))

(defn new-channel-set
  [{:keys [name type input output error monitor] :as cfgs}]
  {:name name
   :type type
   :input input
   :output (chan)
   :ec
   :monitor (chan)})


  )
