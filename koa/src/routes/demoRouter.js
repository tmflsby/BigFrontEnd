import koaRouter from 'koa-router'
import DemoController from '../api/DemoController'

const router = new koaRouter()

router.get('/demo', DemoController.demo)

export default router