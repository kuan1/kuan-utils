import {
  add,
  sub,
  mul,
  div
} from '../src/mathUtil'

it('test mathUtil', () => {
  expect(add(0.1, 0.2)).toBe(0.3)
  expect(sub(0.4, 0.1)).toBe('0.3')
  expect(mul(7.77, 0.01)).toBe(0.0777)
  expect(div(7.77, 100)).toBe(0.0777)
})