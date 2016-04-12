module.exports = {
  devtool: 'source-map',
  entry: './app.js',
  output: {
    filename: './bundle.js'
  },
  watch: true,
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.(jpe?g|png|gif|svg)$/i, loader: 'url?file-loader?limit=10000!img?progressive=true' },
      // { test: /\.png$/, loader: "url-loader?limit=100000!img?minimize" }, // you can also load per file type.
      // { test: /\.jpg$/, loader: "file-loader" }
    ]
  }
}