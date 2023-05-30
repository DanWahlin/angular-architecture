import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { components, routes } from './routes';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [components],
})
export class OrdersModule {}
