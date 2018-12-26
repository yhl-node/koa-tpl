import Koa from 'koa'
import config from 'config'
import koaBody from 'koa-body'
import logger from 'koa-logger'
import cors from '@koa/cors'
import http from 'http'
import router from './router'
import WS from './ws'

const app = new Koa()
app.use(cors())
app.use(koaBody())
app.use(router.routes())
app.use(logger())

const server = http.createServer(app.callback())
server.listen(config.server.port)

const wss = WS.start(server)

export {
  app,
  server,
  wss
}
