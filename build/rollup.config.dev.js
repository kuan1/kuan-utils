import serve from 'rollup-plugin-serve'

export default {
  input: 'src/color.js',
  output: {
    file: 'index.js',
    format: 'umd',
    name: 'kuan-utils'
  },
  plugins: [
    serve({
      open: true,
      contentBase: ['lib', 'public']
    })
  ]
}