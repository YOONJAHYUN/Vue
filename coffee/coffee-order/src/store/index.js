import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    menuList: [
      {
        title: "아메리카노",
        price: 3000,
        options: true, // ice,hot
        selected: true, // 초기값
      },
      {
        title: "라떼",
        price: 3000,
        options: true, // ice,hot
        selected: true, // 초기값
      },
      {
        title: "캬라멜마끼아또",
        price: 3000,
        options: true, // ice,hot
        selected: true, // 초기값
      },
      {
        title: "바닐라라떼",
        price: 3000,
        options: true, // ice,hot
        selected: true, // 초기값
      },
      {
        title: "아메리카노",
        price: 3000,
        options: true, // ice,hot
        selected: true, // 초기값
      },
      {
        title: "아메리카노",
        price: 3000,
        options: true, // ice,hot
        selected: true, // 초기값
      },
      {
        title: "아메리카노",
        price: 3000,
        options: true, // ice,hot
        selected: true, // 초기값
      },
      {
        title: "아메리카노",
        price: 3000,
        options: true, // ice,hot
        selected: true, // 초기값
      },
      {
        title: "아메리카노",
        price: 3000,
        options: true, // ice,hot
        selected: true, // 초기값
      },
    ],
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
