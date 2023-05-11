import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

// 장고 서버 -> 장고로 요청보낼꺼니까
const API_URL = "http://127.0.0.1:8000";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    articles: [
      {
        id: 1,
        title: "제목",
        content: "내용",
      },
      {
        id: 2,
        title: "제목2",
        content: "내용2",
      },
    ],
  },
  getters: {},
  mutations: {
    GET_ARTICLES(state, articles) {
      state.articles = articles;
    },
  },
  actions: {
    // 어느 뷰에서도 사용할 수 있도록 여기에다가 정의!
    getArticles(context) {
      // commit은 state를 변경할때 씀
      // 우리는 데이터를 장고에서 받아올거니까 커밋은 안해도돼
      // state에 저장하고 싶을 때만 사용한다.
      axios({
        method: "get",
        url: `${API_URL}/api/v1/articles/`,
      })
        .then((res) => {
          // console.log(res, context);
          context.commit("GET_ARTICLES", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  modules: {},
});
