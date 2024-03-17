import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Customer } from '../model';
import { CustomerOrdersDataService } from '../services';

/**
 * Master/Detail following the Container/Presenter pattern
 * Master: customer list
 * Detail: detail about the selected customer
 */
@Component({
  selector: 'app-simple-container',
  styleUrls: ['../view-model.css'],
  template: `
    <button (click)="addCustomer()" class="btn btn-primary button-row">
      Add Customer
    </button>

    @if(customers$ | async; as customers){
    <div class="row">
      <!-- Customer List -->
      <div class="col-md-2">
        <app-simple-customer-list
          [customers]="customers"
          (customerSelected)="selected($event)"
        ></app-simple-customer-list>
      </div>

      <!-- Customer Details -->
      <div class="col-md-5">
        <app-simple-customer-details
          [customer]="selectedCustomer"
        ></app-simple-customer-details>
      </div>
    </div>
    }
  `,
})
export class SimpleContainerComponent {
  customers$: Observable<Customer[]> = of([]);
  selectedCustomer: Customer | null = null;

  constructor(private dataService: CustomerOrdersDataService) {
    this.customers$ = dataService.customers$;
  }

  selected(customer: Customer) {
    this.selectedCustomer = customer; // <-- MODEL ENTITY
  }

  addCustomer() {
    this.dataService.addCustomer();
  }
}
