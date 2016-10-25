var merge = require('merge');
var helpers = require('./helpers');

module.exports = function (testmethod) {

    var config = merge(require('./protractor.' + testmethod + '.conf'), {

        baseUrl: 'http://localhost:3000',
        directConnect: true,

        // THIS IS platform specific!!
        // Change the binary to where your electron is
        capabilities: {
            'browserName': 'chrome',
            'chromeOptions': {
                'binary': '/Users/samvloeberghs/.nvm/versions/node/v6.2.2/lib/node_modules/electron/dist/Electron.app/Contents/MacOS/Electron',
                'args': ['app=.']
            }
        }

    });

    return config;

};


