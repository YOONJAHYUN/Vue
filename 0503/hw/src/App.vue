<template>
  <div id="app">
    <h1>My first youtube project</h1>
    {{ videos }}
    <SearchBar @search-input-data="onSearchInputData" />
    <VideoList :video-list="videos" />
    <VideoDetail />
  </div>
</template>

<script>
import SearchBar from "./components/SearchBar.vue";
import VideoDetail from "./components/VideoDetail.vue";
import VideoList from "./components/VideoList.vue";

import axios from "axios";

export default {
  name: "App",
  components: {
    SearchBar,
    VideoDetail,
    VideoList,
  },
  data() {
    return {
      searchData: "",
      videos: [],
    };
  },
  methods: {
    onSearchInputData(searchInputData) {
      this.searchData = searchInputData;

      const youtubeURL = `https://www.googleapis.com/youtube/v3/search?key=AIzaSyCNm1ZQHmUodxsuHZ9pM89jvppF7oo2FwA&part=snippet&type=video&q=${this.searchData}`;

      axios({
        method: "get",
        url: youtubeURL,
      })
        .then((response) => {
          this.videos = response.data.items;

          console.log(this.videos);
        })
        .catch((err) => console.log(err));
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
