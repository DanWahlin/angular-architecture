import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routes } from './routes';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SignalsComponent } from './signals.component';

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes), FormsModule],
  declarations: [SignalsComponent],
})
export class SignalsModule {}