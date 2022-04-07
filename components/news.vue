<template>
  <div>
    <ol>
      <li v-for="item in newsList" :key="item.id">{{ item.courseName }}</li>
    </ol>
    <hr />
  </div>
</template>

<script>
export default {
  name: 'NewsPage',
  data() {
    return {
      newsList: [],
    }
  },
  // 页面请求可以用asyncData,fetch，components组件内只能用fetch，具体用法看各自内部
  async fetch() {
    const res = await this.$axios('api/get_courses_data')
    this.newsList = res.data.data.courseData
  },
}
</script>
