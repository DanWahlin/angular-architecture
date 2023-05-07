import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';

@NgModule({
    imports: [CommonModule, CustomersRoutingModule, CustomersRoutingModule.components]
})
export class CustomersModule { }