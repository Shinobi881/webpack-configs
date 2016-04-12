##Branch: bare-bones-style
Now we're going to add some CSS to our project

##Changes:

[Loaders](https://webpack.github.io/docs/stylesheets.html): 
  - `style-loader` 
  - `css-loader`

##Installation: 
1. - [ ] - `npm i -D style-loader css-loader`
2. After file changes (*see below*) run `webpack`

##File Changes:

**- [ ] - `webpack.config.js`:** 
```
module: {
  loaders: [
    { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
    { test: /\.css$/, loader: "style-loader!css-loader" } *add this line*
  ]
}
```

##Power-ups:
- Watchmode: `watch: true` - `webpack` - watches the entry file and dependencies for changes and recompiles automatically.
- Source-map: `devtool: 'source-map'` - debugging tool giving views to the files intead of `bundle.js`

##Branch and configs
- Current: `bare-bones-style`
- Next: `bare-bones-image`