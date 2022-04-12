<template>
  <div class="teacher-wrapper">
    <IndexTeacherItem
      v-for="(item, index) of starTeacherData"
      :key="index"
      :item="item"
    ></IndexTeacherItem>
  </div>
</template>

<script>
export default {
  name: 'TeacherList',

  props: {
    starTeacherData: { type: Array, default: () => [] },
  },
}
</script>

<style lang="less" scoped>
.teacher-wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 10px 0 10px 10px;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
}
</style>
