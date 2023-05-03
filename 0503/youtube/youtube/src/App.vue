<template>
  <div id="app">
    <h1>My first youtube pjt</h1>
    <SearchBar @on-search="youtubeSearch" />
    <br />
    <VideoDetail v-if="selectedVideo" :selected-video="selectedVideo" />
    <VideoList :video-list="videoList" @select-video="selectVideo" />
  </div>
</template>

<script>
import axios from "axios";
import SearchBar from "./components/SearchBar.vue";
import VideoList from "./components/VideoList.vue";
import VideoDetail from "./components/VideoDetail.vue";

export default {
  name: "App",
  components: {
    SearchBar,
    VideoList,
    VideoDetail,
  },
  data() {
    return {
      videoList: [],
      selectedVideo: null,
    };
  },
  methods: {
    youtubeSearch(keyWord) {
      const params = {
        type: "video",
        q: keyWord,
        key: "AIzaSyADSzDtuUcyQtUtF84eTvglf7kl7SHxCd0",
        part: "snippet",
      };
      axios({
        method: "get",
        url: "https://www.googleapis.com/youtube/v3/search",
        params,
      })
        .then((res) => {
          this.videoList = res.data.items;
          // console.log(res.data.items);
          // console.log("데이터들어옴");
        })
        .catch((err) => console.log(err));
    },
    selectVideo(video) {
      this.selectedVideo = video;
      console.log(video);
      console.log("선택!!");
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
