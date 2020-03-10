<template>
  <header class="app-header"></header>
</template>

<script>
export default {
  name: "AppHeader"
};
</script>

<style lang="scss">
.app-header {
  height: 107px;
  width: 100vw;
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  background-color: $black;
  animation: 0.25s linear 0s 1 slideInFromTop;
}
</style>
