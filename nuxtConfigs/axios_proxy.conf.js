import { URL } from '../config/config'
export const axios = {
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
}
export const proxy = {
  '/api': {
    target: URL.API_BASE_URL, // 目标接口域名
    changeOrigin: true,
    pathRewrite: {
      '^/api': '/', // 把 /api 替换成 /
    },
  },
}
