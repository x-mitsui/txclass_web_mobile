export default ({ app, $log }, inject) => {
  // Inject $hello(msg) in Vue, context and store.
  inject('hello', (msg) => $log.info(`Hello ${msg}!`))
}
