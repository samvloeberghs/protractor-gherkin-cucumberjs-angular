var testing_1 = require('angular2/testing');
var core_1 = require('angular2/core');
var http_1 = require('angular2/http');
var testing_2 = require('angular2/http/testing');
var title_1 = require('./title');
describe('Title', function () {
    testing_1.beforeEachProviders(function () { return [
        http_1.BaseRequestOptions,
        testing_2.MockBackend,
        core_1.provide(http_1.Http, {
            useFactory: function (backend, defaultOptions) {
                return new http_1.Http(backend, defaultOptions);
            },
            deps: [testing_2.MockBackend, http_1.BaseRequestOptions]
        }),
        title_1.Title
    ]; });
    testing_1.it('should have http', testing_1.inject([title_1.Title], function (title) {
        expect(!!title.http).toEqual(true);
    }));
    testing_1.it('should get data from the server', testing_1.inject([title_1.Title], function (title) {
        spyOn(console, 'log');
        expect(console.log).not.toHaveBeenCalled();
        title.getData();
        expect(console.log).toHaveBeenCalled();
        expect(title.getData()).toEqual({ value: 'AngularClass' });
    }));
});
//# sourceMappingURL=title.spec.js.map