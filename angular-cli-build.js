/* global require, module */

var Angular2App = require('angular-cli/lib/broccoli/angular2-app');

module.exports = function(defaults) {
  var app = new Angular2App(defaults, {
    vendorNpmFiles: [
      'materialize-css/bin/materialize.css',
      'materialize-css/fonts/roboto/Roboto-Regular.woff2',
      'materialize-css/fonts/roboto/Roboto-Regular.woff',
      'materialize-css/fonts/roboto/Roboto-Regular.ttf',
      'materialize-css/fonts/roboto/Roboto-Light.woff2',
      'materialize-css/fonts/roboto/Roboto-Light.woff',
      'materialize-css/fonts/roboto/Roboto-Light.ttf'
    ]
  });
  return app.toTree();
};
