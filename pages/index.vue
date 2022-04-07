<template>
  <div>
    <h1>首页</h1>
    <news />
    <nuxt-link :to="{ query: { id: 1 }, path: '/home' }">Home</nuxt-link>
    <ul>
      <li v-for="item in list" :key="item.id">
        {{ item.courseName }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',

  // layout: 'default',
  // middleware: ['auth'], // 页面中间件
  // 匿名中间件
  // middleware(){
  //   console.log('layout middleware')
  // }
  // 分别访问：localhost:3000?id=333
  // localhost:3000/:name
  // validate({ params, query, store, redirect, route }) {
  //   console.log('params:', params)
  //   console.log('id', query.id)
  //   console.log('id', params.name)
  //   return /\d+/.test(query.id)
  // },
  // 页面请求可以用asyncData,fetch，components组件内只能用fetch，具体用法看各自内部
  async asyncData({ params, query, store, route, $axios }) {
    const res = await $axios.get('api/get_courses_data')

    console.log('res:', res.data)
    return { list: res.data.data.courseData }
  },
  data() {
    return { list: [] }
  },
  async fetch() {
    const res = await this.$axios({
      url: '/api/admin/login_action',
      method: 'post',
      data: {
        username: 'admin',
        password: 'admin',
      },
    })

    console.log('this.$axios:', res.data)
  },
}
</script>

<style>
div {
  font-size: 20px;
}
</style>
