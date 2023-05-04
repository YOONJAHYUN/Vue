<template>
  <div>
    <TodoListItem
      v-for="(todo, index) in todos"
      :key="index"
      :todoitem="todo"
    />
  </div>
</template>

<script>
import TodoListItem from "./TodoListItem.vue";
export default {
  name: "TodoList",
  components: {
    TodoListItem,
  },
  computed: {
    todos() {
      // console.log("1234");
      // console.log(this.$store.state.todos);
      return this.$store.state.todos;
    },
  },
};
</script>

<style></style>
