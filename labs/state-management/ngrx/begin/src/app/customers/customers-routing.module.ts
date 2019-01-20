import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomersComponent } from './customers.component';
import { CustomersEditComponent } from './customers-edit/customers-edit.component';

const routes: Routes = [
    { path: '', component: CustomersComponent },
    { path: ':id', component: CustomersEditComponent }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class CustomersRoutingModule {}
