import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent, ROUTES, AppState } from './';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { SetNewPasswordComponent } from './set-new-password';
import { ForgotPasswordComponent } from './forgot-password';

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
  declarations: [AppComponent, LoginComponent, RegisterComponent, SetNewPasswordComponent, ForgotPasswordComponent],
  bootstrap: [AppComponent],
  providers: [
    APP_PROVIDERS
  ]
})
export class AppModule {

}
