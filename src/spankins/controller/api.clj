(ns spankins.controller.api
  ^{:author "Matthew Burns"
    :doc "API controller for editor client brings together client user data, database"}
  (:refer-clojure :exclude [assoc! conj! dissoc! parents])
  (:import [org.apache.commons.codec.binary Base64])
  (:require [clojure.core :as core]))
