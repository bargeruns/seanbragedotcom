<template>
  <div id="app">
    <app-header></app-header>
    <router-view />
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
export default {
  name: "App",
  components: { AppHeader }
};
</script>
<style lang="scss">
@import "./scss/main.scss";
html,
body {
  padding: 0px;
}
</style>
