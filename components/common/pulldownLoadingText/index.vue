<template>
  <div class="pull-down-loading" :style="{ top: topPosition + 'rem' }">
    {{ loadingText }}
  </div>
</template>

<script>
export default {
  name: 'PullingDownLoadingText',
  props: {
    loadingText: {
      type: String,
      default: '',
    },
    topPosition: {
      type: Number,
      default: 44,
    },
  },
}
</script>

<style lang="less" scoped>
.pull-down-loading {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 44px;
  left: 0;
  z-index: 0;
  width: 100%;
  height: 50px;
  color: #999;
  font-size: 14px;
}
</style>
