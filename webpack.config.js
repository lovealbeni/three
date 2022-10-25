const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
    }),
  ],
  output: {
    filename: '[name].js',
    chunkFilename: '[id].[chunkhash].js',
    path: path.resolve(__dirname,'dist'),
    clean: true,
  },
  devServer: {
    static: './dist',
    hot: true
  },
  optimization: {
    runtimeChunk: 'single'
  }
};
