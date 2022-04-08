# 开发记录

## 如何查找对应当前 webpack 版本的 less-loader？

```
去 less-loader 的 github 仓库，找到 package.json，再切换tag，查找满足当前 webpack 版本的 less-loader 和 less 安装
```

## nuxt.config.js 中的 components 为 true 时生成组件是什么名字 ？

```
嵌套情况，可以去.nuxt/components 文件夹中查看生成的组件名字。
```

### /deep/穿透

### ue-awesome-swiper

### swipper-item 内图片宽度的设置

```
设置百分比是相对于包裹它的父级块级元素，而不是a；
a属于非替换元素，它的宽高被它内部元素撑开，而不能设置。
https://developer.mozilla.org/zh-CN/docs/Web/CSS/width
```
