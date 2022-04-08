// import serveStatic from 'serve-static'

import { getHomeData, getListData } from './server/controllers/Index'
// eslint-disable-next-line nuxt/no-cjs-in-config
// const px2rem = require('postcss-plugin-px2rem')

const px2remOpts = {
  rootValue: 100,
  unitPrecision: 5,
  propList: ['*'],
  selectorBlackList: ['html'], // 注意html不要变咩
  replace: true,
  mediaQuery: false,
  minPixelValue: 0,
  exclude: /node_modules/i,
}
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '妙思维JS++前端开发官方网站 - WEB|JavaScript|Vue|React|Node',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1,user-scalable=no',
      },
      {
        hid: 'description',
        name: 'description',
        content:
          '前端开发工程师精英就业班与提升班课程是针对前端开发零基础、爱好者、职业技术提升、互联网创业相关人员的一套完整的WEB前端开发学习体系，该体系通过深度基础课程对学员进行培养，使学员掌握最完整最有深度的技术理论知识和实战的基础技能。',
      },
      {
        hid: 'keyword',
        name: 'keyword',
        content:
          '前端开发,WEB开发,在线课程,编程,项目实战,项目架构,JavaScript,Vue,React,Node',
      },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  alias: { server: `<rootDir>/server` },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/styles/reset.css',
    '@/assets/styles/common.css',
    '@/assets/styles/iconfont.css',
    '@/assets/styles/border.css',
    'swiper/css/swiper.min.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // 注意插件先后顺序
    { src: '@/plugins/log.js' },
    { src: '@/assets/scripts/common.js', mode: 'client' },
    { src: '@/plugins/vue-awesome-swiper.js', mode: 'client' },
    { src: '@/plugins/vue-lazyload.js', mode: 'client' },
    { src: '@/plugins/intercepter.js' },
    { src: '@/plugins/hello.js' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios', '@nuxtjs/proxy'],

  axios: {
    proxy: true,
    credential: true,
    retry: { retris: 3 },
    // baseUrl: 'http://localhost:3008/api',
    prefix: '/api',
    headers: {
      common: {},
      get: {},
      post: {},
    },
  },
  proxy: {
    '/api': {
      target: 'http://jsppapi.codemongo.com/', // 目标接口域名
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/', // 把 /api 替换成 /
      },
    },
  },
  server: {
    port: 3008, // default: 3000
    host: '0.0.0.0', // default: localhost,
    // timing: false,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    //   vendor: ['axios'], // 为防止重复打包
    extend(config, { isClient }) {
      // Extend only webpack config for client-bundle
      if (isClient) {
        config.devtool = 'source-map'
        // config.module = {
        //   rules: [
        //     {
        //       test: /\.css$/,
        //       loader: ['style-loader', 'css-loader', 'postcss-loader'],
        //     },
        //   ],
        // }

        // config.
      }
    },
    postcss: {
      plugins: {
        'postcss-plugin-px2rem': px2remOpts,
      },
    },
  },

  router: {
    // middleware: ['auth'], // 全局路由中间件
  },
  // 服务器中间件
  serverMiddleware: [
    // Will register redirect-ssl npm package
    // 'redirect-ssl',

    // Will register file from project server-middleware directory to handle /server-middleware/* requires
    { path: '/server-middleware', handler: '~/server-middleware/index.js' },
    { path: '/get_home_data', handler: getHomeData },
    { path: '/get_list_data', handler: getListData },

    // We can create custom instances too
    // { path: '/static2', handler: serveStatic(__dirname + '/static2') }
  ],
}
