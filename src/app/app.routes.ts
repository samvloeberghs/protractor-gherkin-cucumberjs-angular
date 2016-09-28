import { Routes } from '@angular/router';

import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { ForgotPasswordComponent } from './forgot-password';
import { SetNewPasswordComponent } from './set-new-password';

export const ROUTES: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent},
  {path: 'set-new-password', component: SetNewPasswordComponent},
];
