import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { Customer } from '../model';
import { CustomerOrdersDataService } from '../services';

/**
 * Master/Detail following the Container/Presenter pattern.
 * Master: customer list
 * Detail: detail about the selected customer ... as a ViewModel
 */
@Component({
  selector: 'app-iso-container',
  styleUrls: ['../view-model.css'],
  template: `

  <button (click)="addCustomer()" class="btn btn-primary button-row">Add Customer</button>

  <div *ngIf="customers$ | async as customers" class="row" >

    <!-- Customer List -->
    <div class="col-md-2">
      <app-simple-customer-list [customers]="customers" (customerSelected)="selected($event)"></app-simple-customer-list>
    </div>

    <!-- Customer Details -->
    <div class="col-md-5">
      <app-iso-customer-details [viewModel]="selectedCustomer" (cancel)="cancel()" (save)="save($event)"></app-iso-customer-details>
    </div>

  </div>

  `,
})
export class IsoContainerComponent {

  customers$: Observable<Customer[]>;
  selectedCustomer: Partial<Customer>;

  constructor(private dataService: CustomerOrdersDataService) {
    this.customers$ = dataService.customers$;
  }

  selected(customer: Customer) {
    const viewModel = { ...customer }; // <-- VIEW MODEL. A clone is a ViewModel
    this.selectedCustomer = viewModel;
  }

  addCustomer() {
    this.selectedCustomer = { // <-- VIEW MODEL. Any object can be a ViewModel
      photo: 'assets/missing-person.png'
    };
  }

  cancel() {
    this.selectedCustomer = null;
  }

  save(viewModel: Customer) {
    this.selectedCustomer = null;
    viewModel.id == null
      ? this.dataService.addCustomer(viewModel)
      : this.dataService.updateCustomer(viewModel);
  }
}
