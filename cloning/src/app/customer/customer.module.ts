import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerListComponent } from './customer-list/customer-list.component';

@NgModule({
  declarations: [CustomerComponent, CustomerDetailsComponent, CustomerListComponent],
  exports: [CustomerComponent],
  imports: [
    CommonModule
  ]
})
export class CustomerModule { }
