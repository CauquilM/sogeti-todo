<template>
  <div>
    <div class="todoTest" v-for="todo in todoArray" :key="todo.id">
      {{ todo.title }}
      <input type="checkbox" v-model="todo.done" />
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
      ],
    };
  },
};
</script>
