<template>
  <div class="back-icon">
    <i v-show="isShow" class="iconfont icon-arrow-left" @click="goBack"></i>
  </div>
</template>
<script>
export default {
  props: {
    isShow: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    },
  },
}
</script>
<style lang="less" scoped>
.back-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #666;
  width: 44px;
  height: 44px;
}
</style>
