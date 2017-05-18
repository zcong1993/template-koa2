const compose = require('koa-compose')
const Router = require('koa-router')
const api = require('../controllers/api')<% if (!simple) { %>
const index = require('../controllers/index')<% if (session) { %>
const session = require('../controllers/session')<% } %><% } %>

const router = new Router()<% if (!simple) { %>

router.get('/', index.index)

router.post('/echo', api.echo)<% if (!simple) { %>

router.get('/user/:name', index.user)<% } %><% if (session) { %>

router.get('/session', session.session)<% } %>

module.exports = () => compose([
  router.routes(),
  router.allowedMethods()
])
