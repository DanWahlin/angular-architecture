import { NgModule, ModuleWithProviders } from '@angular/core';

@NgModule()
export class BrowserLoggerModule {
  public static forRoot(environment: any): ModuleWithProviders {
    return {
      ngModule: BrowserLoggerModule,
      providers: [
        {
          provide: 'env', // you can also use InjectionToken
          useValue: environment
        }
      ]
    };
  }
}
