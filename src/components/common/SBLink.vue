<template>
  <div class="sb-link">
    <a class="sb-link__link" :href="url" v-if="external">
      <slot></slot>
    </a>
    <router-link :to="url" class="sb-link__link" v-else>
      <slot></slot>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "SBLink",
  props: {
    url: {
      type: String,
      required: true
    },
    external: {
      type: Boolean,
      required: false,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
.sb-link {
  display: inline-block;
}
.sb-link__link {
  color: $red;

  &:hover {
    color: $red;
  }
}

.sb-link:after {
  content: "";
  display: block;
  height: 2px;
  width: 0px;
  background: transparent;
  transition: width 0.25s ease, background-color 0.25s ease;
}

.sb-link:hover:after {
  width: 100%;
  background: $red;
}
</style>
