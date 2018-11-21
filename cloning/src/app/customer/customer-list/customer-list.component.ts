import { Component, OnInit, Input, ChangeDetectionStrategy, OnChanges, SimpleChanges } from '@angular/core';
import { Customer } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerListComponent implements OnInit, OnChanges {
  @Input() customers: Customer[];
  logMessages = [];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['customers']) {
      const custs = changes['customers'].currentValue;
      this.logMessages.push({ title: 'Customers changed', value: custs });
    }
  }

}
