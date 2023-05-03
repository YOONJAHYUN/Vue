<template>
  <div><input type="text" @keydown.enter="onSearch" /></div>
</template>

<script>
export default {
  name: "SearchBar",
  methods: {
    onSearch(event) {
      this.$emit("on-search", event.target.value);
      // console.log(event.target.value);
    },
  },
};
</script>

<style></style>
