import FaderBox from "@/components/common/FaderBox.vue";
import { shallowMount } from "@vue/test-utils";

describe("FaderBox.vue", () => {
  it("renders an icon component in the appropriate slot", () => {
    const wrapper = shallowMount(FaderBox, {
      stubs: ["font-awesome-icon"],
      slots: {
        icon: "<font-awesome-icon></font-awesome-icon>"
      }
    });
    expect(wrapper).toBeTruthy();
    expect(wrapper.find("font-awesome-icon")).toBeTruthy();
  });
});
