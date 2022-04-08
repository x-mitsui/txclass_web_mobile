const fs = require('fs')
const path = require('path')
const consola = require('consola')
// node bat/cp-nuxt-config &&
class RmNuxtWebpackPlugin {
  // constructor(options) {}
  static DoneTimes = 0 // 结束两次后，才执行
  apply(compiler) {
    // 在emit阶段插入钩子函数
    compiler.hooks.emit.tap('done', (compilation) => {
      RmNuxtWebpackPlugin.DoneTimes++
      if (RmNuxtWebpackPlugin.DoneTimes === 2) {
        fs.rm(path.resolve(process.cwd(), './nuxt.config.js'), (err) => {
          if (err) {
            consola.error(err)
            return
          }
          consola.success('删除nuxt.config.js成功')
        })
      }
    })
  }
}

module.exports = RmNuxtWebpackPlugin
