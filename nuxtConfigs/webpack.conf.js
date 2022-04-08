const RmNuxtWebpackPlugin = require('./webpackPlugin/RmNuxtConfigPlugin')
export const webpackConf = (isClient) => ({
  devtool: 'source-map',
  plugins: [new RmNuxtWebpackPlugin()],
})
