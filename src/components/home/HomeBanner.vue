<template>
  <div class="home-banner">
    <ContentBlock bg="black">
      <div class="column is-full home-banner__title">
        <SBHeading :size="2" color="white">What I'm about</SBHeading>
        <SBHeading :size="5" color="red"
          >click, tap, and touch at your leisure</SBHeading
        >
      </div>
    </ContentBlock>
    <ContentBlock bg="black">
      <HomeValues></HomeValues>
    </ContentBlock>
  </div>
</template>

<script>
import ContentBlock from "@/components/common/ContentBlock.vue";
import SBHeading from "@/components/common/SBHeading.vue";
import HomeValues from "@/components/home/HomeValues.vue";
export default {
  name: "HomeBio",
  components: { ContentBlock, SBHeading, HomeValues }
};
</script>

<style lang="scss">
.home-banner {
  animation: fadeIn 1.75s linear 0s;
}
</style>
