import { Component, OnInit, OnDestroy } from '@angular/core';

import { ICustomer } from '../shared/interfaces';
import { DataService } from '../core/services/data.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html'
})
export class CommunicationComponent implements OnInit, OnDestroy {

  customers: ICustomer[] = [];
  customer: ICustomer;
  private subs = new SubSink();

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.subs.sink = this.dataService.getCustomers()
        .subscribe((custs: ICustomer[]) => this.customers = custs);
  }

  selected(cust: ICustomer) {
    this.customer = cust;
  }

  addCustomerPush() {
    this.dataService.addCustomer()
        .subscribe((custs: ICustomer[]) => this.customers = custs);
  }

  addCustomerClone() {
    this.dataService.addCustomerClone()
        .subscribe((custs: ICustomer[]) => this.customers = custs);
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

}
