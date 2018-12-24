import Koa from 'koa'
import config from 'config'
import koaBody from 'koa-body'
import logger from 'koa-logger'
import cors from '@koa/cors'
import WebSocket from 'ws'
import http from 'http'
import router from './router'

const app = new Koa()

const server = http.createServer(app.callback())
const wss = new WebSocket.Server({ server })
app.use(cors())
app.use(koaBody())
app.use(router.routes())
app.use(logger())

wss.on('connection', (ws, req) => {
  ws.on('message', (message) => {
    console.log('received: %s', message)
  })
  ws.send('connected')
})

server.listen(config.server.port)

export {
  app,
  wss
}
