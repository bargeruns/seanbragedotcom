<template>
  <div id="home" class="container">
    <HomeIntro></HomeIntro>
    <ContentBlock bg="black" class="home__banner">
      <div class="column">
        <SBHeading size="2">Me as a developer</SBHeading>
      </div>
    </ContentBlock>
    <HomeValues></HomeValues>
  </div>
</template>

<script>
// @ is an alias to /src
import ContentBlock from "@/components/common/ContentBlock.vue";
import SBHeading from "@/components/common/SBHeading.vue";
import HomeIntro from "@/components/home/HomeIntro.vue";
import HomeValues from "@/components/home/HomeValues.vue";
export default {
  name: "Home",
  components: { ContentBlock, SBHeading, HomeIntro, HomeValues }
};
</script>

<style lang="scss">
.home__banner {
  animation: 1.75s linear 0s fadeIn;
}
</style>
