const Router = require('koa-router')
const S1 = require('./s1/router')

const router = new Router()

/**
 * 显示系统状态
 */
router.get('/', (ctx, next) => {
  ctx.body = { code: 0, status: 'ok' }
})

router.use('/s1', S1.routes())

module.exports = router
