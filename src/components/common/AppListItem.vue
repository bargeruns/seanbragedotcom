<template>
  <li class="app-list__item" :style="{ 'list-style': computedListStyle }">
    <slot></slot>
  </li>
</template>

<script>
export default {
  name: "AppListItem",
  props: {
    listStyle: {
      type: String,
      required: false,
      default: "none"
    }
  },
  computed: {
    computedListStyle() {
      return {
        none: "none",
        square: "square",
        circle: "circle"
      }[this.listStyle];
    }
  }
};
</script>
<style lang="scss" scoped>
.app-list__item {
}
</style>
