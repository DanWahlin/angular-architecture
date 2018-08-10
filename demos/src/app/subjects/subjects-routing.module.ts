import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubjectsComponent } from './subjects.component';

const routes: Routes = [
    { path: 'subjects', component: SubjectsComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class SubjectsRoutingModule {
  static components = [ SubjectsComponent ];
}