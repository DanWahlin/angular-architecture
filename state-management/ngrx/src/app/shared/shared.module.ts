import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CapitalizePipe } from './capitalize.pipe';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [FormsModule, ReactiveFormsModule, CapitalizePipe],
  declarations: [ CapitalizePipe ]
})
export class SharedModule {}
