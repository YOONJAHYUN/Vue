<template>
  <div id="app">
    <p>counter : {{ number }}</p>
    <p>double counter : {{ doubleNumber }}</p>
    <button @click="increase">increase ++</button>
    <button @click="decrease">decrease --</button>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      number: 0,
    };
  },
  // create가 된 순가 methods가 실행되도록한다.
  // Vue instance가 만들어진 이후라서 접근이 가능하다.
  // 그러나 템플릿이 그러지기전이라 템플릿에 접근할 수 없다.
  created() {
    this.increase();
  },
  mounted() {
    // 템플릿이 그려지고 난 이후임..!
    // 시점의 차이..
    // 사용자가 어떤 요청을 보냈을 때 (DOM에 직접적으로 접근해야하는 경우)
    // DOM에 접근하는 건 위험위험...하지말자...
  },
  updated() {
    // 변동상황이 나타날때마다 작동
  },
  watch() {
    // watch 어떤 값이후로 행위변경 .. count가 30넘었을 때 배경 바뀔때
    // old, new,... 일케 분기적으로....
    // user가 여러개 인경우
  },
  computed: {
    // 종속하는 것이 뭔가 바꼈을 때 연산해서 다시 계산해야 하는 경우
    doubleNumber() {
      return this.number * 2;
    },
  },
  methods: {
    increase() {
      this.number += 1;
    },
    decrease() {
      this.number -= 1;
    },
  },
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
