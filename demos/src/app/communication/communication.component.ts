import { Component, OnInit } from '@angular/core';

import { ICustomer } from '../shared/interfaces';
import { DataService } from '../core/services/data.service';

@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html'
})
export class CommunicationComponent implements OnInit {

  customers: ICustomer[] = [];
  customer: ICustomer;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getCustomers()
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

}
