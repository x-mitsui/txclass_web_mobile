export default function ({
  store,
  route,
  redirect,
  params,
  query,
  req,
  res,
  next,
}) {
  console.log('auth:', 'auth')
  // 如果没有token，则跳转到登录页面，类似于vue-router路由守卫
  if (!store.state.token) {
    redirect('/login')
  }
}
