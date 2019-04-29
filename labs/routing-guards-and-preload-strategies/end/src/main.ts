import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { AppDevModule } from './app/app-dev.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppDevModule)
// platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
