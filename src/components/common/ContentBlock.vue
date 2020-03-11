<template>
  <div
    class="content-block columns is-centered is-multiline"
    :class="[bgColorClass]"
  >
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

<style scoped>
.content-block {
  padding: 15px 27px;
  margin-top: 18px;
  margin-bottom: 18px;
}
</style>
