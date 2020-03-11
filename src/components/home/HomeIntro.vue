<template>
  <ContentBlock class="home__intro">
    <div class="column">
      <SBHeading size="1">I'm Sean Brage</SBHeading>
      <SBHeading size="5">
        Experienced web developer / JavaScript engineer / husband / dad /
        musician / gigantic dork living on the outskirts of Denver, CO.
      </SBHeading>
    </div>
  </ContentBlock>
</template>

<script>
import ContentBlock from "@/components/common/ContentBlock";
import SBHeading from "@/components/common/SBHeading";

export default {
  name: "HomeIntro",
  components: { ContentBlock, SBHeading }
};
</script>

<style lang="scss" scoped>
.home__intro {
  animation: fadeIn 0.75s linear 0s;
}
</style>
