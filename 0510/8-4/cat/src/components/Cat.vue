<template>
  <div>
    <h1>Cat Image</h1>
    <button @click="getCat">Get Cat</button>
    <img :src="urls" alt="" />
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "MakeCat",
  methods: {
    getCat() {
      this.$store.dispatch("loadcat");
    },
  },
  computed: {
    ...mapState(["urls"]),
  },
};
</script>

<style></style>
