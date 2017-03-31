const Koa = require('koa')
const views = require('koa-views')
const bodyParser = require('koa-bodyparser')
const static = require('koa-static')
const session = require('koa-session')
const routes = require('./router')

const app = new Koa()<% if (session){ %>
app.keys = ['koa:keys']

const sessionConfig = {
  key: 'koa:sess', /** (string) cookie key (default is koa:sess) */
  maxAge: 86400000, /** (number) maxAge in ms (default is 1 days) */
  overwrite: true, /** (boolean) can overwrite or not (default true) */
  httpOnly: true, /** (boolean) httpOnly or not (default true) */
  signed: true, /** (boolean) signed or not (default true) */
}

app.use(session(sessionConfig, app))<% } %>
app.use(static(__dirname + '/public'))
app.use(views(__dirname + '/views', { extension: 'pug' }))
app.use(bodyParser())
app.use(routes())

app.listen(3000)
console.log('listening on port 3000')
