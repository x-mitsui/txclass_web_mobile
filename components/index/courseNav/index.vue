<template>
  <div class="nav-wrapper">
    <IndexCourseNavItem
      v-for="(item, index) of navData"
      :key="index"
      :item="item"
    ></IndexCourseNavItem>
  </div>
</template>

<script>
export default {
  name: 'CourseNav',
  props: {
    navData: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="less" scoped>
.nav-wrapper {
  display: flex;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  padding: 15px 1px 15px 0;
}
</style>
