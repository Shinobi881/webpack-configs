##Branch: bare-bones-es6
We added the [Babel for Webpack](http://babeljs.io/docs/setup/#installation) transpiler and appropriate loaders and presets

##Changes:

Loaders: 
  - `babel-loader` for transpiling ES6

Presets:
  - `babel-preset-es2015` *(No specific stages but required for babel 6)*

##Installation:
1. - [ ] - `npm i -D webpack babel-core babel-loader babel-preset-es2015`
2. - [ ] - Create file `.babelrc` in root directory
3. After file changes run `webpack`

##File Changes:

**- [ ] - `.babelrc`:**
```
{
  presets: ["es2015"]
}
``` 
**- [ ] - `webpack.config.js`:** 
```
module: {
  loaders: [
    { test: /\.js$/, exclude: /node_modules/, loader: 'babel' }
  ]
}
```

##Power-ups:
- Watchmode: `watch: true` - `webpack` - watches the entry file and dependencies for changes and recompiles automatically.
- Source-map: `devtool: 'source-map'` - debugging tool giving views to the files intead of `bundle.js`