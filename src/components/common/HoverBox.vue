<template>
  <div class="hover-box">
    <div class="hover-box__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "HoverBox"
};
</script>

<style scoped lang="scss">
.hover-box {
  width: auto;

  &:after {
    content: "";
    display: block;
    margin-top: 3px;
    height: 3px;
    width: 0px;
    background: transparent;
    transition: width 0.25s $slide-in, background 0.25s ease;
  }

  &:hover:after,
  &--selected:after {
    width: 100%;
    background: $red;
  }
}
</style>
