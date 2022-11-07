import koa from 'koa'
import path from 'path'
import helmet from 'koa-helmet'
import statics from 'koa-static'
import router from './routes/routes'
import koaBody from 'koa-body'
import koaJson from 'koa-json'
import cors from '@koa/cors'
import compose from 'koa-compose'
import compress from 'koa-compress'

const app = new koa()

const isDevMode = process.env.NODE_ENV !== 'production'

const middleware = compose([
  koaBody(),
  statics(path.join(__dirname, '../public')),
  cors(),
  koaJson({ pretty: false, param:'pretty' }),
  helmet()
])

if (!isDevMode) {
  app.use(compress())
}

app.use(middleware)
app.use(router())


app.listen(3000)