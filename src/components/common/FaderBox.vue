<template>
  <div class="fader-box">
    <div class="fader-box__icon is-size-1">
      <slot name="icon"></slot>
    </div>
    <div class="fader-box__title">
      <SBHeading :size="2">
        <slot name="title"></slot>
      </SBHeading>
    </div>
    <div class="fader-box__detail">
      <p class="is-size-5">
        <slot name="detail"></slot>
      </p>
    </div>
  </div>
</template>

<script>
import SBHeading from "@/components/common/SBHeading.vue";
export default {
  name: "FaderBox",
  components: { SBHeading }
};
</script>

<style lang="scss" scoped>
.fader-box {
  margin: 0 auto;
  width: 300px;
  height: 300px;
  border: 2px solid $black;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;

  &:hover &__title,
  &:hover &__icon {
    transform: translateY(-150%);
    opacity: 0%;
    visibility: hidden;
  }

  &:hover &__detail {
    transform: translateY(0%);
    opacity: 100%;
  }

  &__detail {
    transform: translateY(150%);
    opacity: 0%;
    transition: all 0.2s ease-in;
    padding: 12px;
    position: absolute;
    pointer-events: none;
    z-index: 3;
  }

  &__title,
  &__icon {
    color: $black;
    transition: all 0.25s ease-out;
    z-index: 2;
  }

  &__icon {
    color: $red;
  }
}
</style>
