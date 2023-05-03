<template>
  <div>
    <VideoListItem
      v-for="video in videoList"
      :key="video.id.videoId"
      :video="video"
      @select-video="selectVideo"
    />
  </div>
</template>

<script>
import VideoListItem from "./VideoListItem.vue";
export default {
  name: "VideoList",
  components: {
    VideoListItem,
  },
  props: {
    videoList: Array,
  },
  methods: {
    selectVideo(video) {
      this.$emit("select-video", video);
    },
  },
};
</script>

<style></style>
