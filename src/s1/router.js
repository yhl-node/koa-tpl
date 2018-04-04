const APP = require('./service')
const Router = require('koa-router')
const router = new Router()

router.get('/', APP.index)

module.exports = router
