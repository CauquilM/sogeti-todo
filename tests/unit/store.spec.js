import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import Todo from "@/components/Todo.vue";

const localVue = createLocalVue();

localVue.use(Vuex);

const store = new Vuex.Store({
  state: {
    errorMsg: "alice",
  },
});

describe("Todo", () => {
  it("should display error", () => {
    const wrapper = shallowMount(Todo, {
      store,
      localVue,
    });

    expect(wrapper.find(".testErrorMsg").text()).toBe("alice")

  });
});
