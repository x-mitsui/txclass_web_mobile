<template>
  <div class="error-board">
    <h1>404</h1>
    <p>
      页面不存在，请
      <nuxt-link to="/">返回</nuxt-link>
      首页
    </p>
  </div>
</template>

<script>
export default {
  name: 'ErrorBoard',
}
</script>

<style lang="less" scoped>
.error-board {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 80px;
    color: #ccc;
  }

  p {
    font-size: 16px;
    margin-top: 15px;
    color: #999;

    a {
      text-decoration: underline;
      color: #f40;
    }
  }
}
</style>
