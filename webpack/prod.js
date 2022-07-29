const { merge } = require('webpack-merge')
const base = require('./base')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = merge(base, {
  mode: 'production',
  output: {
    filename: '[name].min.js',
    clean: true
  },
  devtool: 'source-map',
  performance: {
    maxEntrypointSize: 900000,
    maxAssetSize: 900000
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    },
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          output: {
            comments: false
          }
        }
      })
    ]
  }
})
