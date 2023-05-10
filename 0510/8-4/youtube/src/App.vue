<template>
  <div id="app">
    <h1>SSAFY TUBE</h1>
    <Youtube/>
  </div>
</template>

<script>
import Youtube from './components/Youtube.vue'
export default {
  name: 'App',
  components: {
    Youtube
  },
}
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
