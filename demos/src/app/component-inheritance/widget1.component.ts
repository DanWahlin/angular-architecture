import { Component, OnInit } from '@angular/core';
import { BaseComponent } from './base-component.component';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-widget1',
  standalone: true,
  imports: [FormsModule],
  template: `
    <h3>{{ value }}</h3>

    {{ label }}
    <input
      type="text"
      [(ngModel)]="value"
      required
      [class.dirty]="isDirty"
      type="input"
    />
  `,
  styles: `
  .dirty {
    border: 3px solid red;
}
  `,
})
export class Widget1Component extends BaseComponent implements OnInit {
  constructor() {
    super();
  }
}
