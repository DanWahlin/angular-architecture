import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/planning' },
  {
    path: 'features-modules',
    loadChildren: () =>
      import('./features-modules/features-modules.module').then(
        (m) => m.FeaturesModulesModule
      ),
  },
  {
    path: 'httpclient-rxjs',
    loadComponent: () =>
      import('./httpClientRxJS/httpClientRxJS.component').then(
        (m) => m.HttpClientRxJSComponent
      ),
  },
  {
    path: 'signals',
    loadComponent: () =>
      import('./signals/signals.component').then((m) => m.SignalsComponent),
  },
];
