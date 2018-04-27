import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy, SimpleChanges } from '@angular/core';
import { ICustomer } from '../../shared/interfaces';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: [ './customers-list.component.css' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomersListComponent implements OnInit {
  @Input() customers: ICustomer[];
  @Output() customerSelected = new EventEmitter<ICustomer>();
  logMessages: string[] = [];

  constructor() { }

  ngOnInit() {

  }

  ngOnChanges(simpleChanges: SimpleChanges) {
    if (simpleChanges['customers']) {
      this.logMessages.push('Customers changed');
    }
  }

  selectCustomer(cust: ICustomer) {
    this.customerSelected.emit(cust);
  }

}
