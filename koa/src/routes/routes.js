import combineRouters from 'koa-combine-routers'
import demoRouter from './demoRouter'

// const aRoutes = require('./aRouter')
// const bRoutes = require('./bRouter')

// module.exports = combineRouters(
  // aRoutes,
  // bRoutes,
// )

export default combineRouters(demoRouter)