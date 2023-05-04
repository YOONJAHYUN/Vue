<template>
  <div>
    <h1>Counter</h1>
    <h2>Counter :{{ this.$store.state.number }}</h2>
    <h2>Double Counter :{{ this.$store.state.doubleNumber }}</h2>
    <button @click="increase">increase</button>
    <button @click="decrease">decrease</button>
  </div>
</template>

<script>
export default {
  name: "CounterBtn",
  methods: {
    increase() {
      this.$store.dispatch("increase");
      // this.$store.state.number += 1;
      // this.doubleNum = this.$store.state.number * 2;
      // console.log(this.$store.state.number);
    },
    decrease() {
      this.$store.dispatch("decrease");

      // this.$store.state.number -= 1;
      // this.doubleNum = this.$store.state.number * 2;
    },
  },
};
</script>

<style></style>
