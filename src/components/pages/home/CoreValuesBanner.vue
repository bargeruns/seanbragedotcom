<template>
  <ContentBlock bg="black">
    <ContentColumn>
      <AppHeading :size="2" color="white">What I'm about:</AppHeading>
      <AppHeading :size="5" color="red"
        >My core values as a developer</AppHeading
      >
    </ContentColumn>
  </ContentBlock>
</template>

<script>
import ContentBlock from "@/components/layout/ContentBlock.vue";
import ContentColumn from "@/components/layout/ContentColumn.vue";
import AppHeading from "@/components/common/AppHeading.vue";
export default {
  name: "CoreValuesBanner",
  components: { ContentBlock, AppHeading, ContentColumn }
};
</script>
