<template>
  <div
    class="content-block columns is-centered is-multiline"
    :class="bgColorClass"
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
  /* width: 100%; */
  padding: 27px;
  /* display: flex; */
  /* flex-direction: column; */
  /* justify-content: center; */
  /* align-items: center; */
}
</style>
