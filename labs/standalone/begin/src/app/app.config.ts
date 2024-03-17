/*
 * This app.config was NOT in the NgModule version.
 * It's a new file that provides the application configuration
 * for the standalone version of the app.
 *
 * It is harmless while the NgModule version is active,
 * but it is essential for the standalone version.
 *
 * It incorporates the providers from the NgModule version from
 * the AppDevModule, the AppModule, and the Material MatSnackBarModule.
 *
 * You will reference this `app.config` file in the standalone `main.ts` file.
 */
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
