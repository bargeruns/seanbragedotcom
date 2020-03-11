<template>
  <ContentBlock class="home_blurb">
    <div class="column">
      <SBHeading :size="2">
        <font-awesome-icon :icon="['fas', 'compass']"></font-awesome-icon>
      </SBHeading>
      <p>
        From production single-page-apps for a major phone service provider, to
        progressive VueJS enhancements in legacy Jinja templates; I've been
        everywhere, man. After a long career as an IT network consultant, I went
        for broke pursuing full-time web development and never looked back.
        <br /><br />I specialize in writing web applications in VueJS, RESTful
        APIs in Node and Python, and have been known to spin up the occasional
        GraphQL server for fun and profit. Above all, I like solving problems
        and building cool $*!%.
      </p>
    </div>
  </ContentBlock>
</template>

<script>
import SBHeading from "@/components/common/SBHeading.vue";
import ContentBlock from "@/components/common/ContentBlock.vue";
export default {
  name: "HomeBlurb",
  components: { SBHeading, ContentBlock }
};
</script>

<style lang="scss">
.home_blurb {
  border-top: 2px solid $black;
  animation: 1.25s linear 0s fadeIn;
}
</style>
