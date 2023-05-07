import { Component, OnInit } from '@angular/core';

import { Customer } from '../shared/interfaces';
import { DataService } from '../core/services/data.service';

@Component({
  selector: 'app-structuring-components',
  templateUrl: './structuring-components.component.html'
})
export class StructuringComponentsComponent implements OnInit {

  customers: Customer[] = [];
  customer!: Customer;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getCustomers()
        .subscribe((custs: Customer[]) => this.customers = custs);
  }

  selected(cust: Customer) {
    this.customer = cust;
  }

}
