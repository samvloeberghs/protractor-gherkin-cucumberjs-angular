require('ts-node/register');
var merge = require('merge');
var helpers = require('./helpers');

module.exports = merge(require('./protractor.conf'), {

  specs: [
    'test/e2e/**/*.spec.ts'
  ],

  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  }

});
