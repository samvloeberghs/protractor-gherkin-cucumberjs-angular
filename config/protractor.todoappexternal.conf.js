var merge = require('merge');
var helpers = require('./helpers');

module.exports = function (testmethod) {

    var config = merge(require('./protractor.' + testmethod + '.conf'), {

        specs: [
            'test/e2e/todoappexternal/**/*.spec.ts'
        ],

        baseUrl: 'http://localhost:4200/',
        directConnect: true,

        capabilities: {
            'browserName': 'chrome',
            'chromeOptions': {
                'args': ['show-fps-counter=true']
            }
        }

    });

    return config;

};