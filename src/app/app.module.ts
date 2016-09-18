import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {AppComponent} from "./app.component";
import {HttpModule} from "@angular/http";
import {AppState} from "./app.service";
import {ROUTES} from "./app.routes";
import {Login} from "./login/login.component";
import {Register} from "./register/register.component";
import {SetNewPassword} from "./set-new-password/setNewPassword.component";
import {ForgotPassword} from "./forgot-password/forgotPassword.component";

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
