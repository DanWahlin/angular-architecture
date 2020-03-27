import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch:'full', redirectTo: '/planning' },
  { path: 'features-modules', loadChildren: () => import('./features-modules/features-modules.module')
    .then(m => m.FeaturesModulesModule) }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}

