module.exports = {
  write: true,
  prefix: '^',
  test: [
    'test'
  ],
  dep: [
    'koa',
    'koa-bodyparser',
    'koa-compose',
    'koa-logger',
    'koa-router'<% if (session){ %>,
    'koa-session'<% } %><% if (!simple){ %>,
    'koa-static',
    'koa-views',
    'pug'<% } %>
  ],
  devdep: [<% if (test) { %>
    'cross-env',
    'mocha',
    'power-assert',
    'supertest'<% } %>
  ],
  exclude: [
    './test/fixtures'
  ]
}
