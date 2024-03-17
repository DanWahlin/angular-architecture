import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environments/environment';
import { AppDevModule } from './app/app-dev.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppDevModule)
  .catch(err => console.log(err));


/*** Remove the ngModule version of main above and enable the standalone version of main below ****/


// import { enableProdMode } from '@angular/core';
// import { bootstrapApplication } from '@angular/platform-browser';

// import { environment } from './environments/environment';

// import {AppComponent} from './app/app.component';
// import { appConfig } from './app/app.config';

// if (environment.production) {
//   enableProdMode();
// }

// bootstrapApplication(AppComponent, appConfig)
//   .catch(err => console.error(err));
