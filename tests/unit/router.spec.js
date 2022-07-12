import { shallowMount } from "@vue/test-utils";
import Todo from "@/components/Todo.vue";

describe("Todo", () => {
  it("should display the first todo of the list", () => {
    const wrapper = shallowMount(Todo, { stubs: ["router-link"] });

    expect(this.$route.params.id).toEqual("/My first Article");
  });
});
