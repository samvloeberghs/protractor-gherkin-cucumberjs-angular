require('ts-node/register');

module.exports = {

  useAllAngular2AppRoots: true,
  exclude: [],
  allScriptsTimeout: 110000,

  onPrepare: function () {
    browser.ignoreSynchronization = true;
  }

};
