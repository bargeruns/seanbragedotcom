<template>
  <ContentBlock class="home-values">
    <TriggerBox
      :selected="selectedValue === 'thoughtfulness'"
      @selected="setSelectedValue"
      name="thoughtfulness"
    >
      <template v-slot:icon>
        <font-awesome-icon :icon="['fas', 'hat-wizard']"></font-awesome-icon>
      </template>
      <template v-slot:title>Thoughtfulness</template>
      <template v-slot:detail>
        Use the right tool for the job. Code to the concern, not the developer's
        personal preference. Do what's right for customer and company. I do my
        best to bring a high level of intentionality and deliberation to the
        table.
      </template>
    </TriggerBox>
    <TriggerBox
      :selected="selectedValue === 'strategy'"
      @selected="setSelectedValue"
      name="strategy"
    >
      <template v-slot:icon>
        <font-awesome-icon :icon="['fas', 'wrench']"></font-awesome-icon>
      </template>
      <template v-slot:title>Strategy</template>
      <template v-slot:detail>
        Weeks of coding can save you hours of planning. Before each task,
        feature, and project I strive to clarify outcomes, account for edge
        cases, and formulate a game plan.
      </template>
    </TriggerBox>
    <TriggerBox
      :selected="selectedValue === 'creativity'"
      @selected="setSelectedValue"
      name="creativity"
    >
      <template v-slot:icon>
        <font-awesome-icon :icon="['fas', 'paint-brush']"></font-awesome-icon>
      </template>
      <template v-slot:title>Creativity</template>
      <template v-slot:detail>
        Let's get weird with it. Sometimes the difference between the right
        solution and "the way we've always done it" is a million miles. Don't
        reinvent the wheel, unless the wheel sucks. In that case, let's make
        ourselves a badass new wheel.
      </template>
    </TriggerBox>
  </ContentBlock>
</template>

<script>
import TriggerBox from "@/components/common/TriggerBox.vue";
import ContentBlock from "@/components/common/ContentBlock.vue";
export default {
  name: "HomeValues",
  components: { TriggerBox, ContentBlock },
  data() {
    return {
      selectedValue: "thoughtfulness"
    };
  },
  methods: {
    setSelectedValue(name) {
      this.selectedValue = name;
    }
  }
};
</script>

<style lang="scss" scoped>
.home-values {
  animation: 2.75s linear 0s fadeIn;
}
</style>
