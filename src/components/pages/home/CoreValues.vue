<template>
  <ContentBlock bg="black" wide="quarter">
    <CoreValuesList />
  </ContentBlock>
</template>

<script>
import ContentBlock from "@/components/layout/ContentBlock";
import CoreValuesList from "@/components/pages/home/CoreValuesList.vue";
export default {
  name: "CoreValues",
  components: { ContentBlock, CoreValuesList }
};
</script>
