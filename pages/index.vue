<template>
  <div>
    <CommonMobileHeader :back-icon-show="false" :list-icon-show="true" />
    <common-scroll-wrapper>
      <hr />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
      provident ipsam, dicta minima perspiciatis, magni, ab laudantium sint
      expedita consectetur pariatur quia sit temporibus obcaecati doloribus
      cupiditate error quaerat. Obcaecati! Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Assumenda provident ipsam, dicta minima uia
      sit temporibus obcaecati doloribus perspiciatis, magni, ab laudantium sint
      sit temporibus obcaecati doloribus perspiciatis, magni, ab laudantium sint
      sit temporibus obcaecati doloribus perspiciatis, magni, ab laudantium sint
      sit temporibus obcaecati doloribus perspiciatis, magni, ab laudantium sint
      sit temporibus obcaecati doloribus perspiciatis, magni, ab laudantium sint
      sit temporibus obcaecati doloribus perspiciatis, magni, ab laudantium sint
      sit temporibus obcaecati doloribus perspiciatis, magni, ab laudantium sint
      sit temporibus obcaecati doloribus perspiciatis, magni, ab laudantium sint
      sit temporibus obcaecati doloribus perspiciatis, magni, ab laudantium sint
      sit temporibus obcaecati doloribus perspiciatis, magni, ab laudantium sint
      sit temporibus obcaecati doloribus perspiciatis, magni, ab laudantium sint
      sit temporibus obcaecati doloribus perspiciatis, magni, ab laudantium sint
      sit temporibus obcaecati doloribus perspiciatis, magni, ab laudantium sint
      sit temporibus obcaecati doloribus perspiciatis, magni, ab laudantium sint
      expedita consectetur pariatur quia sit temporibus obcaecati doloribus
      cupiditate error quaerat. Obcaecati! Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Assumenda provident ipsam, dicta minima
      perspiciatis, magni, ab laudantium sint expedita consectetur pariatur quia
      sit temporibus obcaecati doloribus cupiditate error quaerat. Obcaecati!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
      provident ipsam, dicta minima perspiciatis, magni, ab laudantium sint
      expedita consectetur pariatur quia sit temporibus obcaecati doloribus
      cupiditate error quaerat. Obcaecati! Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Assumenda provident ipsam, dicta minima
      perspiciatis, magni, ab laudantium sint expedita consectetur pariatur quia
      sit temporibus obcaecati doloribus cupiditate error quaerat. Obcaecati!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
      provident ipsam, dicta minima perspiciatis, magni, ab laudantium sint eima
      perspiciatis, magni, ab laudantium sint expedita consectetur pariatur quia
      sit temporibus obcaecati doloribus cupiditate error quaerat. Obcaecati!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
      provident ipsam, dicta minima perspiciatis, magni, ab laudantium sint
      expedita consectetur pariatur quia sit temporibus obcaecati doloribus
      cupiditate error quaerat. Obcaecati!
      <hr />
    <common-footer />
    </common-scroll-wrapper>
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
