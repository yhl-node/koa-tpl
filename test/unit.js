/*
 * @Author: yhl, yhl@1024hw.org
 * @Date: 2018-05-24 20:22:09
 * @Last Modified by: yhl
 * @Last Modified time: 2018-05-24 20:26:01
 */

test('1 + 1', () => {
  const response = 1 + 1
  expect(response).toBe(2)
  expect(response).toEqual(2)
})

test('1 - 1', () => {
  const response = 1 - 1
  expect(response).toBe(2)
  expect(response).toEqual(2)
})
