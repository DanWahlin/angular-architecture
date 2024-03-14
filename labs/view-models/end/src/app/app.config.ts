import {ApplicationConfig} from '@angular/core';
import {provideProtractorTestingSupport} from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations'

export const appConfig: ApplicationConfig = {
  providers: [
    provideProtractorTestingSupport(),
    provideAnimations()
  ],
};
