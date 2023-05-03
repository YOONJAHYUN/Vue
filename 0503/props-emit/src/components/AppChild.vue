<template>
  <div>
    <h1>App Child</h1>
    <input type="text" v-model="childData" @input="onChildInputData" />
    <p>AppData : {{ appData }}</p>
    <p>parentData : {{ parentData }}</p>
    <p>childData : {{ childData }}</p>
  </div>
</template>

<script>
export default {
  name: "AppChild",
  data() {
    return {
      childData: "",
    };
  },
  props: {
    parentData: String,
    appData: String,
  },
  methods: {
    onChildInputData() {
      // 발생시킬 이벤트 명(문자열), 전달할 데이터
      this.$emit("child-input-change", this.childData);
    },
  },
};
</script>

<style></style>
