// Angular 2 browser
import {
  ELEMENT_PROBE_PROVIDERS,
  ELEMENT_PROBE_PROVIDERS_PROD_MODE
} from '@angular/platform-browser/src/dom/debug/ng_probe';

// Angular 2
import {enableProdMode} from '@angular/core';

// Environment Providers
var PROVIDERS = [];

if ('production' === ENV) {
  // Production
  enableProdMode();

  PROVIDERS = [
    ...PROVIDERS,
    ELEMENT_PROBE_PROVIDERS_PROD_MODE,
  ];

} else {
  // Development
  PROVIDERS = [
    ...PROVIDERS,
    ELEMENT_PROBE_PROVIDERS
  ];

}


export const ENV_PROVIDERS = [
  ...PROVIDERS
];
