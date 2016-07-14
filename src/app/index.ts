// App
export * from './app.component';
export * from './app.service';

import {ROUTER_PROVIDERS} from "@angular/router-deprecated";
import {AppState} from './app.service';

// Application wide providers
export const APP_PROVIDERS = [
  AppState,
  ROUTER_PROVIDERS
];
