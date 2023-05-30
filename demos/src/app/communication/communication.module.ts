import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routes, components } from './routes';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  declarations: [components, CustomersListComponent, CustomerDetailsComponent],
})
export class CommunicationModule {}
