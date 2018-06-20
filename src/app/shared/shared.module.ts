import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTaxPipe } from './addtax.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ AddTaxPipe ],
  declarations: [ AddTaxPipe ]
})
export class SharedModule { }
