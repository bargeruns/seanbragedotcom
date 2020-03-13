import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selectedCoreValue: "thoughtfulness",
    coreValues: {
      thoughtfulness: {
        quote: "Use the right tool with the right people for the right job.",
        text: `I believe in solving the right problems the right way. This means collaborating with designers to realize their vision and meet their goals;
                      interfacing with product owners and stakeholders to make sure that what they get is what they really wanted. I believe in solving today's problems today, while staying prepared for tomorrow. I strive to bring a high level of
                      intentionality and deliberation to every feature, project, and task I work on.`,
        icon: ["fas", "hat-wizard"]
      },
      strategy: {
        quote: "Weeks of work can save you hours of planning.",
        text: `I like to clarify outcomes, set clear expectations, and build a game plan. I love making lists. I believe in having a solid plan for testing, QA, demoing, and deployment before the coding starts. I also know that plans are wonderful in the warroom, and useless on the battlefield; let's say I believe in optimistically pragmatic strategizing. And yes, you can use that one in your next TED Talk.`,
        icon: ["fas", "wrench"]
      },
      creativity: {
        quote: "Let's get weird with it.",
        text: `I think you should always try to avoid reinventing the wheel. But, what if the wheel sucks? Then we should build ourselves a badass new wheel. 
                       Sometimes the best solutions really are the simplest ones, and sometimes you gotta get out on a limb and try something new to please your customers
                       and truly meet the needs of the business. I value consistency and proven methods, but best practices come from people pushing to be better. I like
                       using the creative part of my brain to come up with the best solutions, even if it means getting out of my comfort zone and pushing past my personal                        preferences.`,
        icon: ["fas", "paint-brush"]
      }
    }
  },
  mutations: {
    setSelectedCoreValue(state, value) {
      state.selectedCoreValue = value;
    }
  },
  actions: {},
  modules: {}
});
