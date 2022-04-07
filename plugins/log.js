const debug = require('debug')
export default (context, inject) => {
  const log = {
    info: debug('log:info'),
    error: debug('log:error'),
    warn: debug('log:warn'),
  }

  inject('log', log)
}
