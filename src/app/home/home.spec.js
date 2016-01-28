var testing_1 = require('angular2/testing');
var core_1 = require('angular2/core');
var http_1 = require('angular2/http');
var testing_2 = require('angular2/http/testing');
// Load the implementations that should be tested
var home_1 = require('./home');
var title_1 = require('./services/title');
testing_1.describe('Home', function () {
    // provide our implementations or mocks to the dependency injector
    testing_1.beforeEachProviders(function () { return [
        http_1.BaseRequestOptions,
        testing_2.MockBackend,
        core_1.provide(http_1.Http, {
            useFactory: function (backend, defaultOptions) {
                return new http_1.Http(backend, defaultOptions);
            },
            deps: [testing_2.MockBackend, http_1.BaseRequestOptions]
        }),
        title_1.Title,
        home_1.Home
    ]; });
    testing_1.it('should have default data', testing_1.inject([home_1.Home], function (home) {
        expect(home.data).toEqual({ value: '' });
    }));
    testing_1.it('should have a title', testing_1.inject([home_1.Home], function (home) {
        expect(!!home.title).toEqual(true);
    }));
    testing_1.it('should log ngOnInit', testing_1.inject([home_1.Home], function (home) {
        spyOn(console, 'log');
        expect(console.log).not.toHaveBeenCalled();
        home.ngOnInit();
        expect(console.log).toHaveBeenCalled();
    }));
});
//# sourceMappingURL=home.spec.js.map