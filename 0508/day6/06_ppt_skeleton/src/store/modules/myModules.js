const myModule = {
  stae: {
    level: 20,
  },
  mutations: {
    INCREAMENT_Level(state) {
      state.level += 1;
    },
  },
  actions: {
    increamentLevel(context) {
      context.commit("INCREAMENT_Level");
    },
  },
};
export default myModule;
