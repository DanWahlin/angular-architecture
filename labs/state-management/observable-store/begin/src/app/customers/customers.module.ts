import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { FilterTextboxComponent } from './customers-list/filter-textbox.component';
import { CustomersComponent } from './customers.component';
import { routes } from './routes';
import { CustomersEditComponent } from './customers-edit/customers-edit.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
  declarations: [
    CustomersListComponent,
    FilterTextboxComponent,
    CustomersComponent,
    CustomersEditComponent,
  ],
})
export class CustomersModule {}
