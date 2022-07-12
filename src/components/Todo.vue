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
        <v-alert class="testErrorMsg" v-if="errorMsg" type="error">{{ errorMsg }}</v-alert>
      </v-col>
      <v-spacer />
    </v-row>
    <v-btn class="testError" @click="createNewTodo({ title, description })"> Submit </v-btn>

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
    ...mapState(["todoStored", "errorMsg"]),
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
