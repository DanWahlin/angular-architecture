import { Component, OnInit } from '@angular/core';
import { BaseComponent } from './base-component.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-widget2',
  standalone: true,
  imports: [FormsModule],
  template: `
    <h3>{{ value }}</h3>

    {{ label }}
    <textarea
      rows="5"
      cols="60"
      required
      title="textarea"
      [(ngModel)]="value"
      [class.dirty]="isDirty"
    ></textarea>
  `,
  styles: `
  .dirty {
    border: 3px solid green;
}
  `,
})
export class Widget2Component extends BaseComponent implements OnInit {
  constructor() {
    super();
  }
}
