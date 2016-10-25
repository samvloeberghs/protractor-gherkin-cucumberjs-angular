require('ts-node/register');
var merge = require('merge');
var helpers = require('./helpers');

module.exports = merge(require('./protractor.conf'), {

  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  specs: [
    helpers.root('test/e2e/**/*.feature')
  ],
  cucumberOpts: {
    require: [
      'test/e2e/**/*.steps.ts'
    ],
    format: 'pretty'
  }

});
