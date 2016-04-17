// @AngularClass
require('ts-node/register');
var helpers = require('./helpers');

exports.config = {

  /**
   * Angular 2 configuration
   *
   * useAllAngular2AppRoots: tells Protractor to wait for any angular2 apps on the page instead of just the one matching
   * `rootEl`
   *
   */
  useAllAngular2AppRoots: true,

  /* SAUCELABS CONFIG */
  sauceUser: process.env.SAUCE_USERNAME,
  sauceKey: process.env.SAUCE_ACCESS_KEY,
  baseUrl: 'http://ng2auth.samvloeberghs.be/',

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

  multiCapabilities: [
    {
      'platform': 'Windows 7',
      'browserName': 'chrome',
      'version': '49'
    },
    {
      'platform': 'Windows 7',
      'browserName': 'chrome',
      'version': '48'
    }
  ],

  onPrepare: function () {
    browser.ignoreSynchronization = true;
  }

};
