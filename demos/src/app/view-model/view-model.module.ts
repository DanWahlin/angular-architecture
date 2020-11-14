import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { CustomersOrdersShellComponent } from './view-model-shell.component';

const routes: Routes = [
  {
    path: 'view-model',
    component: CustomersOrdersShellComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'simple' },
      { path: 'simple', loadChildren: () => import('./1-simple/simple.module').then(m => m.SimpleModule) },
      { path: 'isolation', loadChildren: () => import('./2-isolation/iso.module').then(m => m.IsoModule) },
      { path: 'vm-class', loadChildren: () => import('./3-vm/vm.module').then(m => m.VmModule) },
      { path: 'vm-class-plus', loadChildren: () => import('./3b-vm-plus/vm-plus.module').then(m => m.VmPlusModule) },
      {
        path: 'customers-orders',
        loadChildren: () => import('./4-customers-orders/co.module').then(m => m.CustomersOrdersModule)
      }
    ]
  }
];
@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  declarations: [CustomersOrdersShellComponent]
})
export class ViewModelModule {}
