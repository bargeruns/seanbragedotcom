<template>
  <div id="home">
    <HomeIntro></HomeIntro>
    <HomeBlurb></HomeBlurb>
    <HomeBanner></HomeBanner>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeIntro from "@/components/home/HomeIntro.vue";
import HomeBlurb from "@/components/home/HomeBlurb.vue";
import HomeBanner from "@/components/home/HomeBanner.vue";
export default {
  name: "Home",
  components: { HomeIntro, HomeBanner, HomeBlurb }
};
</script>

<style lang="scss" scoped></style>
