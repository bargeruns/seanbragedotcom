<template>
  <ul class="app-list">
    <slot></slot>
  </ul>
</template>

<style lang="scss" scoped>
.app-list {
  padding: 0px;
  margin-top: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
}
</style>
