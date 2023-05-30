import { Routes } from '@angular/router';

import { CustomersComponent } from './customers.component';
import { CustomersEditComponent } from './customers-edit/customers-edit.component';

export const routes: Routes = [
  { path: '', component: CustomersComponent },
  { path: ':id', component: CustomersEditComponent },
];
