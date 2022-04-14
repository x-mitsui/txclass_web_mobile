const path = require('path')
const { keys, bucket, localPath, zone } = require('../server/configs/qiniu.js')
const RmNuxtWebpackPlugin = require('./webpackPlugin/RmNuxtConfigPlugin')
const { QiniuUploadPlugin } = require('./webpackPlugin/QiniuUploadPlugin')
export const webpackConf = ({ isClient, isDev, isServer }) => {
  const config = { plugins: [] }
  if (isClient) {
    // 只上传客户端资源
    if (isDev) {
      config.plugins.push(new RmNuxtWebpackPlugin({}))
    } else {
      config.plugins.push(
        new QiniuUploadPlugin({
          accessKey: keys.ak,
          secretKey: keys.sk,
          bucket: bucket.name,
          publicPath: path.resolve(process.cwd(), localPath),
          zone,
          cover: true,
        })
      )
    }
  }
  if (isDev) {
    config.devtool = 'source-map'
  }
  return {
    ...config,
    plugins: [...config.plugins],
  }
}
