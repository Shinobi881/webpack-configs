##Branch: bare-bones-style
In order to add images we have to use an image loader

##Changes:

[Loaders](http://webpack.github.io/docs/list-of-loaders.html): 
  - `url-loader` 
  - `file-loader`
  - `img-loader`

##Installation: 
1. - [ ] - `npm i -D img-loader url-loader file-loader`
2. After file changes (*see below*) run `webpack`

##File Changes:

**- [ ] - `webpack.config.js`:** 
```
module: {
  loaders: [
    { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
    { test: /\.css$/, loader: "style-loader!css-loader" },
    { test: /\.(jpe?g|png|gif|svg)$/i, loader: 'url?file-loader?limit=10000!img?progressive=true' }, * *add this line*
  ]
}
```

##Power-ups:
- Watchmode: `watch: true` - `webpack` - watches the entry file and dependencies for changes and recompiles automatically.
- Source-map: `devtool: 'source-map'` - debugging tool giving views to the files intead of `bundle.js`
- Image-Loader: Image loader is using the `minimize` and `progressive` rendering **options** 

##Branch and configs
- Current: `bare-bones-image`
- Next: `architechted`