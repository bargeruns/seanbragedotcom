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
<style lang="scss" scoped>
#app {
  padding-top: 120px;
}
</style>
