import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    number: 0,
    doubleNumber: 0,
  },
  getters: {},
  mutations: {
    INCREASE(state) {
      state.number += 1;
      state.doubleNumber = state.number * 2;
    },
    DECREASE(state) {
      state.number -= 1;
      state.doubleNumber = state.number * 2;
    },
  },
  actions: {
    increase(context) {
      context.commit("INCREASE");
    },
    decrease(context) {
      context.commit("DECREASE");
    },
  },
  modules: {},
});
