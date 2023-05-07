import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddTaxPipe } from './addtax.pipe';
import { AddTaxMemoPipe } from './addtax-memo.pipe';
import { AgePipe } from './age.pipe';
import { FullNamePipe } from './fullname.pipe';
import { InputDateComponent } from './input-date.component';

const declarables = [ AddTaxPipe, AddTaxMemoPipe, AgePipe, FullNamePipe, InputDateComponent ];

@NgModule({
  imports: [
    CommonModule
  ],
  exports: declarables,
  declarations: declarables
})
export class SharedModule { }
