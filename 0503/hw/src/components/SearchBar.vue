<template>
  <div>
    <input type="text" v-model="searchData" @input="onSearchInputData" />
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  data() {
    return {
      searchData: "",
    };
  },
  methods: {
    onSearchInputData() {
      this.$emit("search-input-data", this.searchData);
      console.log("searchbar의 값");
      console.log(this.searchData);
    },
  },
};
</script>

<style></style>
