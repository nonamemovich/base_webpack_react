const path = require('path');
const express = require('express');
const webpack = require('webpack');

const config = require('./webpack.config');

const port = 3001;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath,
  stats: {
    colors: true,
  },
  noInfo: true,
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/src/index.html`);
});

app.listen(port, '0.0.0.0', (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('==> Webpack development server listening on port %s', port);
  }
});
