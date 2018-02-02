const supertest = require('supertest')
const app = require('../app')

const request = supertest(app.listen())

describe('Http test', () => {
  it('/ should work well', async () => {
    const res = await request
      .get('/')

    expect(res.status).toBe(200)
    expect(res.text).toMatchSnapshot()
  })<% if (simple) { %>

  it('/echo should work well', async () => {
    const data = {
      'name': 'cong'
    }
    const res = await request
      .post('/echo')
      .set('Content-Type', 'application/json')
      .send(data)

    expect(res.status).toBe(200)
    expect(res.body).toMatchSnapshot()
  })<% } %>
})
