const path = require('path')
const qiniu = require('qiniu')

// 上传文件到七牛云
class QiniuUploadPlugin {
  constructor(qiniuConfig) {
    if (
      !qiniuConfig ||
      !qiniuConfig.publicPath ||
      !qiniuConfig.accessKey ||
      !qiniuConfig.secretKey ||
      !qiniuConfig.bucket ||
      !qiniuConfig.zone
    ) {
      throw new Error('参数没有传递完全！')
    }
    // 保存用户传参
    this.qiniuConfig = qiniuConfig
    // 创建的七牛认证信息
    this.qiniuAuthenticationConfig = {}
    // 鉴权
    this.qiniuAuthenticationConfig.mac = new qiniu.auth.digest.Mac(
      qiniuConfig.accessKey,
      qiniuConfig.secretKey
    )
    // 设置存储空间名称
    const options = {
      scope: qiniuConfig.bucket,
    }
    // 创建上传token
    const putPolicy = new qiniu.rs.PutPolicy(options)
    this.qiniuAuthenticationConfig.uploadToken = putPolicy.uploadToken(
      this.qiniuAuthenticationConfig.mac
    )
    const config = new qiniu.conf.Config()
    // 存储空间对应的机房
    config.zone = qiniu.zone[qiniuConfig.zone]
    this.qiniuAuthenticationConfig.formUploader =
      new qiniu.form_up.FormUploader(config)
  }

  apply(compiler) {
    compiler.hooks.compilation.tap('QiniuUploadPlugin', (compilation) => {
      compilation.outputOptions.publicPath = this.qiniuConfig.publicPath
      this.absolutePath = compilation.outputOptions.path
    })

    compiler.hooks.done.tapAsync('QiniuUploadPlugin', (data, callback) => {
      // 先返回构建结果，然后异步上传
      callback()
      console.log('data:', data)
      const assetsPromise = []
      console.log('开始上传七牛云...')
      Object.keys(data.compilation.assets).forEach((file) => {
        // 上传非html文件
        if (!/.html$/.test(file)) {
          assetsPromise.push(this.uploadFile(file))
        }
      })
      Promise.all(assetsPromise)
        .then((res) => {
          console.log('七牛云上传完毕!')
        })
        .catch((err) => {
          console.log(err)
        })
    })
  }

  uploadFile(filename, coverUploadToken) {
    const key = filename
    const localFile = path.join(this.absolutePath || '', filename)
    return new Promise((resolve, reject) => {
      // 文件上传
      console.log(`上传文件${key}...`)
      const uploadToken =
        coverUploadToken || this.qiniuAuthenticationConfig.uploadToken
      const putExtra = new qiniu.form_up.PutExtra()
      this.qiniuAuthenticationConfig.formUploader.putFile(
        uploadToken,
        key,
        localFile,
        putExtra,
        (respErr, respBody, respInfo) => {
          if (respErr) {
            throw respErr
          }
          if (respInfo.statusCode == 200) {
            resolve(respInfo)
            console.log(`文件：${key}，上传成功！`)
          } else if (
            this.qiniuConfig.cover &&
            (respInfo.status === 614 || respInfo.statusCode === 614)
          ) {
            console.log(`文件：${key}，已存在，尝试覆盖上传！`)
            resolve(this.uploadFile(filename, this.coverUploadFile(filename)))
          } else {
            console.log(`文件：${key}，上传失败！`)
            reject(respInfo)
          }
        }
      )
    })
  }

  coverUploadFile(filename) {
    const options = {
      scope: this.qiniuConfig.bucket + ':' + filename,
    }
    const putPolicy = new qiniu.rs.PutPolicy(options)
    return putPolicy.uploadToken(this.qiniuAuthenticationConfig.mac)
  }
}

module.exports = { QiniuUploadPlugin }
