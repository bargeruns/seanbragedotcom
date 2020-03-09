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
  top: 0;
  left: 0;
  background-color: $black;
  animation: 0.5s ease-out 0s 1 slideInFromTop;
}
</style>
