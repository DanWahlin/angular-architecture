import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { components, routes } from './routes';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), ReactiveFormsModule],
  declarations: [components],
})
export class HttpClientRxJSModule {}
