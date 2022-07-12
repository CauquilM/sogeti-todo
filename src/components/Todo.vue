<template>
  <div class="main">
    <h1 class="white--text">Todo List App</h1>

    <h2 class="white--text">Todo creation</h2>
    <input class="white--text" v-model="title" placeholder="Todo title" />
    <input class="white--text" v-model="description" placeholder="Description (optional)" />
    <button class="white--text" @click="createNewTodo({title, description})">Submit</button>
    <p class="white--text" v-if="error">{{ error }}</p>

    <h2 class="white--text">Todo List</h2>
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
