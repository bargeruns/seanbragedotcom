<template>
  <component
    :is="heading"
    :class="[sizeClass, colorClass]"
    :style="{ color: color }"
  >
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: "SBHeading",
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
      return `is-size-${this.size}`;
    },
    colorClass() {
      return `text--${this.color}`;
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
