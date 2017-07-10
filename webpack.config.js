const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'index.js'),
  output: {
    path: path.join(__dirname, '/'),
    filename: 'bundle.js',
  },
  // module: {
  //   loaders: [{
  //     test: /\.js$/,
  //     exclude: /node_modules/,
  //   }]
  // },
  devServer: {
    contentBase: path.join(__dirname),
    port: 3000,
    inline: true,
  }
}
