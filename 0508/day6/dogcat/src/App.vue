<template>
  <div id="app">
    <div>선택됨: {{ $store.state.selected }}</div>

    <select v-model="selected">
      <option disabled value="">다음 중 하나를 선택하세요</option>
      <option>all</option>
      <option>cat</option>
      <option>dog</option>
    </select>


    <button @click="loadcats">고양이</button>
    <button @click="loaddogs">강아지</button>
    <div v-for="(url, index) in urls" :key="index">
      <img style="height: 300px" v-if="url.name === 'cat' && selected === `all`" :src="url.url" alt="">
      <p v-if="url.name === 'cat' && selected === `all`" style="color:red;">cat</p>
      <img style="height: 300px" v-if="url.name === 'dog' && selected === `all`" :src="url.url" alt="">
      <p v-if="url.name === 'dog' && selected === `all`" style="color:blue;">dog</p>
    </div>
  </div>
</template>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
import { mapState } from "vuex";

export default {
  name: "App",
  methods: {
    loadcats() {
      this.$store.dispatch("loadcats");
    },
    loaddogs() {
      this.$store.dispatch("loaddogs");
    },
  },
  components: {},
  computed: {
    ...mapState(["urls"]),
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
