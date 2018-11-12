/**
 * Created by qingwen.ye on 30/11/2017.
 */
import mockAxios from 'axios'
import supertest from 'supertest'
import app from '../src'

test('echo status', async () => {
  const response = await supertest(app.callback()).get('/')
  expect(response.status).toBe(200)
  expect(response.body).toEqual({ code: 0, status: 'ok' })
})

test('s1 service default', async () => {
  const response = await supertest(app.callback()).get('/s1')
  expect(response.status).toBe(200)
  expect(response.body).toEqual({
    code: 0,
    msg: 'ok',
    data: {
      port: 3000,
      info: { status: true, len: 5 }
    }
  })
})

test('s1 service ok', async () => {
  const token = 'myselftoken'
  const response = await supertest(app.callback()).get(`/s1?token=${token}`)
  expect(response.status).toBe(200)
  expect(response.body).toEqual({
    code: 0,
    msg: 'ok',
    data: {
      port: 3000,
      info: { status: true, len: token.length }
    }
  })
})

test('s1 service 403', async () => {
  const token = 'myt'
  const response = await supertest(app.callback()).get(`/s1?token=${token}`)
  expect(response.status).toBe(403)
  expect(response.body).toEqual({
    code: 4003,
    msg: 'no auth'
  })
})

test('mockAxios', async () => {
  const token = 'myt'
  mockAxios.get.mockImplementationOnce(() =>
    Promise.resolve({ data: {code: 0, msg: 'ok'} })
  )
  mockAxios.put.mockImplementationOnce(() =>
    Promise.resolve({ data: { code: 0, msg: 'ok' } })
  )
  const response = await supertest(app.callback()).get(`/s1?token=${token}`)
  expect(response.status).toBe(403)
  expect(response.body).toEqual({
    code: 4003,
    msg: 'no auth'
  })
})
