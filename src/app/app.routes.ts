import { Routes } from '@angular/router';

import { Login } from './login';
import { Register } from './register';
import { ForgotPassword } from './forgot-password';
import { SetNewPassword } from './set-new-password';

export const ROUTES: Routes = [
  {path: '', component: Login},
  {path: 'login', component: Login},
  {path: 'register', component: Register},
  {path: 'forgot-password', component: ForgotPassword},
  {path: 'set-new-password', component: SetNewPassword},
];
