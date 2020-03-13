<template>
  <div id="the-app" v-cloak>
    <app-header></app-header>
    <div id="app-view">
      <router-view />
    </div>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
export default {
  name: "TheApp",
  components: { AppHeader }
};
</script>
<style lang="scss" scoped></style>
