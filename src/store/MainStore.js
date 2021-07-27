import { createStore } from "vuex";
import Vue from "vue";

import Auth from "./Auth";
import products from "./products";
import Cart from "./Cart";

export default createStore({
  modules: {
    Auth,
    products,
    Cart,
  },
  state: {},
  mutations: {},
  actions: {},
});
