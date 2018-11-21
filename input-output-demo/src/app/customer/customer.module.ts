import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';

@NgModule({
  declarations: [CustomerComponent, CustomerDetailsComponent],
  exports: [CustomerComponent],
  imports: [
    CommonModule
  ]
})
export class CustomerModule { }
