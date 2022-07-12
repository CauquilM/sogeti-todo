<template>
  <v-container class="main">
    <h1 class="white--text">Todo List App</h1>

    <h2 class="white--text pb-3">Todo creation</h2>

    <v-text-field solo class="white--text" v-model="title" label="Todo title" />
    <v-textarea
      solo
      class="white--text"
      v-model="description"
      label="Description (optional)"
    />
    <v-row class="pb-3">
      <v-spacer />
      <v-col md="6">
        <v-alert v-if="error" type="error">{{ error }}</v-alert>
      </v-col>
      <v-spacer />
    </v-row>
    <v-btn @click="createNewTodo({ title, description })"> Submit </v-btn>

    <!-- <h2 class="white--text">Todo List</h2>
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
    </div> -->
    <v-card class="mx-auto mt-8" max-width="300" shaped>
      <v-list dense>
        <v-subheader>Todo List</v-subheader>
        <v-list-item-group color="primary">
          <v-list-item
            class="pa-2"
            v-for="todo in todoStored"
            :key="todo.id"
            router
            :to="{
              name: 'TodoDetails',
              params: {
                id: todo.id,
                title: todo.title,
                description: todo.description,
              },
            }"
          >
            <v-list-item-content>
              <v-list-item-title v-text="todo.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
  </v-container>
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
