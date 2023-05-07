import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';

@NgModule({
    imports: [CommonModule, OrdersRoutingModule, OrdersRoutingModule.components]
})
export class OrdersModule { }