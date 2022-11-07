// const koa = require('koa')
// const path = require('path')
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

/** 
 *使用koa-compose集成中间件
 */

// const helmet = require('koa-helmet')
// const statics = require('koa-static')

// const router =  require('./routes/routes')

// app.use(helmet())
// app.use(statics(path.join(__dirname, '../public')))
// app.use(router())

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