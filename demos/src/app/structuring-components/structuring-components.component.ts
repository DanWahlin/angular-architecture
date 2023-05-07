import { Component, OnInit } from '@angular/core';

import { Customer } from '../shared/interfaces';
import { DataService } from '../core/services/data.service';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomersListComponent } from './customers-list/customers-list.component';

@Component({
    selector: 'app-structuring-components',
    templateUrl: './structuring-components.component.html',
    standalone: true,
    imports: [CustomersListComponent, CustomerDetailsComponent]
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
