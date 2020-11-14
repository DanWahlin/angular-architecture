import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StructuringComponentsComponent } from './structuring-components.component';

const routes: Routes = [
    { path: 'structuring-components', component: StructuringComponentsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }) ],
  exports: [ RouterModule ]
})
export class StructuringComponentsRoutingModule {
  static components = [ StructuringComponentsComponent ];
}

