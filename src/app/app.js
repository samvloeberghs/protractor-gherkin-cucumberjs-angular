var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
 * Angular 2 decorators and services
 */
var core_1 = require('angular2/core');
var router_1 = require('angular2/router');
var common_1 = require('angular2/common');
var router_active_1 = require('./directives/router-active');
var home_1 = require('./home/home');
/*
 * App Component
 * Top Level Component
 */
var App = (function () {
    function App() {
        this.angularclassLogo = 'assets/img/angularclass-avatar.png';
        this.name = 'Angular 2 Webpack Starter';
        this.url = 'https://twitter.com/AngularClass';
    }
    App = __decorate([
        core_1.Component({
            selector: 'app',
            providers: common_1.FORM_PROVIDERS.slice(),
            directives: router_1.ROUTER_DIRECTIVES.concat([router_active_1.RouterActive]),
            pipes: [],
            styles: ["\n    nav ul {\n      display: inline;\n      list-style-type: none;\n      margin: 0;\n      padding: 0;\n      width: 60px;\n    }\n    nav li {\n      display: inline;\n    }\n    nav li.active {\n      background-color: lightgray;\n    }\n  "],
            template: "\n    <header>\n      <nav>\n        <h1>Hello {{ name }}</h1>\n        <ul>\n          <li router-active>\n            <a [routerLink]=\" ['Index'] \">Index</a>\n          </li>\n          <li router-active>\n            <a [routerLink]=\" ['Home'] \">Home</a>\n          </li>\n          <li router-active>\n            <a [routerLink]=\" ['About'] \">About</a>\n          </li>\n        </ul>\n      </nav>\n    </header>\n\n    <main>\n      <router-outlet></router-outlet>\n    </main>\n\n    <footer>\n      WebPack Angular 2 Starter by <a [href]=\"url\">@AngularClass</a>\n      <div>\n        <img [src]=\"angularclassLogo\" width=\"10%\">\n      </div>\n    </footer>\n  "
        }),
        router_1.RouteConfig([
            { path: '/', component: home_1.Home, name: 'Index' },
            { path: '/home', component: home_1.Home, name: 'Home' },
            // Async load a component using Webpack's require with es6-promise-loader
            { path: '/about', loader: function () { return require('./about/about')('About'); }, name: 'About' },
            { path: '/**', redirectTo: ['Index'] }
        ]), 
        __metadata('design:paramtypes', [])
    ], App);
    return App;
})();
exports.App = App;
/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 * or via chat on Gitter at https://gitter.im/AngularClass/angular2-webpack-starter
 */
//# sourceMappingURL=app.js.map