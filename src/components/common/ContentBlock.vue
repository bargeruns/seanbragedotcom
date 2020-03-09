<template>
  <div class="content-block">
    <slot></slot>
  </div>
</template>

<style>
.content-block {
  width: 100%;
  padding: 27px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: 1.25s ease-in 0s 1 fadeIn;
}
</style>
