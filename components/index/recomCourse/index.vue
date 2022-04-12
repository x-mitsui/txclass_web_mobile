<template>
  <div class="recom-course-wrapper">
    <IndexRecomCourseItem
      v-for="item of [
        ...recomCourseData,
        ...[...recomCourseData].map((it) => {
          it.id = 2
          return it
        }),
      ]"
      :key="item.id"
      :img-base="IMG_BASE"
      :item="item"
    />
  </div>
</template>

<script>
import { URL } from '@/config/config'

export default {
  name: 'RecomCourse',
  props: {
    recomCourseData: { type: Array, default: () => [] },
  },
  data() {
    return {
      IMG_BASE: URL.IMG_BASE,
    }
  },
}
</script>

<style lang="less" scoped>
.recom-course-wrapper {
  display: flex;
  flex-direction: row;
  padding: 15px 10px 15px 0;
  background-color: #fff;
  border-bottom: 1px solid #dddddd;
}
</style>
