import config from 'config'

export default {
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
