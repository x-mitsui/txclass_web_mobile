<template>
  <div class="nav-item">
    <a :href="item.link" target="_blank" class="nav-lk"> {{ item.title }}</a>
  </div>
</template>

<script>
export default {
  props: {
    item: { type: Object, default: () => {} },
  },
}
</script>

<style lang="less" scoped>
.nav-item {
  width: 25%;
  padding-left: 1px;
  box-sizing: border-box;

  text-align: center;
  .nav-lk {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 44px;
    font-size: 14px;
  }
  &:nth-child(1) {
    .nav-lk {
      background-color: #dff0d8;
    }
  }
  &:nth-child(2) {
    .nav-lk {
      background-color: #d9edf7;
    }
  }
  &:nth-child(3) {
    .nav-lk {
      background-color: #fcf8e3;
    }
  }
  &:nth-child(4) {
    .nav-lk {
      background-color: #f2dede;
    }
  }
}
</style>
