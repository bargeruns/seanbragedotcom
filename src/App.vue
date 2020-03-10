<template>
  <div id="app" v-cloak>
    <TheApp />
  </div>
</template>

<script>
import TheApp from "@/components/TheApp.vue";
export default {
  name: "App",
  components: { TheApp }
};
</script>

<style>
[v-cloak] > * {
  display: none !important;
}
</style>
