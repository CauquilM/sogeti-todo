import { shallowMount } from "@vue/test-utils";
import Todo from "@/components/Todo.vue";

describe("Todo", () => {
  it("should display the first todo of the list", () => {
    const wrapper = shallowMount(Todo);

    expect(wrapper.find(".todoTest").text()).toEqual("My first Article")
  });
});
