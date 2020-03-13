<template>
  <ContentBlock>
    <div class="core-value" v-if="coreValue">
      <AppHeading size="3" color="red"> "{{ coreValue.quote }}" </AppHeading>
      <p class="core-value__text is-size--5">
        {{ coreValue.text }}
      </p>
    </div>
  </ContentBlock>
</template>

<script>
import { mapState } from "vuex";
import AppHeading from "@/components/common/AppHeading.vue";
import ContentBlock from "@/components/layout/ContentBlock.vue";
export default {
  name: "CoreValue",
  components: { AppHeading, ContentBlock },
  computed: {
    ...mapState({
      coreValue: state => state.coreValues[state.selectedCoreValue]
    })
  }
};
</script>
