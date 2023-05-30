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
];
