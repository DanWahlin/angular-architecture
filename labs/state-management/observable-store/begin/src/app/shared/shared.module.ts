import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CapitalizePipe } from './capitalize.pipe';

@NgModule({
  imports: [ CommonModule, ReactiveFormsModule ],
  exports: [ ReactiveFormsModule, CapitalizePipe ],
  declarations: [ CapitalizePipe ]
})
export class SharedModule {}
