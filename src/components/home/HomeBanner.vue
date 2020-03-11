<template>
  <ContentBlock bg="black" class="home__banner">
    <div class="column">
      <SBHeading :size="2" color="white">What I'm about</SBHeading>
      <SBHeading :size="5" color="red"
        >click, tap, and touch at your leisure</SBHeading
      >
    </div>
  </ContentBlock>
</template>

<script>
import ContentBlock from "@/components/common/ContentBlock.vue";
import SBHeading from "@/components/common/SBHeading.vue";
export default {
  name: "HomeBio",
  components: { ContentBlock, SBHeading }
};
</script>

<style lang="scss">
.home__banner {
  animation: fadeIn 1.75s linear 0s;
}
</style>
