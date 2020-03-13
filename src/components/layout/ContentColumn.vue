<template>
  <div class="content-column">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ContentColumn"
};
</script>

<style lang="scss" scoped>
.content-column {
  padding: 8px 0px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
</style>
