<template>
  <nuxt-link to="/list" class="list-icon">
    <i v-show="isShow" class="iconfont icon-list"></i>
  </nuxt-link>
</template>
<script>
export default {
  props: {
    isShow: {
      type: Boolean,
      default: true,
    },
  },
}
</script>
<style lang="less" scoped>
.list-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #666;
  width: 44px;
  height: 44px;
  .iconfont {
    font-size: 25px;
  }
}
</style>
