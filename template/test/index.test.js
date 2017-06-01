const supertest = require('supertest')
const assert = require('power-assert')

const app = require('../app')
const request = supertest(app.listen())

describe('Http test', () => {
  it('/ should work well', async () => {
    const res = await request
      .get('/')
      .expect(200)

    assert(res)
  })
})
