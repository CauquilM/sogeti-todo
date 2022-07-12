import { shallowMount } from "@vue/test-utils";
import Todo from "@/components/Todo.vue";
import TodoDetails from "@/components/TodoDetails.vue";
import Vue from "vue";
Vue.config.silent = true;

describe("TodoDetails", () => {
    it("should return a title and a description", async () => {
        const wrapper_todo = shallowMount(Todo);
        const wrapper_details = shallowMount(TodoDetails);
        const btn = wrapper_todo.find(".testToDetails");

        await btn.trigger("click");
        expect(wrapper_details.find(".testDetailsTitle").text()).not.toEqual("")
        expect(wrapper_details.find(".testDetailsDesc").text()).not.toEqual("")
    })
})
