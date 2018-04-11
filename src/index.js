require('dotenv').config()
const Koa = require('koa')
const config = require('config')
const koaBody = require('koa-body')
const logger = require('koa-logger')
const cors = require('@koa/cors')
const router = require('./router')

const app = new Koa()
app.use(cors())
app.use(koaBody())
app.use(router.routes())
app.use(logger())

app.listen(config.server.port)

module.exports = app
