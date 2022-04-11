<template>
  <div class="cooperation-item">
    <a :href="item.link" target="_blank" class="item-lk">
      <img :src="imgUrl" :alt="item.title" class="logo-img" />
      <p class="tt">{{ item.title }}</p>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    imgBase: { type: String, default: '' },
    item: { type: Object, default: () => ({}) },
  },
  computed: {
    imgUrl() {
      return this.imgBase + this.item.logoUrl
    },
  },
}
</script>

<style lang="less" scoped>
.cooperation-item {
  display: flex;
  flex: 1;
  padding: 0.15rem 0;
  .item-lk {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  .logo-img {
    width: 0.4rem;
    height: 0.4rem;
  }
  .tt {
    font-size: 0.12rem;
    margin-top: 0.1rem;
  }
}
</style>
