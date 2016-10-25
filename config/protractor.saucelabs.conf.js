var helpers = require('./helpers');

module.exports = function (testmethod) {

    var config = merge(require('./protractor.' + testmethod + '.conf'), {

        sauceUser: process.env.SAUCE_USERNAME,
        sauceKey: process.env.SAUCE_ACCESS_KEY,
        baseUrl: 'http://ng2auth.samvloeberghs.be/',

        multiCapabilities: [
            {
                'platform': 'Windows 7',
                'browserName': 'chrome',
                'version': '52'
            },
            {
                'platform': 'Windows 7',
                'browserName': 'chrome',
                'version': '51'
            }
        ]

    });

    return config;

};