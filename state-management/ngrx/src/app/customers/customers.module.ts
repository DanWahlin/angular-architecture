import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { FilterTextboxComponent } from './customers-list/filter-textbox.component';
import { CustomersComponent } from './customers.component';
import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersEditComponent } from './customers-edit/customers-edit.component';

@NgModule({
    imports: [ CommonModule, SharedModule, CustomersRoutingModule ],
    declarations: [ CustomersListComponent, FilterTextboxComponent, CustomersComponent, CustomersEditComponent]
})
export class CustomersModule { }
