const compose = require('koa-compose')
const Router = require('koa-router')

const router = new Router()

router.get('/', async (ctx) => {
  await ctx.render('index')
})

router.get('/user/:name', async (ctx) => {
  await ctx.render('user', ctx.params)
})
<%_ if (session) { -%>

router.get('/session', async (ctx) => {
  ctx.session.n = ctx.session.n ? ctx.session.n + 1 : 1
  await ctx.render('session', ctx.session)
})
<% } %>

module.exports = () => compose([
  router.routes(),
  router.allowedMethods()
])
