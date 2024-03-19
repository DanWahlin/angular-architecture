import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideProtractorTestingSupport } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './core';

import { NetworkAwarePreloadStrategy } from './core';
import { MatLegacySnackBarModule as MatSnackBarModule } from '@angular/material/legacy-snack-bar';
import { provideRouter, withPreloading } from '@angular/router';
import { routes } from './routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideProtractorTestingSupport(),
    provideAnimations(),
    // TODO: Enable using Fetch API when disabling `HttpClientInMemoryWebApiModule`.
    provideHttpClient(/* withFetch()*/),
    provideRouter(routes,
      withPreloading(NetworkAwarePreloadStrategy),
    ),

    importProvidersFrom(MatSnackBarModule),
    
    // Fakes a backend data server. Never use in production apps.
    importProvidersFrom(
      InMemoryWebApiModule.forRoot(InMemoryDataService, {
        dataEncapsulation: false,
        delay: 250,
        passThruUnknownUrl: true,
      })
    ),
  ],
};
