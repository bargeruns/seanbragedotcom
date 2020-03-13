<template>
  <ContentBlock class="bio_text">
    <ContentColumn>
      <AppHeading :size="2">
        <font-awesome-icon :icon="['fas', 'compass']"></font-awesome-icon>
      </AppHeading>
      <p class="is-size-4 bio_text__paragraph">
        From production single-page-apps for a major phone service provider, to
        progressive VueJS enhancements in legacy Jinja templates; I've been
        everywhere, man. After a long career as an IT network consultant, I went
        for broke pursuing full-time web development and never looked back.
        <br /><br />I specialize in writing web applications in VueJS, RESTful
        APIs in Node and Python, and have been known to spin up the occasional
        GraphQL server for fun and profit. Above all, I like solving problems
        and building cool $*!%.
      </p>
    </ContentColumn>
  </ContentBlock>
</template>

<script>
import AppHeading from "@/components/common/AppHeading.vue";
import ContentBlock from "@/components/layout/ContentBlock.vue";
import ContentColumn from "@/components/layout/ContentColumn.vue";
export default {
  name: "BioText",
  components: { AppHeading, ContentBlock, ContentColumn }
};
</script>

<style lang="scss">
.bio_text {
  border-top: 2px solid $black;
}
</style>
