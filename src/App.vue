<template>
  <div id="app">
    <AppHeader></AppHeader>
    <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";

export default {
  name: "App",
  components: { AppHeader }
};
</script>

<style lang="scss">
@import "./scss/main.scss";
#app {
  padding-top: 107px;
  height: 100%;
}
[v-cloak] > * {
  display: none !important;
}

.app-column {
  width: 100px;
}
</style>
