import {Component} from 'angular2/core';
import {RouteConfig, Router} from 'angular2/router';

import {Login} from './login';
import {Register} from './register';
import {ForgotPassword} from './forgot-password';
import {SetNewPassword} from './set-new-password';

import {AppState} from './app.service';
import {RouterActive} from './router-active';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  pipes: [ ],
  providers: [ ],
  directives: [ RouterActive ],
  styles: [ require('./app.scss') ],
  template: require('./app.html')
})
@RouteConfig([
  { path: '/',      name: 'Index', component: Login, useAsDefault: true },
  { path: '/register',  name: 'Register',  component: Register },
  { path: '/forgot-password',  name: 'ForgotPassword',  component: ForgotPassword },
  { path: '/set-new-password',  name: 'SetNewPassword',  component: SetNewPassword },
])
export class App {
  angularclassLogo = 'assets/img/angularclass-avatar.png';
  name = 'Angular 2 Webpack Starter';
  url = 'https://twitter.com/AngularClass';

  constructor(public appState: AppState) {}

  ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
