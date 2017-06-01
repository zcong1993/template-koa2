const request = require('supertest')
const assert = require('power-assert')

const app = require('../app')

describe('Http test', () => {
  it('/ should work well', () => {
    request(app.listen())
      .get('/')
      .expect(200)
      .then(res => assert(res))
  })
})
