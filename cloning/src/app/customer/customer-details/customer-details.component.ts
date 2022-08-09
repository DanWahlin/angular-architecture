import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy, SimpleChanges, OnChanges } from '@angular/core';
import { Customer } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerDetailsComponent implements OnInit, OnChanges {

  @Input() customer: Customer = {} as Customer;
  @Output() customerChanged = new EventEmitter();
  logMessages: { title: string, value: Customer}[] = [];

  constructor() { }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['customer']) {
      const cust = changes['customer'].currentValue as Customer;
      this.addTax(cust);
      this.logMessages.push({ title: 'Customer changed', value: cust });
    }
  }

  addTax(cust: Customer) {
    cust.orderTotalWithTax = cust.orderTotal + (cust.orderTotal * .08);
  }

  change() {
    this.customerChanged.emit(this.customer);
  }

}
