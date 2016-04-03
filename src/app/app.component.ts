import {Component, ViewEncapsulation} from 'angular2/core';
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
  pipes: [],
  providers: [],
  directives: [RouterActive],
  styles: [require('./app.scss')],
  template: require('./app.html'),
  encapsulation: ViewEncapsulation.None
})
@RouteConfig([
  {path: '/', name: 'Index', component: Login, useAsDefault: true},
  {path: '/login', name: 'Login', component: Login },
  {path: '/register', name: 'Register', component: Register},
  {path: '/forgot-password', name: 'ForgotPassword', component: ForgotPassword},
  {path: '/set-new-password', name: 'SetNewPassword', component: SetNewPassword},
])
export class App {

  constructor(public appState: AppState) {
  }

  ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}
