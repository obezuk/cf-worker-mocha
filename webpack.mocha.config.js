module.exports = {
  target: 'webworker',
  entry: "./mocha.js",
  mode: "development",
  optimization: {
    minimize: false
  },
  performance: {
    hints: false
  },
  node: {
    fs: 'empty'
  },
  module: {
    exprContextCritical: false
  },
  output: {
    path: __dirname + "/dist",
    publicPath: "dist",
    filename: "mocha.js"
  }
};