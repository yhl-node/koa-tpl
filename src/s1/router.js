import APP from './service'
import Router from 'koa-router'

const router = new Router()

router.get('/', APP.index)

export default router
