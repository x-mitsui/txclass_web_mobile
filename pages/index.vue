<template>
  <div>
    <CommonMobileHeader :back-icon-show="false" :list-icon-show="true" />
    <CommonScrollWrapper>
      <IndexSwipper :slider-data="sliderData" />
      <CommonMainTitle :title="'前端进修班'" :link-show="true" />
      <IndexCourseNav :nav-data="navData" />
      <CommonMainTitle :title="'平台合作方'" :link-show="true" />
      <CommonMainTitle title="官方推荐课程" :link-show="true" />
      <CommonFooter />
    </CommonScrollWrapper>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  async asyncData({ $log, $axios, $hello }) {
    const { sliderData, navData } = await $axios.$get('/get_home_data')
    console.log('sliderData:', typeof sliderData)
    return {
      sliderData,
      navData,
    }
  },

  // layout: 'default',
  // middleware: ['auth'], // 页面中间件
  // 匿名中间件
  // middleware(){
  //   this.$log('layout middleware')
  // }
  // 分别访问：localhost:3000?id=333
  // localhost:3000/:name
  // validate({ params, query, store, redirect, route }) {
  //   this.$log('params:', params)
  //   this.$log('id', query.id)
  //   this.$log('id', params.name)
  //   return /\d+/.test(query.id)
  // },
  // 页面请求可以用asyncData,fetch，components组件内只能用fetch，具体用法看各自内部
  // async asyncData({ params, query, store, route, $axios, $log }) {
  //   const res = await $axios.get('api/get_courses_data')

  //   $log('res:', res.data)
  //   return { list: res.data.data.courseData }
  // },
  data() {
    return { list: [], sliderData: [], navData: [] }
  },
}
</script>

<style></style>
