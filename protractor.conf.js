exports.config = {

  seleniumServerJar: "node_modules/protractor/selenium/selenium-server-standalone-2.48.2.jar",
  framework: 'custom',
  frameworkPath: 'node_modules/protractor-cucumber-framework',
  specs: [
    'test/e2e/features/testCalculator.feature'
  ],
  cucumberOpts: {
    require: [
      'test/e2e/features/steps/*.steps.js',
      'test/e2e/features/support/*.js'
    ],
    format: 'pretty'
  },

  allScriptsTimeout: 110000,

  onPrepare: function() {
    browser.ignoreSynchronization = true;
  },

  /**
   * Angular 2 configuration
   *
   * useAllAngular2AppRoots: tells Protractor to wait for any angular2 apps on the page instead of just the one matching
   * `rootEl`
   *
   */
  useAllAngular2AppRoots: true

};
