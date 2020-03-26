import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';

import { VmPlusContainerComponent } from './vm-plus-container.component';
import { VmPlusCustomerDetailsComponent } from './vm-plus-customer-details.component';
import { VmPlusCustomerListComponent } from './vm-plus-customer-list.component';
import { VmPlusShellComponent } from './vm-plus-shell.component';

const routes: Routes = [{ path: '', component: VmPlusShellComponent }];

/** ViewModel Class PLUS Demo - NgModule */
@NgModule({
  imports: [CommonModule, FormsModule, SharedModule, RouterModule.forChild(routes)],
  declarations: [
    VmPlusCustomerDetailsComponent, VmPlusCustomerListComponent,
    VmPlusContainerComponent, VmPlusShellComponent
  ]
})
export class VmPlusModule { }