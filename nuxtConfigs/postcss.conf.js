const px2remOpts = {
  rootValue: 100, // 页面中的px转换为rem的基数：页面px/基数 = rem
  unitPrecision: 5,
  propList: ['*'],
  selectorBlackList: ['html'], // 注意html的font-size px不要变
  replace: true,
  mediaQuery: false,
  minPixelValue: 0,
  exclude: /node_modules/i,
}

export const postcss = {
  plugins: {
    'postcss-plugin-px2rem': px2remOpts,
  },
}
