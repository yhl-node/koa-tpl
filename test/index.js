/**
 * Created by qingwen.ye on 30/11/2017.
 */
import supertest from 'supertest'
import app from '../src/'

test('echo status', async () => {
  const response = await supertest(app.callback()).get('/')
  expect(response.status).toBe(200)
  expect(response.body).toEqual({ code: 0, status: 'ok' })
})
