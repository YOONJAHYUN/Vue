<template>
  <div>
    <iframe :src="imgSrc" frameborder="0"></iframe>
    <p>{{ selectedVideo.snippet.title }}</p>
  </div>
</template>

<script>
export default {
  name: "VideoDeatil",
  props: {
    selectedVideo: Object,
  },
  computed: {
    imgSrc() {
      console.log(`https://www.youtube.com/embed/${this.selectedVideo.id.videoId}`)
      return `https://www.youtube.com/embed/${this.selectedVideo.id.videoId}`;
      
    },
  },
};
</script>

<style></style>
