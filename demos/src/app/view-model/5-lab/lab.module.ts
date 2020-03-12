import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { LabShellComponent } from './lab-shell.component';

const routes: Routes = [
  {
    path: '',
    component: LabShellComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'begin' },
      { path: 'begin', loadChildren: () => import('./begin/vm.module').then(m => m.VmModule) },
      { path: 'end', loadChildren: () => import('./end/vm.module').then(m => m.VmModule) },
    ]
  }
];
@NgModule({
  imports: [ CommonModule, RouterModule.forChild(routes)],
  declarations: [ LabShellComponent ]
})
export class LabModule { }