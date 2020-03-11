<template>
  <ContentBlock class="home-values">
    <TriggerBox
      v-for="value in values"
      :key="value.title"
      :selected="selectedValue === value.name"
    >
      <template v-slot:icon>
        <font-awesome-icon :icon="value.icon"></font-awesome-icon>
      </template>
      <template v-slot:title>
        {{ value.name }}
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
      selectedValue: "thoughtfulness",
      values: [
        {
          icon: ["fas", "hat-wizard"],
          name: "thoughtfulness"
        },
        {
          name: "strategy",
          icon: ["fas", "wrench"]
        },
        {
          name: "creativity",
          icon: ["fas", "paint-brush"]
        }
      ]
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
  animation: 2.25s linear 0s fadeIn;
}
</style>
