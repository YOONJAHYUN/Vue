<template>
  <div>
    <h1>Article Page</h1>
    <router-link :to="{ name: 'CreateView' }">[CREATE]</router-link>
    <ArticleList />
    <hr />
  </div>
</template>

<script>
import ArticleList from "../components/ArticleList.vue";
export default {
  name: "ArticleView",
  components: {
    ArticleList,
  },
  computed: {},
  created() {
    // 페이지 불러오자마자 실행되어야 하니까 created로
    this.getArticles();
  },
  methods: {
    getArticles() {
      this.$store.dispatch("getArticles");
    },
  },
};
</script>

<style></style>
