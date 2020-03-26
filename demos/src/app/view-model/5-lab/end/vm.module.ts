import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../../../shared/shared.module';

import { VmContainerComponent } from './vm-container.component';
import { VmCustomerDetailsComponent } from './vm-customer-details.component';
import { VmCustomerListComponent } from './vm-customer-list.component';

const routes: Routes = [{ path: '', component: VmContainerComponent }];

/** ViewModel Class Demo - NgModule */
@NgModule({
  imports: [CommonModule, FormsModule, SharedModule, RouterModule.forChild(routes)],
  declarations: [
    VmCustomerDetailsComponent, VmCustomerListComponent,
    VmContainerComponent, VmContainerComponent
  ]
})
export class VmModule { }