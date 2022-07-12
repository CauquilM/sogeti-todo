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
      v-for="todo in todoArray"
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
export default {
  name: "Todo",
  data() {
    return {
      todoArray: [
        {
          id: 1,
          title: "My first Article",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          done: false,
        },
        { id: 2, title: "My second Article", description: "", done: false },
        {
          id: 3,
          title: "My third Article",
          description:
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
          done: false,
        },
        { id: 4, title: "My fourth Article", description: "", done: false },
        { id: 5, title: "My fifth Article", description: "", done: false },
        { id: 6, title: "My sixth Article", description: "", done: false },
      ],
      id: 7,
      title: "",
      description: "",
      error: "",
    };
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
};
</script>
<style>
.main {
  text-align: center;
}
</style>
