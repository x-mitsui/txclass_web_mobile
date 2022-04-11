<template>
  <div class="cooperation-wrapper">
    <IndexCooperationItem
      v-for="item of linkData"
      :key="item.id"
      :item="item"
      :img-base="IMG_BASE"
    ></IndexCooperationItem>
  </div>
</template>

<script>
import { URL } from '@/config/config'
export default {
  name: 'CooperationWrapper',
  props: {
    linkData: { type: Array, default: () => [] },
  },
  data() {
    return {
      IMG_BASE: URL.IMG_BASE,
    }
  },
}
</script>

<style lang="less" scoped>
.cooperation-wrapper {
  display: flex;
  flex-direction: row;
  background-color: #fff;
  border-bottom: 0.01rem solid #ddd;
}
</style>
