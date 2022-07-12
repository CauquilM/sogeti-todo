import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import Todo from "@/components/Todo.vue";
import Vue from "vue";
Vue.config.silent = true;

const localVue = createLocalVue();

localVue.use(Vuex);

const store = new Vuex.Store({
  state: {
    errorMsg: "Don't forget the title :)",
  },
});

describe("Todo", () => {
  it("should display error", () => {
    const wrapper = shallowMount(Todo, {
      store,
      localVue,
    });

    expect(wrapper.find(".testErrorMsg").text()).toBe("Don't forget the title :)")

  });
});

describe("Todo", () => {
  let actions;
  let store;

  beforeEach(() => {
    actions = {
      createNewTodo: jest.fn(),
    };
    store = new Vuex.Store({
      actions,
      // state: {
      //   errorMsg: "",
      // },
    });
  });

  it("should accept the new todo", async () => {
    const wrapper = shallowMount(Todo, { store, localVue });
    const title = wrapper.find(".testTitle");
    const btn = wrapper.find(".testError");
    const description = wrapper.find(".testDescription");
    // title.element.value = "title";
    title.trigger("input");
    description.element.value = "description";
    description.trigger("input");
    await btn.trigger("click");
    expect(actions.createNewTodo).toHaveBeenCalled()
  });
});
