import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todoStored: [
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
  },
  mutations: {
    
  },
  actions: {
  },
})
