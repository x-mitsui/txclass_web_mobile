export default ({ $axios }) => {
  // Request拦截器
  $axios.onRequest((config) => {
    console.log('Making request to ' + config.url)
    return config
  })

  // Error拦截器：出现错误的时候被调用
  $axios.onRequest((error) => {
    console.log('Making request to ' + error)
    // return config
  })

  // Response拦截器：在请求之后被调用
  $axios.onResponse((response) => {
    console.log(333, response)
    return response.data
  })
}
