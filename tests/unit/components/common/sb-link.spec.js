import { shallowMount, createLocalVue, RouterLinkStub } from "@vue/test-utils";
import SBLink from "@/components/common/SBLink.vue";

describe("SBLink.vue", () => {
  it("renders a router-link component if external is FALSE", () => {
    const url = "/";
    const linkText = "link text";
    const wrapper = shallowMount(SBLink, {
      stubs: {
        RouterLink: RouterLinkStub
      },
      propsData: { url },
      slots: {
        default: linkText
      }
    });
    expect(wrapper.text()).toMatch(linkText);
    expect(wrapper.find(RouterLinkStub).props().to).toBe(url);
  });
  it("renders an a tag if external is TRUE", () => {
    const url = "https://google.com";
    const linkText = "google";
    const wrapper = shallowMount(SBLink, {
      propsData: {
        url,
        external: true
      },
      slots: {
        default: linkText
      },
      stubs: {
        RouterLink: RouterLinkStub
      }
    });
    expect(wrapper.is("a")).toBe(true);
    expect(wrapper.attributes("href")).toMatch(url);
  });
});
