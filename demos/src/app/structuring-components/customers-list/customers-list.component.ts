import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy, SimpleChanges } from '@angular/core';
import { Customer } from '../../shared/interfaces';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: [ './customers-list.component.css' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomersListComponent implements OnInit {
  @Input() customers: Customer[] = [];
  @Output() customerSelected = new EventEmitter<Customer>();
  logMessages: string[] = [];

  constructor() { }

  ngOnInit() {

  }

  ngOnChanges(simpleChanges: SimpleChanges) {
    if (simpleChanges['customers']) {
      this.logMessages.push('Customers changed');
    }
  }

  selectCustomer(cust: Customer) {
    this.customerSelected.emit(cust);
  }

}
