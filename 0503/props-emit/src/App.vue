<template>
  <div id="app">
    <h1>APP</h1>
    <!-- input에 입력되는 값을 appData에 바인딩해서 화면에 보이도록 하고 싶다. -->
    <!-- 양방향 바인딩을 해주는 directive v-model -->
    <!-- input의value와 vue의 data중, 특정 속성을 양방향으로 묶어버린다. -->
    <input type="text" v-model="appData" />
    <p>AppData : {{ appData }}</p>
    <p>Childdata : {{ childData }}</p>
    <!-- 데이터 prop -->
    <AppParent @child-input-change="onChildInputData" :app-data="appData" />
  </div>
</template>

<script>
import AppParent from "./components/AppParent.vue";

export default {
  name: "App",
  components: {
    AppParent,
  },
  data() {
    return {
      appData: "",
      childData: "",
    };
  },
  methods: {
    onChildInputData(childInputData) {
      console.log("1234");
      this.childData = childInputData;
    },
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
