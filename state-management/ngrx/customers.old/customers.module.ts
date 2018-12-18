import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';

@NgModule({
  imports: [CommonModule, SharedModule, MaterialModule, CustomersRoutingModule],
  exports: [CustomersComponent, CustomerDetailComponent],
  declarations: [CustomersComponent, CustomerDetailComponent, CustomerListComponent],
  providers: []
})
export class CustomersModule {}
