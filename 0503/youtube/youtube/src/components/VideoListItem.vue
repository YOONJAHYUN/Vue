<template>
  <div @click="selectVideo">
    {{ video.snippet.title }}
  </div>
</template>

<script>
export default {
  name: "VideoListItem",
  props: {
    video: Object,
  },
  methods : {
    selectVideo() {
      this.$emit('select-video', this.video)
    }
  }
};
</script>

<style></style>
