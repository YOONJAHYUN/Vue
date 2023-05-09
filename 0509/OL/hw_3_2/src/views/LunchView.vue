<template>
  <div class="home">
    <h1>점심메뉴</h1>
    <button @click="onClick">Pick Lunch</button>
    <p>{{ menu }}</p>
    <input v-model="inputData" type="text" />
    <button @click="goLottoOnClick">go Lotto</button>
  </div>
</template>

<script>
import _ from "lodash";

export default {
  name: "LunchView",
  data() {
    return {
      menu: null,
      lunchMenu: ["비냉", "소고기뭇국", "너구리"],
      inputData: null,
    };
  },
  methods: {
    onClick() {
      this.menu = _.sample(this.lunchMenu);
    },
    goLottoOnClick() {
      if (this.inputData === null) {
        alert("구매할 로또 숫자를 입력해주세요.");
      } else {
        this.$router.push({
          name: "lotto",
          params: { lottoNum: this.inputData },
        });
      }
    },
  },
  components: {},
};
</script>
