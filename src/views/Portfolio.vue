<template>
  <ContentBlock>
    <SBHeading :size="1">
      I made these things.
    </SBHeading>
  </ContentBlock>
</template>

<script>
import ContentBlock from "@/components/common/ContentBlock.vue";
import SBHeading from "@/components/common/SBHeading.vue";
export default {
  name: "Portfolio",
  components: { ContentBlock, SBHeading }
};
</script>
