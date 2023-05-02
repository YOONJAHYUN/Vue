<template>
  <div id="app">
    <h1>예약 페이지</h1>
    <h3>예약하고 싶은 시간을 선택하세요</h3>
    <h4>최대 5개까지 선택 가능합니다.</h4>
    <HelloWorld :msg="message" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  data() {
    return {
      message: "",
    };
  },
  components: {
    HelloWorld,
  },
};
</script>

<style>
#app {
  font-family: "Noto Sans KR", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #424242;
  margin-top: 60px;
}
h1 {
  color: #ff725f;
  font-weight: bold;
}
</style>
