import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {AppModule} from "./app";

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
