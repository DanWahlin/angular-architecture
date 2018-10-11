import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomersComponent } from './customers/customers.component';
import { CustomersListComponent } from './customers/customers-list/customers-list.component';
import { OrdersListComponent } from './customers/orders-list/orders-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/customers' },
  { 
    path: 'customers', component: CustomersComponent,
    children: [
      { path: 'customersList', component: CustomersListComponent },
      { path: 'ordersList', component: OrdersListComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
