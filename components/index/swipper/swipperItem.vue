<template>
  <a :href="data.href" target="_blank">
    <img :src="IMG_BASE + data.imgKey" :alt="data.title" />
  </a>
</template>

<script>
import { URL } from '@/config/config'

export default {
  name: 'SwiperItem',
  props: {
    data: { type: Object, default: () => ({}) },
  },
  data() {
    return {
      IMG_BASE: URL.IMG_BASE,
    }
  },
}
</script>

<style lang="less" scoped>
img {
  // relative to the containing block's width(div not a)
  width: 100%;
}
</style>
