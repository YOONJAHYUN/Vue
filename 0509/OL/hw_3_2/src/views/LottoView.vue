<template>
  <div>
    <h1>LOTTO</h1>
    <!-- <button @click="onClick">getLottoNum</button> -->
    <!-- <p>{{ lottoNums }}</p> -->
    <LottoItem v-for="(num, index) in lottoNums" :key="index" :numbers="num" />
  </div>
</template>

<script>
import _ from "lodash";
import LottoItem from "@/components/LottoItem.vue";

export default {
  name: "LottoView",
  data() {
    return {
      lottoNums: [],
    };
  },
  created() {
    this.buyLotto();
  },
  methods: {
    buyLotto() {
      const count = this.$route.params.lottoNum;
      for (let i = 0; i < count; ++i) {
        // this.methods.onClick()
        const numbers = _.range(1, 46);
        this.lottoNums.push(_.sampleSize(numbers, 6));
      }
    },
    // onClick() {
    //   // const params = this.$route.params.lottoNum
    //   const numbers = _.range(1, 46)
    //   const lottoNumbers = _.sampleSize(numbers, 6)
    //   this.lottoNums = _.sortBy(lottoNumbers)

    //   this.result.push(this.lottoNums)
    // },
  },
  components: {
    LottoItem,
  },
};
</script>
