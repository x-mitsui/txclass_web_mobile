const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { keys, bucket, localPath, zone } = require('../server/configs/qiniu.js')
const RmNuxtWebpackPlugin = require('./webpackPlugin/RmNuxtConfigPlugin')
const { QiniuUploadPlugin } = require('./webpackPlugin/QiniuUploadPlugin')
export const webpackConf = ({ isClient, isDev, isServer }) => {
  const config = { plugins: [] }
  if (isClient) {
    // 只上传客户端资源

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
  if (isDev) {
    config.devtool = 'source-map'
  }
  return {
    ...config,
    plugins: [
      new RmNuxtWebpackPlugin(),
      new CleanWebpackPlugin(),
      ...config.plugins,
    ],
  }
}
