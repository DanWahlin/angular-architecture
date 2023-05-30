import { Routes } from '@angular/router';

// Solution - Import the AuthGuard
import { authGuard } from './core/auth.guard';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'heroes' },
  {
    // Note that this is the Angular 8+ way to lazy load routes
    path: 'heroes',
    loadChildren: () =>
      import('./heroes/heroes.module').then((m) => m.HeroesModule),
  },
  {
    // Note that this is the Angular 8+ way to lazy load routes
    path: 'villains',
    loadChildren: () =>
      import('./villains/villains.module').then((m) => m.VillainsModule),

    // Solution - Apply the AuthGuard
    data: { preload: true },
    canActivate: [authGuard],
  },
];
