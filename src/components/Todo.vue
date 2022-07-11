<template>
  <div>
    <div
      class="todoTest"
      v-for="todo in todoArray"
      :key="todo.id"
      :style="todo.done ? 'text-decoration: line-through' : ''"
    >
      <span>{{todo.title}}</span>
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
        { id: 1, title: "My first Article", done: false },
        { id: 2, title: "My second Article", done: false },
        { id: 3, title: "My third Article", done: false },
        { id: 4, title: "My fourth Article", done: false },
        { id: 5, title: "My fifth Article", done: false },
        { id: 6, title: "My sixth Article", done: false },
      ],
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
  },
};
</script>
