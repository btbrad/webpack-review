const path = require('path')

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'testbuild'),
    filename: 'index.js'
  }
}