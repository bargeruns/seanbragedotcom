<template>
  <div class="page-view">
    <slot></slot>
  </div>
</template>

<style>
.page-view {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, auto);
  /* display: flex; */
  /* flex-direction: row; */
  /* flex-wrap: wrap; */
  /* justify-content: flex-start; */
}
</style>
