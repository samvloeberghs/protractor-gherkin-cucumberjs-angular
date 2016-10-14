dirname = __dirname;
require('ts-node/register');
var helpers = require('./helpers');

console.log("dirname");
console.log(dirname);

exports.config = {


  /**
   * Angular 2 configuration
   *
   * useAllAngular2AppRoots: tells Protractor to wait for any angular2 apps on the page instead of just the one matching
   * `rootEl`
   *
   */
  useAllAngular2AppRoots: true,

  baseUrl: 'http://localhost:3000',

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

  // THIS IS platform specific!!
  // Change the binary to where your electron is
  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
      'binary': '/Users/samvloeberghs/.nvm/versions/node/v6.2.2/lib/node_modules/electron/dist/Electron.app/Contents/MacOS/Electron',
      'args': ['app=.']
    }
  },

  onPrepare: function () {
    browser.ignoreSynchronization = true;
  }

};
