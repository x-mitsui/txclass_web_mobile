export default ({ $axios, $log }, inject) => {
  // Request拦截器
  $axios.onRequest((config) => {
    $log.info('请求拦截: ', config.url)
    $log.info('请求拦截: ', config.method)
  })

  // Error拦截器：出现错误的时候被调用
  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status)
    $log.error('axios错误拦截 ', code)
    if (code !== 200) {
      // 处理错误
    }
  })

  // Response拦截器：在请求之后被调用
  $axios.onResponse((response) => {
    $log.info('响应拦截', response.status)
    if (response.data.success === false) {
      $log.info('请求失败')
      // return
    }
  })
}
