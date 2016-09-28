import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent, ROUTES, AppState } from './';
import { Login } from './login';
import { Register } from './register';
import { SetNewPassword } from './set-new-password';
import { ForgotPassword } from './forgot-password';

const APP_PROVIDERS = [
  AppState
];

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES, {useHash: false})
  ],
  declarations: [AppComponent, Login, Register, SetNewPassword, ForgotPassword],
  bootstrap: [AppComponent],
  providers: [
    APP_PROVIDERS
  ]
})
export class AppModule {

}
