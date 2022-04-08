<template>
  <div>
    <CommonMobileHeader :back-icon-show="false" :list-icon-show="true" />
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
  loading: false,
  async asyncData({ $log, $axios, $hello }) {
    const res = await $axios.$post('/admin/login_action', {
      username: 'admin',
      password: 'admin',
    })
    $log.info('res:', res)
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
    return { list: [] }
  },
}
</script>

<style></style>
