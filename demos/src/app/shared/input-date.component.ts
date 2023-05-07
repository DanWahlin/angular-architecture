import { Component, Input } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'input-date',
    template: `<input type="date" [value]="date | date:'yyyy-MM-dd'" (change)="date = $any($event).target.value"
  [min]="min" [max]="max">`,
    standalone: true,
    imports: [DatePipe]
})
export class InputDateComponent {
  @Input() model!: { [key: string]: any };
  @Input() property = '';
  @Input() min = '';
  @Input() max = '';
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
