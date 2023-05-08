import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    urls: [],
    selected : {}
  },
  getters: {},
  mutations: {
    LOAD_CATS(state, url) {
      state.urls.push({ "url": url, "name": "cat" });
      console.log(url);
      console.log(this.state.urls)
    },
    LOAD_DOGS(state, url) {
      state.urls.push({ "url": url, "name": "dog" });
      console.log(url);
    },
  },
  actions: {
    loadcats(context) {
      const catImageSearchURL = "https://api.thecatapi.com/v1/images/search";
      axios({
        methods: "get",
        url: catImageSearchURL,
      }).then((res) => {
        // const data = {
        //   id,
        //   url,
        // };
        const { url } = res.data[0];
        context.commit("LOAD_CATS", url);
      });
    },
    loaddogs(context) {
      const dogImageSearchURL = "https://dog.ceo/api/breeds/image/random";
      axios({
        method: "get",
        url: dogImageSearchURL,
      }).then((res) => {
        context.commit("LOAD_DOGS", res.data.message);
      });
    },
  },
  modules: {},
});
