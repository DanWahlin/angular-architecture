import { Component, Input } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'input-date',
  standalone: true,
  imports: [ DatePipe ],
  template: `<input type="date" [value]="date | date:'yyyy-MM-dd'" (change)="date = $event.target.value"
  [min]="min" [max]="max">`
})
export class InputDateComponent {
  @Input() model: { [key: string]: any };
  @Input() property: string;
  @Input() min: string;
  @Input() max: string;
  get date() {
    return this.model[this.property];
  }
  set date(value: string) {
    const newDate = new Date(value);
    if (!isNaN(newDate.getFullYear())) {
      this.model[this.property] = newDate;
    }
  }
}
