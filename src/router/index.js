import Vue from "vue";
import VueRouter from "vue-router";
import Todo from "../components/Todo.vue";
import TodoDetails from "../components/TodoDetails.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Todo",
    component: Todo,
  },
  {
    path: "/todo-details/:id",
    name: "TodoDetails",
    component: TodoDetails,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
