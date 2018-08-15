import Koa from 'koa'
import config from 'config'
import koaBody from 'koa-body'
import logger from 'koa-logger'
import cors from '@koa/cors'
import router from './router'

const app = new Koa()
app.use(cors())
app.use(koaBody())
app.use(router.routes())
app.use(logger())

app.listen(config.server.port)

export default app
