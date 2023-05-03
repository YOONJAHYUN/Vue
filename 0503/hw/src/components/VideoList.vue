<template>
  <div>
    <h1>비디오 목록</h1>
    <p>{{ videos }}</p>
    <VideoListItem />
  </div>
</template>

<script>
import VideoListItem from "./VideoListItem.vue";

export default {
  name: "VideoList",
  props: {
    videos: Array,
  },
  components: {
    VideoListItem,
  },
};
</script>

<style></style>
