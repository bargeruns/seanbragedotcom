<template>
  <div class="content-block" :class="[backgroundColorClass, flexClass]">
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
    },
    grow: {
      type: Boolean,
      required: false,
      default: true
    },
    wide: {
      type: String,
      required: false,
      default: "full"
    }
  },
  computed: {
    backgroundColorClass() {
      return `bg--${this.bg}`;
    },
    flexClass() {
      return {
        full: "content-block--full",
        half: "content-block--half",
        third: "content-block--third",
        quarter: "content-block--quarter"
      }[this.wide];
    },
    flexBasis() {
      return {
        full: "100%",
        half: "50%",
        third: "33%",
        quarter: "25%"
      }[this.wide];
    }
  }
};
</script>

<style lang="scss" scoped>
.content-block {
  width: 100%;
  height: auto;
  padding: 15px 27px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;

  &--full {
    flex-basis: 100%;
  }

  &--half {
    flex-basis: 50%;

    @media (max-width: $breakpoint-mobile) {
      flex-basis: 100%;
    }
  }

  &--third {
    flex-basis: 33%;
    @media (max-width: $breakpoint-mobile) {
      flex-basis: 100%;
    }
  }

  &--quarter {
    flex-basis: 25%;
    @media (max-width: $breakpoint-mobile) {
      flex-basis: 50%;
    }
  }
}
</style>
