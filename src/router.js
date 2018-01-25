const Router = require('koa-router')
const router = new Router()

/**
 * 显示系统状态
 */
router.get('/', (ctx, next) => {
  ctx.body = { code: 0, status: 'ok' }
})

module.exports = router
