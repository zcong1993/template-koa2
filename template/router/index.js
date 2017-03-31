const compose = require('koa-compose')
const Router = require('koa-router')

const router = new Router()

router.get('/', async (ctx) => {
  await ctx.render('index')
})

router.get('/user/:name', async (ctx) => {
  await ctx.render('user', ctx.params)
})

module.exports = () => compose([
  router.routes(),
  router.allowedMethods()
])
