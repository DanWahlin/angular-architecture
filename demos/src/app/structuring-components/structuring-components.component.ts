import { Component, OnInit } from '@angular/core';

import { Customer } from '../shared/interfaces';
import { DataService } from '../core/services/data.service';
import { CustomerDetailsComponent } from './customer-details.component';
import { CustomersListComponent } from './customers-list.component';

@Component({
  selector: 'app-structuring-components',
  standalone: true,
  imports: [CustomerDetailsComponent, CustomersListComponent],
  template: `
    <h1>Container and Presentation Components</h1>
    <ul>
      <li>
        Container components act as the "manager" for presentation components.
        Responsible for managing state.
      </li>
      <li>
        Presentation components are handed state and are responsible for
        presenting/rendering it.
      </li>
      <li>
        Recommending setting changeDetection to ChangeDetectionStrategy.OnPush
      </li>
    </ul>
    <br />

    <div class="row">
      <div class="col-md-6">
        <app-customers-list
          [customers]="customers"
          (customerSelected)="selected($event)"
        ></app-customers-list>
      </div>
      <div class="col-md-6">
        <app-customer-details [customer]="customer"></app-customer-details>
      </div>
    </div>
  `,
})
export class StructuringComponentsComponent implements OnInit {
  customers: Customer[] = [];
  customer!: Customer;
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService
      .getCustomers()
      .subscribe((custs: Customer[]) => (this.customers = custs));
  }

  selected(cust: Customer) {
    this.customer = cust;
  }
}
