import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgePipe } from './age.pipe';
import { FullNamePipe } from './fullname.pipe';
import { InputDateComponent } from './input-date.component';

const declarables = [ AgePipe, FullNamePipe, InputDateComponent ];

@NgModule({
  imports: [
    CommonModule
  ],
  exports: declarables,
  declarations: declarables
})
export class SharedModule { }
