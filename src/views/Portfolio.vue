<template>
  <ContentBlock>
    <AppHeading :size="1">
      I made these things.
    </AppHeading>
  </ContentBlock>
</template>

<script>
import ContentBlock from "@/components/layout/ContentBlock.vue";
import AppHeading from "@/components/common/AppHeading.vue";
export default {
  name: "Portfolio",
  components: { ContentBlock, AppHeading }
};
</script>
