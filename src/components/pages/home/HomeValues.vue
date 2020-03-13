<template>
  <div class="home-values column is-full">
    <div class="columns">
      <div class="column is-half">
        <TriggerBox
          v-for="value in values"
          :key="value.name"
          :selected="selectedValue === value.name"
          :name="value.name"
          @selected="setSelectedValue"
        >
          <template v-slot:icon>
            <font-awesome-icon :icon="value.icon"></font-awesome-icon>
          </template>
          <template v-slot:title>
            {{ value.name }}
          </template>
        </TriggerBox>
      </div>
      <HomeValue :selected="selectedValue" class="column is-half" />
    </div>
  </div>
</template>

<script>
import HomeValue from "@/components/home/HomeValue.vue";
import common from "@/components/common/";
const { TriggerBox } = common;
export default {
  name: "HomeValues",
  components: { TriggerBox, HomeValue },
  data() {
    return {
      selectedValue: "",
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
      document
        .getElementById("home-value-display")
        .scrollIntoView({ behavior: "smooth" });
    }
  }
};
</script>

<style lang="scss">
.home-values {
  animation: 2.25s linear 0s fadeIn;
  padding-left: 0px !important;
}
</style>
