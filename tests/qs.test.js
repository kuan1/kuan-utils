import qs from '../src/qs'

test('test qs utils', () => {
  const search = 'name=luzhongkuan&age=25'
  expect(qs.get('name', search)).toBe('luzhongkuan')
  const json = qs.parse(`?${search}`)
  expect(json).toEqual({ name: 'luzhongkuan', age: "25" })
  expect(qs.stringify(json)).toBe(search)
})