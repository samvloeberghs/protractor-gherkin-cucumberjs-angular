var merge = require('merge');
var helpers = require('./helpers');

module.exports = function (testmethod) {

    var config = merge(require('./protractor.' + testmethod + '.conf'), {

        specs: [
            'test/e2e/speakerregistration/**/*.spec.ts'
        ],

        baseUrl: 'http://localhost:3000/',
        directConnect: true,

        capabilities: {
            'browserName': 'chrome',
            'chromeOptions': {
                'args': ['show-fps-counter=true']
            }
        }

    });

    console.log(config);

    return config;

};