import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlanningComponent } from './planning/planning.component';
import { FeaturesModulesComponent } from './features-modules/features-modules.component';

const routes: Routes = [
  { path: '', pathMatch:'full', redirectTo: '/planning' },
  { path: 'features-modules', loadChildren: () => import('app/features-modules/features-modules.module').then(m => m.FeaturesModulesModule) }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}

