import Router from 'koa-router'
import S1 from './s1/router'
import verfyToken from './middleware/verify-token'

const router = new Router()

/**
 * 显示系统状态
 */
router.get('/', (ctx, next) => {
  ctx.body = { code: 0, status: 'ok' }
  next()
})

// middleware
router.use(['/s1'], verfyToken())

router.use('/s1', S1.routes())

export default router
