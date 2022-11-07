const Koa = require('koa')
const app = new Koa()

const middleware = async (ctx, next) => {
  console.log('this is middleware')
  console.log(ctx.request.path)
  await next()
  console.log('this is middleware end')
}

const middleware1 = async (ctx, next) => {
  console.log('this is middleware1')
  console.log(ctx.request.path)
  await next()
  console.log('this is middleware1 end')
}

const middleware2 = async (ctx, next) => {
  console.log('this is middleware2')
  console.log(ctx.request.path)
  await next()
  console.log('this is middleware2 end')
}

app.use(middleware)
app.use(middleware1)
app.use(middleware2)

app.listen(3000)