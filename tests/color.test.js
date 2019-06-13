import color from '../src/color'

it('test color utils', () => {
  const randomColor = color.random()

  expect(randomColor.length).toBe(7);

  const rgb = color.hex2rgb(randomColor)

  expect(color.rgb2hex(...(rgb.split(',')))).toBe(randomColor)
});
