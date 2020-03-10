<template>
  <div id="home">
    <HomeIntro></HomeIntro>
    <HomeBio></HomeBio>
    <HomeValues></HomeValues>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeIntro from "@/components/home/HomeIntro.vue";
import HomeValues from "@/components/home/HomeValues.vue";
import HomeBio from "@/components/home/HomeBio.vue";
export default {
  name: "Home",
  components: { HomeIntro, HomeValues, HomeBio }
};
</script>

<style lang="scss" scoped>
.home__banner {
  animation: 1.75s linear 0s fadeIn;
}
</style>
