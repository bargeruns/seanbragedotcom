<template>
  <div class="fade-in" :style="animationWithDelay">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "FadeIn",
  props: {
    delay: {
      type: Number,
      required: false,
      default: 0.5
    }
  },
  computed: {
    animationWithDelay() {
      return `animation: ${this.delay}s linear 0s fadeIn`;
    }
  }
};
</script>

<style lang="scss">
.fade-in {
  width: 100%;
}
</style>
