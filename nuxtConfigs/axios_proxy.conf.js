import { URL } from '../config/config'
export const axios = {
  proxy: true,
  credential: true,
  retry: { retris: 3 },
  // bserURL = http://[HOST]:[PORT][PREFIX]
  baseUrl: 'http://localhost:3008/',
  headers: {
    common: {},
    get: {},
    post: {},
  },
}
export const proxy = {
  '/api': {
    // 通过 /api 开头的请求，都会被代理到 target(目标接口域名)
    target: URL.API_BASE_URL, // 目标接口域名
    // changeOrigin: true,// 默认为真，和Koa-Proxy的VaryOrigin功能相同
  },
}
