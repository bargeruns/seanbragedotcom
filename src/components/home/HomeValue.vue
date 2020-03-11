<template>
  <div class="home_value__container">
    <div class="home_value__contents" v-show="selected.quote">
      <SBHeading :size="3" color="red" class="home_value__quote">
        "{{ value.quote }}"
      </SBHeading>
      <p class="text--white is-size-4">
        {{ value.text }}
      </p>
    </div>
  </div>
</template>

<script>
import common from "@/components/common";
const { SBHeading } = common;
export default {
  name: "HomeValue",
  components: { SBHeading },
  props: {
    selected: String
  },
  data() {
    return {
      values: {
        thoughtfulness: {
          quote:
            "Solve the right problem with the right tools and the right people.",
          text: `I work hard to make sure the work I do is high-value, and inline with the concerns of the customer, product owner, or designer making the request. I love getting to work directly with a designer to come up with the best possible presentation. Or taking a step back to engage with stakeholders to close the gap between what they say they asked for, and what they're really hoping to get. I bring a high level of intentionality and deliberation to the table.`
        }
      }
    };
  },
  computed: {
    value() {
      return this.values[this.selected];
    }
  }
};
</script>

<style>
.home_value__container {
  padding-bottom: 64px;
  width: 100%;
}
</style>
