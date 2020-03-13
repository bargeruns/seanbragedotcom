<template>
  <AppList class="core-values-list">
    <AppListItem
      v-for="(value, key) in coreValues"
      :key="key"
      @click.native="setCoreValue(key)"
      :class="{
        active: selectedCoreValue === key
      }"
    >
      <HoverBox>
        <AppHeading :size="4" color="white">
          <font-awesome-icon :icon="value.icon"></font-awesome-icon>
          {{ key }}
        </AppHeading>
      </HoverBox>
    </AppListItem>
  </AppList>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import AppHeading from "@/components/common/AppHeading.vue";
import AppList from "@/components/common/AppList.vue";
import AppListItem from "@/components/common/AppListItem.vue";
import HoverBox from "@/components/common/HoverBox.vue";
export default {
  name: "CoreValuesList",
  components: { AppList, AppListItem, HoverBox, AppHeading },
  computed: {
    ...mapState({
      coreValues: state => state.coreValues,
      selectedCoreValue: state => state.selectedCoreValue
    })
  },
  methods: {
    ...mapMutations(["setSelectedCoreValue"]),
    setCoreValue(value) {
      console.log(value);
      return this.setSelectedCoreValue(value);
    },
    foo() {
      console.log("bar");
    }
  }
};
</script>

<style lang="scss" scoped>
.core-values-list {
  height: 275px;
}
.active {
  border-bottom: 3px solid $red;
  margin-bottom: -3px;
  pointer-events: none;
}
</style>
