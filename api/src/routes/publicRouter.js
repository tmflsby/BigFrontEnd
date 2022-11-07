import koaRouter from 'koa-router'
import PublicController from '../api/PublicController'

const router = new koaRouter()

router.get('/getCaptcha', PublicController.getCaptcha)

export default router