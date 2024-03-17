import { Routes } from '@angular/router';

// Solution - Import the AuthGuard
import { authGuard } from './core/auth.guard';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'heroes' },
  {
    path: 'heroes',
    loadComponent: () =>
      import('./heroes/heroes/heroes.component').then((m) => m.HeroesComponent),
  },
  {
    path: 'villains',
    loadComponent: () =>
      import('./villains/villains/villains.component').then((m) => m.VillainsComponent),
      data: { preload: true },
      canActivate: [authGuard],
  },
];
