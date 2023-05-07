import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StructuringComponentsRoutingModule } from './structuring-components-routing.module';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';



@NgModule({
  imports: [
    CommonModule,
    StructuringComponentsRoutingModule  
  ],
  declarations: [ StructuringComponentsRoutingModule.components, CustomersListComponent, CustomerDetailsComponent ]
})
export class StructuringComponentsModule { }
