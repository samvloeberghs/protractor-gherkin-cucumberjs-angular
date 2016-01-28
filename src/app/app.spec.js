var testing_1 = require('angular2/testing');
// Load the implementations that should be tested
var app_1 = require('./app');
describe('App', function () {
    // provide our implementations or mocks to the dependency injector
    testing_1.beforeEachProviders(function () { return [
        app_1.App
    ]; });
    testing_1.it('should have a url', testing_1.inject([app_1.App], function (app) {
        expect(app.url).toEqual('https://twitter.com/AngularClass');
    }));
});
//# sourceMappingURL=app.spec.js.map