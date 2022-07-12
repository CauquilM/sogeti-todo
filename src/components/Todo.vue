<template>
  <div class="main">
    <h1>Todo List App</h1>

    <h2>Todo creation</h2>
    <input v-model="title" placeholder="Todo title" />
    <input v-model="description" placeholder="Description (optional)" />
    <button @click="createNewTodo">Submit</button>
    <p v-if="error">{{ error }}</p>

    <h2>Todo List</h2>
    <div
      v-for="todo in todoStored"
      :key="todo.id"
      :style="todo.done ? 'text-decoration: line-through' : ''"
    >
      <!-- <span>{{todo.title}}</span> -->
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
        @change="moveToTheEnd(todo.id)"
      />
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "Todo",
  data() {
    return {
      todoArray: [],
      title: "",
      description: "",
      error: "",
    };
  },
  computed: {
    ...mapState(["todoStored"]),
  },

  methods: {
    moveToTheEnd(id) {
      const index = this.todoArray.findIndex((object) => {
        return object.id === id;
      });
      console.log(`id ${id}, index ${index} array ${this.todoArray}`);
      this.todoArray = this.todoArray.concat(this.todoArray.splice(index, 1));
    },
    createNewTodo() {
      if (!this.title) {
        return (this.error = "Don't forget the title :)");
      } else {
        this.error = "";
        this.todoArray.unshift({
          id: this.id++,
          title: this.title,
          description: this.description,
          done: false,
        });
      }
    },
    
  },
//   created() {
//     this.getDataFromStore();
//   },
};
</script>
<style>
.main {
  text-align: center;
}
</style>
