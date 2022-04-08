<template>
  <header class="mobile-header">
    <CommonMobileHeaderBackIcon :is-show="backIconShow" />
    <CommonMobileHeaderLogo />
    <CommonMobileHeaderListIcon :is-show="listIconShow" />
  </header>
</template>

<script>
export default {
  name: 'MobileHeader',

  props: {
    backIconShow: {
      type: Boolean,
      default() {
        return false
      },
    },
    listIconShow: {
      type: Boolean,
      default() {
        return true
      },
    },
  },
}
</script>
<style lang="less" scoped>
.mobile-header {
  display: flex;
  justify-content: space-between;

  height: 44px;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
}
</style>
