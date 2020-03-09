<template>
  <div id="app">
    <app-header></app-header>
    <ContentBlock>
      <SBHeading size="1">I'm Sean Brage</SBHeading>
      <p>
        An experienced web developer / JavaScript engineer / dad / husband /
        musician / gigantic dork living on the outskirts of Denver, CO.
      </p>
    </ContentBlock>
    <router-view />
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import ContentBlock from "@/components/common/ContentBlock.vue";
import SBHeading from "@/components/common/SBHeading.vue";
export default {
  name: "App",
  components: { AppHeader, SBHeading, ContentBlock }
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
</style>
