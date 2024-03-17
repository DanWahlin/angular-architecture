/*
 * Routes for the entire application.
 *
 * The villains route is already routing to a standalone component.
 *
 * You will convert the heroes route to route to a standalone component
 */

import { Routes } from '@angular/router';

import { authGuard } from './core/auth.guard';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'heroes' },

  {
    path: 'heroes',
    loadChildren: () =>
      import('./heroes/heroes.module').then((m) => m.HeroesModule),
  },

  /*** AFTER completing the standalone version of the entire heroes module
   * You will remove the NgModule routing to heroes above and enable the Standalone routing to heroes below ***/

  // {
  //   path: 'heroes',
  //   loadComponent: () =>
  //     import('./heroes/heroes/heroes.component').then((m) => m.HeroesComponent),
  // },

  {
    path: 'villains',
    loadComponent: () =>
      import('./villains/villains/villains.component').then((m) => m.VillainsComponent),
      data: { preload: true },
      canActivate: [authGuard],
  },
];
