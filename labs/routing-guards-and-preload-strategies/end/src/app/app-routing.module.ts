import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

// Solution - Import the AuthGuard
import { AuthGuard } from './core/auth.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'heroes' },
  {
    // Note that this is the Angular 8+ way to lazy load routes
    path: 'heroes',
    loadChildren: () => import('./heroes/heroes.module').then(m => m.HeroesModule)
  },
  {
    // Note that this is the Angular 8+ way to lazy load routes
    path: 'villains',
    loadChildren: () => import('./villains/villains.module').then(m => m.VillainsModule),

    // Solution - Apply the AuthGuard
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [
    // Solution - Preload All - Strategy
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    })
  ],

  exports: [RouterModule]
})
export class AppRoutingModule {}
