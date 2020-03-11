<template>
  <div
    class="column trigger-box__container"
    :class="{
      'trigger-box__container--hovered': isHovered,
      'trigger-box__container--selected': selected,
      faded: !selected && !isHovered
    }"
  >
    <div
      class="trigger-box"
      v-on:mouseenter="showAsHovered"
      v-on:mouseleave="showAsNotHovered"
      v-on:click="setSelected"
    >
      <div class="trigger-box__icon is-size-1">
        <slot name="icon"></slot>
      </div>
      <div class="trigger-box__title">
        <SBHeading :size="3">
          <slot name="title"></slot>
        </SBHeading>
      </div>
    </div>
  </div>
</template>

<script>
import SBHeading from "@/components/common/SBHeading.vue";
export default {
  name: "TriggerBox",
  components: { SBHeading },
  props: {
    name: String,
    selected: Boolean
  },
  data() {
    return {
      isHovered: false
    };
  },
  computed: {
    showBorderForActive() {
      if (this.selected) return true;

      if (this.isHovered) return true;

      return false;
    }
  },
  methods: {
    showAsHovered() {
      const currentlySelectedElement = document.getElementsByClassName(
        "trigger-box__container--selected"
      );
      if (currentlySelectedElement.length) {
        currentlySelectedElement[0].classList.add(
          "trigger-box__container--no-indicator"
        );
      }
      this.isHovered = true;
    },
    showAsNotHovered() {
      this.isHovered = false;
      const currentlySelectedElement = document.getElementsByClassName(
        "trigger-box__container--selected"
      );
      if (currentlySelectedElement.length) {
        currentlySelectedElement[0].classList.remove(
          "trigger-box__container--no-indicator"
        );
      }
    },
    setSelected() {
      this.$emit("selected", this.name);
      this.$set(this, "isActive", true);
    }
  }
};
</script>

<style lang="scss">
.trigger-box {
  margin: 0;
  width: auto;
  height: 150px;
  border: 2px solid $black;
  padding: 8px;
  border-radius: 11px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  z-index: 1;
}

.trigger-box__container {
  width: auto;
  margin: 0 auto;
  transition: opacity 0.2s ease;

  &.faded {
    opacity: 0.5;
  }

  &:after {
    content: "";
    display: block;
    height: 4px;
    width: 0px;
    margin-top: 4px;
    background: transparent;
    transition: width 0.25s $slide-in, background-color 0.25s ease;
  }

  &--hovered:after,
  &--selected:after {
    width: 100%;
    background-color: $red;
    border-radius-left: 4px;
  }

  &--no-indicator:after {
    width: 0px;
  }
}
</style>
