<template>
  <div>
    <CommonCourseListItem
      v-for="item of courseData"
      :key="item.id"
      :item="item"
    />
  </div>
</template>

<script>
export default {
  name: 'CommonCourseListCpn',
  props: {
    courseData: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="less" scoped></style>
