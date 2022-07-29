const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          },
          {
            loader: 'ts-loader'
          }
        ]
      },
      {
        test: /\.js$/,
        use: ['source-map-loader'],
        enforce: 'pre'
      },
      {
        test: [/\.vert$/, /\.frag$/],
        use: 'raw-loader'
      },
      {
        test: /\.(gif|png|jpe?g|svg|xml)$/i,
        use: 'file-loader'
      }
    ]
  },
  resolve: { extensions: ['.js', '.ts', '.json'] },
  plugins: [
    new webpack.DefinePlugin({
      CANVAS_RENDERER: JSON.stringify(true),
      WEBGL_RENDERER: JSON.stringify(true)
    }),
    new HtmlWebpackPlugin({
      template: './static/index.html'
    })
  ]
}
