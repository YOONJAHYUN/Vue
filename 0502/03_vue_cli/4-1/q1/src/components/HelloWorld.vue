<template>
  <div class="hello">
    <!-- <h1>{{ msg }}</h1> -->
    <div style="margin: 120px">
      <button
        id="btn"
        @click="chooseTime"
        v-for="time in times"
        v-bind:key="time"
        :value="time"
        class=""
        style="margin: 15px"
      >
        {{ time }}
      </button>
    </div>
    <hr />
    <h3>
      <span class="bold">선택 시간 :</span>
      <span v-for="select in timeSelect" :key="select"> {{ select }}</span>
    </h3>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      times: [
        "09:00",
        "09:30",
        "10:00",
        "10:30",
        "11:00",
        "11:30",
        "12:00",
        "12:30",
        "13:00",
        "13:30",
        "14:00",
        "14:30",
        "15:00",
        "15:30",
        "16:00",
        "16:30",
        "17:00",
        "17:30",
        "18:00",
        "18:30",
        "19:00",
        "19:30",
        "20:00",
        "20:30",
        "21:00",
        "21:30",
        "22:00",
        "22:30",
        "23:00",
        "23:30",
      ],
      timeSelect: [],
    };
  },
  methods: {
    chooseTime(event) {
      const my_time = event.target.value;
      // 이미 list안에 있다면?
      if (this.timeSelect.includes(my_time)) {
        console.log("여있다!!");
        this.timeSelect.splice(this.timeSelect.indexOf(my_time), 1);

        // console.log(this.timeSelect.indexof(my_time));
        // this.timeSelect.pop(my_time);
      }
      // 새로 담기
      else {
        // 이미 다섯개?
        if (this.timeSelect.length === 5) {
          alert("5타임까지만 신청할 수 있습니다.");
          // 밑으로 안넘어가게 리턴
          return;
        } else {
          // 더 담기
          this.timeSelect.push(my_time);
        }
      }
      this.timeSelect.sort();
      event.target.classList.toggle("bold");
      // console.log(event.target.value);
      // console.log(this.timeSelect);
      // console.log(event.target.style);
    },
  },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
button {
  color: #424242;
  background-color: transparent;
  border: none;
  margin-top: 15px;
  margin-left: 15px;
  font-size: 20px;
}
.bold {
  font-weight: bold;
  color: #42b983;
}
</style>
