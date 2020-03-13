<template>
  <div id="home">
    <PageView>
      <IntroHeader class="appear appear--first"></IntroHeader>
      <BioText class="appear appear--second"></BioText>
      <CoreValuesBanner class="appear appear--third"></CoreValuesBanner>
      <CoreValues class="appear appear--fourth"></CoreValues>
      <CoreValue class="appear appear--fifth"></CoreValue>
    </PageView>
  </div>
</template>

<script>
// @ is an alias to /src
import IntroHeader from "@/components/pages/home/IntroHeader.vue";
import BioText from "@/components/pages/home/BioText.vue";
import CoreValuesBanner from "@/components/pages/home/CoreValuesBanner.vue";
import CoreValues from "@/components/pages/home/CoreValues.vue";
import CoreValue from "@/components/pages/home/CoreValue.vue";
import PageView from "@/components/layout/PageView.vue";
export default {
  name: "Home",
  components: {
    IntroHeader,
    PageView,
    BioText,
    CoreValuesBanner,
    CoreValues,
    CoreValue
  }
};
</script>

<style lang="scss">
.appear {
  &--first {
    @include fade-in-with-duration(1.5s);
    grid-column: span 4;
  }

  &--second {
    @include fade-in-with-duration(2s);
    grid-column: span 4;
  }

  &--third {
    @include fade-in-with-duration(2.5s);
    grid-column: span 4;
  }

  &--fourth {
    @include fade-in-with-duration(3s);
    grid-column: span 1;

    @media screen and (max-width: $breakpoint-mobile) {
      grid-column: span 4;
    }
  }

  &--fifth {
    @include fade-in-with-duration(3.5s);
    grid-column: span 3;

    @media screen and (max-width: $breakpoint-mobile) {
      grid-column: span 4;
    }
  }
}
</style>
