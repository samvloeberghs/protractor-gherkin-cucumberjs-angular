/*
 * Providers provided by Angular
 */
var core_1 = require('angular2/core');
var browser_1 = require('angular2/platform/browser');
var router_1 = require('angular2/router');
var http_1 = require('angular2/http');
var ENV_PROVIDERS = [];
if ('production' === process.env.ENV) {
    core_1.enableProdMode();
}
ENV_PROVIDERS.push(browser_1.ELEMENT_PROBE_PROVIDERS);
/*
 * App Component
 * our top level component that holds all of our components
 */
var app_1 = require('./app/app');
/*
 * Bootstrap our Angular app with a top level component `App` and inject
 * our Services and Providers into Angular's dependency injection
 */
document.addEventListener('DOMContentLoaded', function main() {
    browser_1.bootstrap(app_1.App, ENV_PROVIDERS.concat(http_1.HTTP_PROVIDERS, router_1.ROUTER_PROVIDERS, [
        core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy })
    ]))
        .catch(function (err) { return console.error(err); });
});
// For vendors for example jQuery, Lodash, angular2-jwt just import them anywhere in your app
// Also see custom_typings.d.ts as you also need to do `typings install x` where `x` is your module
//# sourceMappingURL=main.js.map