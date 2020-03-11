<template>
  <header class="app-header columns">
    <SBHeading :size="1" color="white" class="app-header__title"
      >{SB}</SBHeading
    >
  </header>
</template>

<script>
import SBHeading from "@/components/common/SBHeading.vue";
export default {
  name: "AppHeader",
  components: { SBHeading }
};
</script>

<style lang="scss" scoped>
.app-header {
  padding: 15px 27px;
  height: 107px;
  width: 100vw;
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  background-color: $black;
  animation: 0.25s linear 0s 1 slideInFromTop;

  &.title {
    animation: 0.25s linear 0.5s 1 fadeIn;
  }
}
</style>
