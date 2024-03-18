import { Component, OnInit, OnDestroy } from '@angular/core';

import { Customer } from '../shared/interfaces';
import { DataService } from '../core/services/data.service';
import { Subscription } from 'rxjs';
import { CustomerDetailsComponent } from './customer-details.component';
import { CustomersListComponent } from './customers-list.component';

@Component({
  selector: 'app-communication',
  standalone: true,
  imports: [CustomerDetailsComponent, CustomersListComponent],
  template: `
    <h1>Services/Components Communication</h1>
    <br />
    <ul>
      <li>
        An "Event Bus" can provide a loosely coupled way to communicate between
        objects.
      </li>
      <li>
        Services can expose a Subject/BehaviorSubject/ReplaySubject that other
        services/components can subscribe to for changes.
      </li>
      <li>State management solutions can also be used.</li>
    </ul>
    <br />
    <button (click)="addCustomerPush()" class="btn btn-danger">
      Add Customer (push only)</button
    >&nbsp;&nbsp;
    <button (click)="addCustomerClone()" class="btn btn-primary">
      Add Customer (push a clone)
    </button>

    <br />
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

    <br />
    <br />
    <h4>Notes:</h4>
    <ul>
      <li>
        This example shows how services and subjects can be used to provide a
        communication mechanism for components. Click one of the buttons below
        and note how the customers count number in the upper-right corner
        changes (event bus is used). Note that when a customer is selected in
        the "Customers" presentation component the details display AND the
        customer details display below the navbar (BehaviorSubject is used).
      </li>
      <li>
        The "Add Customer (push only)" button will call a service to add a
        customer but the returned customers data will not display properly and
        will not trigger ngOnChanges in the presentation component since the
        customers array itself doesn't change.
      </li>
      <li>
        The "Add Customer (push a clone)" will call a service to add a customer
        but the service will return a clone of the customers data. The
        presentation component's ngOnChanges will fire and the data will display
        correctly as a result.
      </li>
    </ul>
  `,
})
export class CommunicationComponent implements OnInit, OnDestroy {
  customers: Customer[] = [];
  customer!: Customer;
  subs = new Subscription();
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.subs.add(
      this.dataService
        .getCustomers()
        .subscribe((custs: Customer[]) => (this.customers = custs))
    );
  }

  selected(cust: Customer) {
    this.customer = cust;
  }

  addCustomerPush() {
    this.dataService
      .addCustomer()
      .subscribe((custs: Customer[]) => (this.customers = custs));
  }

  addCustomerClone() {
    this.dataService
      .addCustomerClone()
      .subscribe((custs: Customer[]) => (this.customers = custs));
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
