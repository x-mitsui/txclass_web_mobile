<template>
  <div class="list-tab">
    <div class="tab-wrapper">
      <ul
        ref="tabList"
        class="tab-list"
        :style="{ width: tabData.length * tabWidth + 'px' }"
      >
        <ListTabItem
          v-for="(item, index) of tabData"
          :key="item.id"
          :item="item"
          :index="index"
          :scroll-position="scrollPosition"
          @onTabClick="onTabClick(item.id)"
        ></ListTabItem>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListTab',
  props: {
    tabData: { type: Array, default: () => [] },
  },
  data() {
    return {
      tabWidth: 120,
      tabIndex: 0,
    }
  },

  methods: {
    onTabClick(id) {
      this.$store.commit('selectTab', id)
      this.tabIndex = id
    },
    scrollPosition(el) {
      const offsetLeft = el.offsetLeft
      // parentNode.scrollTo
      this.$refs.tabList.parentNode.scrollTo(offsetLeft, 0)
    },
  },
}
</script>

<style lang="less" scoped>
.list-tab {
  height: 35px;
  background-color: #fff;
  border-bottom: 1px solid #111;
  overflow: hidden;

  .tab-wrapper {
    height: 43.1px;
    overflow-x: auto;
    overflow-y: hidden;

    .tab-list {
      height: 35px;
    }
  }
}
</style>
