// @AngularClass
require('ts-node/register');
var helpers = require('./helpers');

exports.config = {

  baseUrl: 'http://localhost:3000/',

  exclude: [],

  allScriptsTimeout: 110000,

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
  },

  directConnect: true,

  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
      'args': ['show-fps-counter=true']
    }
  },

  onPrepare: function() {
    browser.ignoreSynchronization = true;
  },

  seleniumServerJar: "node_modules/protractor/selenium/selenium-server-standalone-2.52.0.jar",

  /**
   * Angular 2 configuration
   *
   * useAllAngular2AppRoots: tells Protractor to wait for any angular2 apps on the page instead of just the one matching
   * `rootEl`
   *
   */
   useAllAngular2AppRoots: true
};
