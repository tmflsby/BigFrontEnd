const Koa = require('koa')
const Router = require('koa-router')
const cors = require('@koa/cors')
const { koaBody } = require('koa-body')
const json = require('koa-json')

const app = new Koa()
const router = new Router()

router.prefix('/api')

router.get('/', async (ctx, next) => {
  console.log(ctx)
  console.log(ctx.request)
  ctx.body = 'Hello World'
})

router.get('/api', async (ctx, next) => {
  const params = ctx.request.query
  console.log(params, '=====================')
  console.log(ctx)
  console.log(ctx.request)
  ctx.body = {
    name: params.name,
    age: params.age
  }
})

router.get('/async', async (ctx, next) => {
  ctx.body = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Hello Async')
    }, 2000)
  })
})

// app.use(async ctx => {
//   console.log(ctx)
//   console.log(ctx.request)
//   ctx.body = 'Hello World'
// })

router.post('/post', async (ctx, next) => {
  let { body } = ctx.request
  console.log(body)
  console.log(ctx.request)
  ctx.body = {
    ...body
  }
})

app.use(koaBody())
app.use(cors())
app.use(json({ pretty: false, param: 'pretty' }))
app.use(router.routes())
app.use(router.allowedMethods())

app.listen(3000)