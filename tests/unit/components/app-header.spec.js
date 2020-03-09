import { shallowMount } from "@vue/test-utils";
import AppHeader from "@/components/AppHeader.vue";

describe("AppHeader.vue", () => {
  it("renders app header to the page", () => {
    const wrapper = shallowMount(AppHeader);
    expect(wrapper.is(AppHeader)).toBe(true);
  });
});
