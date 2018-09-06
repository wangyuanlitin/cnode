const path = require('path')
const webpack = require('webpack')

const srcPath = path.resolve(__dirname, 'src')

module.exports = {
  mode: 'development',
  entry: path.resolve(srcPath, 'index.jsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'cnode.bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.jsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.jsx|js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      },{
        test: /\.less|css$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }, {
          loader: 'less-loader', options: {javascriptEnabled: true}
        }]
      }
    ]
  },
  devServer: {
    port: 3000,
    contentBase: __dirname,
    open: true,
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}