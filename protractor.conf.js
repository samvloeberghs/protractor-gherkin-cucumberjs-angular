// look in ./config for protractor configs
exports.config = require('./config/protractor.conf.js').config;

var testmethod = 'basic';
if (process.env.TEST_METHOD && process.env.TEST_METHOD === 'cucumber') {
    testmethod = 'cucumber';
}

switch (process.env.TEST_ENV) {
    case 'saucelabs':
        exports.config = require('./config/protractor.saucelabs.conf')(testmethod);
        break;
    case 'electron':
        exports.config = require('./config/protractor.electron.conf')(testmethod);
        break;
    case 'todoappexternal':
        exports.config = require('./config/protractor.todoappexternal.conf')(testmethod);
        break;
    case 'local':
    default:
        exports.config = require('./config/protractor.local.conf')(testmethod);
        break;
}