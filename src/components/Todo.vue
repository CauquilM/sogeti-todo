<template>
  <div class="main">
    <h1>Todo List App</h1>

    <h2>Todo creation</h2>
    <input v-model="title" placeholder="Todo title" />
    <input v-model="description" placeholder="Description (optional)" />
    <button @click="createNewTodo({title, description})">Submit</button>
    <p v-if="error">{{ error }}</p>

    <h2>Todo List</h2>
    <div
      v-for="todo in todoStored"
      :key="todo.id"
      :style="todo.done ? 'text-decoration: line-through' : ''"
    >
      <router-link
        class="todoTest"
        :to="{
          name: 'TodoDetails',
          params: {
            id: todo.id,
            title: todo.title,
            description: todo.description,
          },
        }"
        >{{ todo.title }}</router-link
      >
      <input
        type="checkbox"
        v-model="todo.done"
        @change="modifyTodoState(todo.id)"
      />
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "Todo",
  data() {
    return {
      title: "",
      description: "",
    };
  },
  computed: {
    ...mapState(["todoStored", "error"]),
  },

  methods: {
    ...mapActions(["modifyTodoState", "createNewTodo"]),
  },
};
</script>
<style>
.main {
  text-align: center;
}
</style>
