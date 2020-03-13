<template>
  <ContentBlock class="home__intro">
    <ContentColumn>
      <AppHeading :size="1">I'm Sean Brage</AppHeading>
      <AppHeading :size="5">
        Experienced web developer / JavaScript engineer / husband / dad /
        musician / gigantic dork living on the outskirts of Denver, CO.
      </AppHeading>
    </ContentColumn>
  </ContentBlock>
</template>

<script>
import ContentBlock from "@/components/layout/ContentBlock";
import ContentColumn from "@/components/layout/ContentColumn";
import AppHeading from "@/components/common/AppHeading";

export default {
  name: "IntroHeader",
  components: { ContentBlock, ContentColumn, AppHeading }
};
</script>
