import { Component, OnInit } from '@angular/core';

import { ICustomer } from '../shared/interfaces';
import { DataService } from '../core/services/data.service';

@Component({
  selector: 'app-structuring-components',
  templateUrl: './structuring-components.component.html'
})
export class StructuringComponentsComponent implements OnInit {

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

}
