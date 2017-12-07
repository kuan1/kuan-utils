module.exports = {
  entry: {
    bundle: './src/index.js'
  },
  output: {
    filename: '[name].js',
    library: 'utils',
    libraryTarget: "umd"
  },
  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel-loader?presets[]=es2015'
      }
    ]
  },
  resolve: {
    alias: {
      'util': ''
    }
  }
};
