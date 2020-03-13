<template>
  <header class="app-header">
    <FadeIn>
      <AppHeading :size="1" color="white" class="app-header__title"
        >{SB}</AppHeading
      >
    </FadeIn>
  </header>
</template>

<script>
import AppHeading from "@/components/common/AppHeading.vue";
import FadeIn from "@/components/common/FadeIn.vue";
export default {
  name: "AppHeader",
  components: { AppHeading, FadeIn }
};
</script>

<style lang="scss" scoped>
.app-header {
  margin: 0 auto;
  padding: 15px 27px;
  height: 107px;
  width: 100%;
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  background-color: $black;
  animation: 0.25s linear 0s 1 slideInFromTop;

  &__title {
    animation: 1s linear 0s 1 fadeIn;
  }
}
</style>
