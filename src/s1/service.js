const config = require('config')

module.exports = {
  index
}

/**
 * @param {*obj} ctx
 * @param {*obj} next
 */
async function index (ctx, next) {
  ctx.body = {
    code: 0,
    msg: 'ok',
    data: {
      port: config.server.port
    }
  }
  next()
}
