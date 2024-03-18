import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideProtractorTestingSupport } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data-service/in-memory-data.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideProtractorTestingSupport(),
    provideAnimations(),
    // TODO: Enable using Fetch API when disabling `HttpClientInMemoryWebApiModule`.
    provideHttpClient(/* withFetch()*/),

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
