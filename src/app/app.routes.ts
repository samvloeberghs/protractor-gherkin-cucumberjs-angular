import {Routes} from '@angular/router';

import {Login} from "./login/login.component";
import {Register} from "./register/register.component";
import {ForgotPassword} from "./forgot-password/forgotPassword.component";
import {SetNewPassword} from "./set-new-password/setNewPassword.component";

export const ROUTES: Routes = [
  {path: '', component: Login},
  {path: 'login', component: Login},
  {path: 'register', component: Register},
  {path: 'forgot-password', component: ForgotPassword},
  {path: 'set-new-password', component: SetNewPassword},
];
