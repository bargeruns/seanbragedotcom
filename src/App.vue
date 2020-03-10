<template>
  <div id="app">
    <app-header></app-header>
    <div class="container" id="app-view">
      <router-view />
    </div>
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

#app {
  padding-top: 120px;
}

#app-view {
  animation: 0.5s ease-in 0s fadeIn;
}
</style>
