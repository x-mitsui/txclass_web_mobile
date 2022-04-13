<template>
  <li
    :class="['tab-item', { current: index === $store.state.id }]"
    @click="onTabClick"
  >
    {{ item.title }}
  </li>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
    index: {
      default: 0,
      type: Number,
    },
    scrollPosition: {
      default: (id) => {},
      type: Function,
    },
  },
  methods: {
    onTabClick() {
      this.$emit('onTabClick')
      this.scrollPosition(this.$el)
    },
  },
}
</script>

<style lang="less" scoped>
.tab-item {
  float: left;
  width: 120px;
  height: 100%;
  font-size: 14px;
  text-align: center;
  line-height: 35px;
  box-sizing: border-box;

  &.current {
    color: #23b8ff;
    border-bottom: 2px solid #23b8ff;
  }
}
</style>
