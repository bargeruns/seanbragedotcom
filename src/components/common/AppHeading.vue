<template>
  <component
    :is="heading"
    class="app-heading"
    :class="[sizeClass, colorClass]"
    :style="{ color: color }"
  >
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: "AppHeading",
  props: {
    size: {
      type: Number,
      required: false,
      default: 1
    },
    color: {
      type: String,
      required: false,
      default: "$black"
    }
  },
  computed: {
    sizeClass() {
      return `is-size--${this.size}`;
    },
    colorClass() {
      return `is-color--${this.color}`;
    },
    heading() {
      return {
        1: "h1",
        2: "h2",
        3: "h3",
        4: "h4",
        5: "h5",
        6: "h6"
      }[this.size];
    }
  }
};
</script>

<style lang="scss" scoped>
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0px;
  display: block;
}
h1,
h3,
h5 {
  font-weight: $font-weight-semibold;
}

h2,
h4,
h6 {
  font-weight: $font-weight-bold;
}

.app-heading {
  font-family: $family-monospace;
  text-transform: uppercase;
}
</style>
