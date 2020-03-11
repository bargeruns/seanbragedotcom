<template>
  <div class="content-block columns" :class="[bgColorClass]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ContentBlock",
  props: {
    bg: {
      type: String,
      required: false,
      default: "white"
    }
  },
  computed: {
    bgColorClass() {
      return `bg--${this.bg}`;
    }
  }
};
</script>

<style lang="scss">
.content-block {
  padding: 15px 27px;
  margin-top: 18px;
  margin-bottom: 18px;

  & + .content-block {
    margin-bottom: 0px;
  }
}
</style>
