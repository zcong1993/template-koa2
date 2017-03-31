const compose = require('koa-compose')
const Router = require('koa-router')

const router = new Router()

router.get('/', async (ctx) => {
  await ctx.render('index')
})

router.get('/user/:name', async (ctx) => {
  await ctx.render('user', Object.assign({}, ctx.params, {session: ctx.session.name}))
})

router.get('/login', async (ctx) => {
  console.log(ctx.session)
  ctx.session.name = 'zcong'
  ctx.body = 'login'
})

router.post('/post', async (ctx) => {
  console.log(ctx.request.body)
  await ctx.render('user', ctx.request.body)
})

module.exports = () => compose([
  router.routes(),
  router.allowedMethods()
])
