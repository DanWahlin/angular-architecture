import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { OrdersComponent } from './orders.component';

const routes: Routes = [{ path: '', component: OrdersComponent }];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: [OrdersComponent],
})
export class OrdersModule {}
