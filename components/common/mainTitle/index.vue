<template>
  <div class="main-title">
    <h1 class="tt">{{ title }}</h1>
    <nuxt-link v-show="linkShow" to="/list" class="lk">
      更多
      <i class="iconfont icon-arrow-right"> </i>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'MainTitleCpn',
  props: {
    title: { type: String, default: '' },
    linkShow: { type: Boolean, default: true },
  },
}
</script>

<style lang="less" scoped>
.main-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  height: 44px;
  margin-top: 10px;
  padding: 0 10px;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  .tt {
    color: #000;
  }

  .lk {
    font-size: 12px;
    color: #999;

    .iconfont {
      font-size: 12px;
    }
  }
}
</style>
