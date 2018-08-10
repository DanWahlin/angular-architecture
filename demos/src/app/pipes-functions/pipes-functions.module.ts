import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesFunctionsRoutingModule } from './pipes-functions-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PipesFunctionsRoutingModule
  ],
  declarations: [ PipesFunctionsRoutingModule.components ]
})
export class PipesFunctionsModule { }
