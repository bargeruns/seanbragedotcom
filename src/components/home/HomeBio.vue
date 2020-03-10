<template>
  <div class="home__bio">
    <ContentBlock bg="black" class="home__banner">
      <div class="column">
        <SBHeading size="2">What I'm about'</SBHeading>
      </div>
    </ContentBlock>
  </div>
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
.home__bio {
  animation: fadeIn 1.75s linear 0s;
}
</style>
