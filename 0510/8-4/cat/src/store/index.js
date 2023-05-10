import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    urls: null,
  },
  getters: {},
  mutations: {
    LOAD_CAT(state, url) {
      state.urls = url;
      console.log(state.urls);
    },
  },
  actions: {
    loadcat(context) {
      const APIURL = `https://api.thecatapi.com/v1/images/search`;

      axios({
        methods: "get",
        url: APIURL,
      }).then((response) => {
        context.commit("LOAD_CAT", response.data[0]["url"]);
      });
    },
  },
  modules: {},
});
