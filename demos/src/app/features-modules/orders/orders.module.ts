import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';

@NgModule({
    imports: [ CommonModule, OrdersRoutingModule ],
    declarations: [ OrdersRoutingModule.components ]
})
export class OrdersModule { }