<template>
  <ContentBlock class="home-values">
    <div class="column">
      <FaderBox>
        <template v-slot:icon>
          <font-awesome-icon :icon="['fas', 'hat-wizard']"></font-awesome-icon>
        </template>
        <template v-slot:title>Thoughtful</template>
        <template v-slot:detail>
          Use the right tool for the job. Code to the concern, not the
          developer's personal preference. Do what's right for customer and
          company. I do my best to bring a high level of intentionality and
          deliberation to the table.
        </template>
      </FaderBox>
    </div>
    <div class="column">
      <FaderBox>
        <template v-slot:icon>
          <font-awesome-icon :icon="['fas', 'wrench']"></font-awesome-icon>
        </template>
        <template v-slot:title>Strategic</template>
        <template v-slot:detail>
          Weeks of coding can save you hours of planning. Before each task,
          feature, and project I strive to clarify outcomes, account for edge
          cases, and formulate a game plan.
        </template>
      </FaderBox>
    </div>
    <div class="column">
      <FaderBox>
        <template v-slot:icon>
          <font-awesome-icon :icon="['fas', 'paint-brush']"></font-awesome-icon>
        </template>
        <template v-slot:title>Creative</template>
        <template v-slot:detail>
          Let's get weird with it. Sometimes the difference between the right
          solution and "the way we've always done it" is a million miles. Don't
          reinvent the wheel, unless the wheel sucks. In that case, let's make
          ourselves a badass new wheel.
        </template>
      </FaderBox>
    </div>
  </ContentBlock>
</template>

<script>
import FaderBox from "@/components/common/FaderBox.vue";
import ContentBlock from "@/components/common/ContentBlock.vue";
export default {
  name: "HomeValues",
  components: { FaderBox, ContentBlock }
};
</script>

<style lang="scss">
.home-values {
  border-bottom: 2px solid $black;
  animation: 2.75s linear 0s fadeIn;
}
</style>
