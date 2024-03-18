import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { BehaviorSubject, combineLatest, map, Observable } from 'rxjs';

import { Customer } from '../model';
import { CustomerDetailsComponent } from './customer-details.component';
import { CustomerListComponent } from './customer-list.component';
import { CustomerOrdersDataService } from '../services';

/** Master/Detail following the Container/Presenter pattern.
 * Master: customer list of Customer
 * Detail: detail about a selected Customer ViewModel
 */
@Component({
  standalone: true,
  selector: 'app-customer-container',
  imports: [AsyncPipe, CustomerDetailsComponent, CustomerListComponent],
  styleUrls: ['./customer.css'],
  template: `
    <button (click)="addCustomer()" class="btn btn-primary button-row">
      Add Customer
    </button>

    <!-- Binds to "showDeleted" as a checkbox and toggles it when changed -->
    <div (click)="toggleShowDeleted()">
      <input type="checkbox" [checked]="showDeleted" /> Show Deleted
    </div>

    @if(customers$ | async; as customers) {
    <div class="row">
      <!-- Customer List -->
      <div class="col-md-3">
        <app-customer-list
          [customers]="customers"
          (selected)="selected($event)"
        />
      </div>

      <!-- Customer Detail -->
      @if(selectedVm) {
      <div class="col-md-5">
        <app-customer-details
          [vm]="selectedVm"
          (cancel)="cancel()"
          (save)="save($event)"
        />
      </div>
      }
    </div>
    }
  `,
})
export class CustomerContainerComponent {
  /** List of customers to display. The Customer model objects, not ViewModels! */
  customers$: Observable<Customer[]>;
  /** ViewModel of selected customer, displayed in Detail component */
  selectedVm: Partial<Customer> | null = null;
  /** Whether to show the deleted customers */
  showDeleted = false;
  /** A change triggers refresh of customers$ **/
  showDeleted$ = new BehaviorSubject(this.showDeleted);

  constructor(private dataService: CustomerOrdersDataService) {
    // Updates when any customer changes or when showDeleted flag changes
    this.customers$ = combineLatest([
      this.dataService.customers$,
      this.showDeleted$,
    ]).pipe(
      // Filters customers to include or exclude deleted customers based on showDeleted flag.
      map(([customers, showDeleted]) =>
        customers.filter((customer) => showDeleted || !customer.isDeleted)
      )
    );
  }

  addCustomer() {
    this.selectedVm = Customer.toCustomer();
  }

  cancel() {
    this.selectedVm = null;
  }

  save(vm: Partial<Customer>) {
    this.selectedVm = null;
    this.dataService.saveCustomer(vm).subscribe();
  }

  selected(customer: Customer) {
    this.selectedVm = { ...customer };
  }

  // The toggleShowDeleted method should (a) toggle the flag and (b) refresh the customers$ observable.
  toggleShowDeleted() {
    this.showDeleted$.next((this.showDeleted = !this.showDeleted));
  }
}
