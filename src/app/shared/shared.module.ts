import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTaxPipe } from './addtax.pipe';
import { AddTaxMemoPipe } from './addtax-memo.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ AddTaxPipe, AddTaxMemoPipe ],
  declarations: [ AddTaxPipe, AddTaxMemoPipe ]
})
export class SharedModule { }
