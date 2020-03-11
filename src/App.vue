<template>
  <div id="app" v-cloak>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  padding-top: 120px;
}
[v-cloak] > * {
  display: none !important;
}
</style>
