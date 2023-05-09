<template>
  <div>
    <ul>
      <li>{{ numbers | joinArray }}</li>
    </ul>
  </div>
</template>

<script>
import _ from "lodash";

export default {
  name: "LottoItem",
  props: {
    numbers: Array,
  },
  filters: {
    joinArray(arr) {
      return _.sortBy(arr).join(" ");
    },
  },
};
</script>

<style></style>
