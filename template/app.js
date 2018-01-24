const Koa = require('koa')
const onerror = require('koa-onerror')<% if (cors){ %>
const cors = require('kcors')<% } %>
const logger = require('koa-logger')<% if (!simple) { %>
const views = require('koa-views')
const koaStatic = require('koa-static')<% } %>
const bodyParser = require('koa-bodyparser')<% if (session){ %>
const session = require('koa-session')<% } %>
const routes = require('./router')

const app = new Koa()<% if (cors){ %>
app.use(cors())<% } %>
onerror(app)
if (process.env.NODE_ENV !== 'test') {
  app.use(logger())
}<% if (session){ %>
app.keys = ['koa:keys']

const sessionConfig = {
  key: 'koa:sess', /** (string) cookie key (default is koa:sess) */
  maxAge: 86400000, /** (number) maxAge in ms (default is 1 days) */
  overwrite: true, /** (boolean) can overwrite or not (default true) */
  httpOnly: true, /** (boolean) httpOnly or not (default true) */
  signed: true, /** (boolean) signed or not (default true) */
}

app.use(session(sessionConfig, app))<% } %><% if (!simple) { %>
app.use(koaStatic(__dirname + '/public'))
app.use(views(__dirname + '/views', { extension: 'pug' }))<% } %>
app.use(bodyParser())
app.use(routes())

module.exports = app
