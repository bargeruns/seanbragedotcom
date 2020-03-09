import { shallowMount } from "@vue/test-utils";
import SBHeading from "@/components/common/SBHeading.vue";

describe("SBHeading.vue", () => {
  it("renders the proper text to the page", () => {
    const msg = "Hello, world!";
    const wrapper = shallowMount(SBHeading, {
      slots: {
        default: msg
      }
    });
    expect(wrapper.text()).toBe(msg);
  });
  it("renders an h1 if size 1 passed in", () => {
    const msg = "Hey!";
    const wrapper = shallowMount(SBHeading, {
      propsData: {
        size: 1
      },
      slots: {
        default: msg
      }
    });
    expect(wrapper.is("h1")).toBe(true);
    expect(wrapper.classes("is-size-1")).toBe(true);
    expect(wrapper.text()).toBe(msg);
  });
  it("renders an h2 if size 2 passed in", () => {
    const msg = "Hey!";
    const wrapper = shallowMount(SBHeading, {
      propsData: {
        size: 2
      },
      slots: {
        default: msg
      }
    });
    expect(wrapper.is("h2")).toBe(true);
    expect(wrapper.classes("is-size-2")).toBe(true);
    expect(wrapper.text()).toBe(msg);
  });
  it("renders an h3 if size 3 passed in", () => {
    const msg = "Hey!";
    const wrapper = shallowMount(SBHeading, {
      propsData: {
        size: 3
      },
      slots: {
        default: msg
      }
    });
    expect(wrapper.is("h3")).toBe(true);
    expect(wrapper.classes("is-size-3")).toBe(true);
    expect(wrapper.text()).toBe(msg);
  });
  it("renders an h4 if size 4 passed in", () => {
    const msg = "Hey!";
    const wrapper = shallowMount(SBHeading, {
      propsData: {
        size: 4
      },
      slots: {
        default: msg
      }
    });
    expect(wrapper.is("h4")).toBe(true);
    expect(wrapper.classes("is-size-4")).toBe(true);
    expect(wrapper.text()).toBe(msg);
  });
  it("renders an h5 if size 5 passed in", () => {
    const msg = "Hey!";
    const wrapper = shallowMount(SBHeading, {
      propsData: {
        size: 5
      },
      slots: {
        default: msg
      }
    });
    expect(wrapper.is("h5")).toBe(true);
    expect(wrapper.classes("is-size-5")).toBe(true);
    expect(wrapper.text()).toBe(msg);
  });
  it("renders an h6 if size 6 passed in", () => {
    const msg = "Hey!";
    const wrapper = shallowMount(SBHeading, {
      propsData: {
        size: 6
      },
      slots: {
        default: msg
      }
    });
    expect(wrapper.is("h6")).toBe(true);
    expect(wrapper.classes("is-size-6")).toBe(true);
    expect(wrapper.text()).toBe(msg);
  });
});
