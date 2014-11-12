(ns spankins.test.server
  (:require [cheshire.core :refer :all]
            [clojure.test :refer [is use-fixtures deftest successful? run-tests]]
            [expectations :refer [expect]]
            [clojure.core.match :refer [match]]
            [plumbing.core :refer :all]
            [plumbing.graph :as graph]
            [clojure.core.async :refer [>!! <!! go <! >! alts! chan]]
            [clojure.pprint :refer [pprint]]
            [clojure.xml :as xml]
            [clojure.string :as str]
            [clojure.walk :as walk]))

(comment
(defmacro domain [name & body]
  `{:tag :domain
    :attrs {:name (str '~name)}
    :content [~@body]})

(declare handle-things)

(defmacro grouping [name & body]
  `{:tag :groups
    :attrs {:name (str '~name)}
    :content [~@(handle-things body)]})

(declare grok-attrs grok-props)

(defn handle-things [things]
  (for [t things]
    {:tag :thing
     :attrs (grok-attrs (take-while (comp not vector?) t))
     :content (if-let [c (grok-props (drop-while (comp not vector?) t))]
                [c]
                [])}))

(defn grok-attrs [attrs]
  (into {:name (str (first attrs))}
        (for [a (rest attrs)]
          (cond
           (list? a) [:isa (str (second a))]
           (string? a) [:comment a]))))

(defn grok-props [props]
  (when props
    {:tag :properties, :attrs nil,
     :content (apply vector (for [p props]
                              {:tag :property
                               :attrs {:name (str (first p))}
                               :content nil}))}))

(def d
  (domain man-vs-monster
          (grouping people
                    (Human "A stock human")

                    (Man (isa Human)
                         "A man, baby"
                         [name]
                         [has-beard?]))
          (grouping monsters
                     (Chupacabra
                      "A fierce, yet elusive creature"
                      [eats-goats?]))))

(pprint d)


(defn job-helper [form]
  (if (not (seq? form))
    (str form)
    (let [name (first form)
          children (rest form)]
      (str "<" name ">"
           (apply str (map job-helper children))
           "</" name ">"))))

(defn job-helper [form]
  (if (not (seq? form))
    (form)
    (let [form-name (first form)
          children (rest form)]
      (form-name
           (apply str (map job-helper children))
           "</" name ">"))))


(defmacro job [name ctx & body]
  (let [in (chan)]
    `{:job-name ~name
      :in [~@(chan)]
      :stages [~@body]}))

(defmacro spy-env []
  (let [ks (keys &env)]
    `(prn (zipmap '~ks [~@ks]))))

;; Creating a job spec
(job "build-app" {:commit 456 :upstream-build 2 :uri "http://github.com/blah"}
     (spy-env))

(def build-job (build-app {:parameters {:commit 456 :upstream-build 2}}))

(defmacro postfix-notation
  "I'm too indie for prefix notation"
  [expression]
  (conj (butlast expression) (last expression)))

(postfix-notation (1 1 1 +))

(defmacro code-critic
  "phrases are courtesy Hermes Conrad from Futurama"
  [{:keys [good bad]}]
  (list 'do
        (list 'println
              "Great squid of Madrid, this is bad code:"
              (list 'quote bad))
        (list 'println
              "Sweet gorilla of Manila, this is good code:"
              (list 'quote good))))


(macroexpand-1 '(postfix-notation (1 1 +)))

(quote (+ 1 2))
+
(quote +)
'(+ 1 2)
'+

(defmacro when
  "Evaluates test. If logical true, evaluates body in an implicit do."
  {:added "1.0"}
  [test & body]
  (list 'if test (cons 'do body)))

(macroexpand '(when (the-cows-come :home)
                (call me :pappy)
                (slap me :silly)))

(defmacro unless
  "Inverted 'if'"
  [test & branches]
  (conj (reverse branches) test 'if))

(macroexpand '(unless (done-been slapped? me)
                      (slap me :silly)
                      (say "I reckon that'll learn me")))

(butlast [1 2 3])

(defmacro code-critic
  "phrases are courtesy Hermes Conrad from Futurama"
  [{:keys [good bad]}]
  `(do (println "Great squid of Madrid, this is bad code:"
                (quote ~bad))
       (println "Sweet gorilla of Manila, this is good code:"
                (quote ~good))))


`(+ 1 ~(inc 1))

(defn criticize-code
  [criticism code]
  `(println ~criticism (quote ~code)))

(defmacro code-critic
  [{:keys [good bad]}]
  `(do ~(criticize-code "Cursed bacteria of Liberia, this is bad code:" bad)
       ~(criticize-code "Sweet sacred boa of Western and Eastern Samoa, this is good code:" good)))



;;                              [:ctrl] (#(when (= msg-data 0) (swap! do-work? 0)))



(defmacro job-graph
  [name & body]
  `{:build-name (fnk [~'build-number]
                     (str ~name "-" ~'build-number))
    :input (fnk [~'build-name]
                (let [input# (chan)
                      dispatcher# (fn [msg-ch# msg-tuple#]
                                    (let [[msg-event-token# msg-data#] (take 2 msg-tuple#)]
                                      (do
                                        (def msg-data msg-data#)
                                        (def msg-ch msg-ch#)
                                        (def msg-event-token msg-event-token#)
                                        (match [msg-event-token#]
                                               ~@body
                                               ))))]
                     (go (while true
                           (let [[val# selected-ch#] (alts! [input#])]
                             (dispatcher# selected-ch# val#))))
                     input#))})

(defmacro builder [event & body]
  '[event] ~'body)

(macroexpand (builder :build>! (compile-app msg-data)))

(def  test-job-spec (job-graph "test-job"
                          [:build>!] (#(prn %) msg-data)
                          [:build<!] (#(prn %) msg-data)))

(macroexpand test-job-spec)

(defn compile-app [data] (prn data))
(defn unit-test-app [data] (prn data))

(def test-job-spec (job-graph "test-job"
                              (builder :build>! (compile-app msg-data))
                              (builder :build<! (unit-test-app msg-data))))

(def test-job (graph/eager-compile test-job-spec))
(def test-result (test-fn {:build-number 2}))

(:build-name test-result)

(go (>! (:input test-result) [:build-out "cool"]))
(go (>! (:input test-result) [:build-in "cool"]))
(def stuff (<! (:input test-result)))

(defmacro code-critic
  [{:keys [good bad]}]
  `(do ~(map #(apply criticize-code %)
             [["Great squid of Madrid, this is bad code:" bad]
              ["Sweet gorilla of Manila, this is good code:" good]])))

(code-critic {:good (+ 1 1) :bad (1 + 1)})

(pprint (macroexpand  '(code-critic {:good (+ 1 1) :bad (1 + 1)})))

;; Without unquote splicing
`(+ ~(list 1 2 3))
                                        ; => (clojure.core/+ (1 2 3))

;; With unquote splicing
`(+ ~@(list 1 2 3))
                                        ; => (clojure.core/+ 1 2 3)

(defmacro code-critic
  [{:keys [good bad]}]
  `(do ~@(map #(apply criticize-code %)
              [["Sweet lion of Zion, this is bad code:" bad]
               ["Great cow of Moscow, this is good code:" good]])))


(pprint (macroexpand '(code-critic {:good (+ 1 1) :bad (1 + 1)})) )
                                        ; =>

(def message "Good job!")

(defmacro with-mischief
  [& stuff-to-do]
  (concat (list 'let ['message "Oh, big deal!"])
          stuff-to-do))

(with-mischief
    (println "Here's how I feel about that thing you did: " message))


  (def subscribers [])
  (defn email [])
  (defn report-metrics [])

  (job "test-job"
       (parameter :commit)
       (parameter :upstream-build)
       (builder
        (print "build stuff"))
       (publisher
        (email subscribers)
        (report-metrics)))

(test-job {:commit 1 :upstream-build 1})


(job "test-job"
     {:parameters [(parameter :commit 456 ctx)
                   (parameter :upstream-build 2 ctx)] }
     :builders [(builder
                  (println "I build stuff")
                  (<! out "This is done")
                  (<! ctrl 0))
                ]
     )



(defn parameter [name val ctx]
  (let [session (assoc ctx name val)]
    {:parameters session}))


(defmacro builder [body]
  (let [out (chan)
        in (chan)
        ctrl (chan)
        channels [in out ctrl]
        do-work? (atom 1)
        dispatcher (fn [ch msg-tuple]
                     (let [[msg-event-token msg-data] (take 2 msg-tuple)]
                       (match [msg-event-token]
;;                              [:build-out] (#(prn msg-data) )
                              [:build-in] ((fn [out in ctrl] ~@body))
;;                              [:ctrl] (#(when (= msg-data 0) (swap! do-work? 0)))
                              )))]
    `{:builder ~@(fnk [input]
                    (println input))}))

  (do (go
                         (while ~do-work?
                           (let [[val# ch#] (alts! ~channels)]
                             (~dispatcher ch# val#)))
                         (>! ~in input#))
                       {:in ~in
                        :out ~out
                        :ctrl ~ctrl})

((graph/eager-compile (builder (println "I build stuff"))) {:input "blah"})



(defmacro parameter [name val & ctx]
  `{:parameters [~name ~val]})



           ((graph/eager-compile (parameter :commit 123 {:blah 1})) )



  (xml/emit d)
  This set of macros corresponds to the different components in the job graph.
  Each macro takes an unevaluated job-graph and some code that is linked to a
  event tag.


(defmacro properties)
(defmacro scm)
(defmacro trigger)
(defmacro pre-build)
(defmacro build)
(defmacro post-build)
(defmacro publisher)

(defmacro job
  "Top level continuous integration construct that is used to host runs of builds"
  [{:keys [name commit-hash] :as args}]
  (parameter args)
  (properties args)
  (scm args)
  (trigger args)
  (pre-build args)
  (build args)
  (post-build args)
  (publisher args))

(def php-job-spec  (job :sample-job-name
                        (parameters {:commit-hash "unique id of the checkin theat triggered the build"})
                        (properties {})
                        (scm {:repo-uri nil})
                        (trigger  {})
                        (trigger  {})
                        (pre-build)
                        (build :lein-build
                               (lein/build))
                        (post-build)
                        (publisher :email {})))

(def foo-php-spec (job :foo-qa php-job-spec
                       (:trigger (fn [job] {}))
                       (publisher :coverage {})))




(def qa
  {:parameters (fnk [] nil)})

(def java
  {:publishers (fnk [] nil)})

(def phx
  {:scm (fnk [] nil)})

;; These are the generic actions we do at ops
;; A representation of the inheritance hierarchy

(def app-heirarchy (make-hierarchy (derive ::helios ::php-base)
                                   (derive ::phoenix ::java-base)
                                   (derive ::phx-qa ::phoenix)
                                   (derive ::phx-qa ::phoenix)))

(def env-heirarchy (make-hierarchy (derive ::qa ::base)
                                   (derive ::stg ::base)
                                   (derive ::prd ::stg)))

;; Run the jobs
(defn- build-dispatch [job-name env] env)

(defmult build [job]
  #'build-dispatch
  :default nil
  :hierarchy env-heirarchy)

(defmethod build nil [app env action]
  (action app env))

;; These are the generic jobs we do at ops
(defn- project-build-dispatch [app env])

(defmulti project-build [app env]
  #'project-build-dispatch
  :hierachy app-heirarchy)

(defmethod project-build :php-base [app env]
  (let []))

(defmethod project-build :java-base [app env parameters]
  (let [job-graph (merge base qa java phx)
        job (graph/eager-compile job-graph)]
    (chan (fn [] (job parameters)))))

;; How does this all fit into a reducible
(def php-jobs (reduce php-apps-job-batch-to-run {} [qa-php-jenkins-job-graph]))
(def java-jobs (reduce java-job-batch-to-run {} [qa-php-jenkins-job-graph]))

(def jenkins-job (graph/eager-compile test-data-graph))

(def)

(defn jenkins-server [job-channels])



(defmulti unit-test [app env])
(defmulti regression [app env])
(defmulti deploy [app env])
(defmulti rollback [app env])
)
