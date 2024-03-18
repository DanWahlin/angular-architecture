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
    path: 'planning',
    loadComponent: () =>
      import('./planning/planning.component').then((m) => m.PlanningComponent),
  },
  {
    path: 'pipes-functions',
    loadComponent: () =>
      import('./pipes-functions/pipes-functions.component').then(
        (m) => m.PipesFunctionsComponent
      ),
  },
  {
    path: 'signals',
    loadComponent: () =>
      import('./signals/signals.component').then((m) => m.SignalsComponent),
  },
  {
    path: 'structuring-components',
    loadComponent: () =>
      import('./structuring-components/structuring-components.component').then(
        (m) => m.StructuringComponentsComponent
      ),
  },
  // add subjects route just like the signals route
  {
    path: 'subjects',
    loadComponent: () =>
      import('./subjects/subjects.component').then((m) => m.SubjectsComponent),
  },
];
