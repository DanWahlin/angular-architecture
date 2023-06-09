import { Component, computed, inject, signal } from '@angular/core';
import { Customer } from '../shared/interfaces';
import { DataService } from '../core/services/data.service';
import { delay } from 'rxjs';

@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html',
  styleUrls: ['./signals.component.css']
})
export class SignalsComponent {
  customers: Customer[] = [];
  editingCustomer = signal<Customer | null>(null);

  // Define a signal for the loading state
  loading = signal(true);

  // Define a signal for the search query
  searchQuerySignal = signal('');

  // Define a computed value for the filtered customers
  filteredCustomers = computed(() => {
    return this.customers.filter((customer) =>
      customer.name.toLowerCase().includes(this.searchQuerySignal().toLowerCase())
    );
  });

  dataService = inject(DataService);

  ngOnInit() {
    this.dataService.getCustomers().pipe(
        delay(2000) // simulate delay for our loading signal
      ).subscribe(custs => {
      this.loading.set(false);
      this.customers = custs;
    });
  }

  editCustomer(customer: Customer) {
    this.editingCustomer.set(customer);
  }

  isEditingCustomer(customer: Customer) {
    return this.editingCustomer() === customer;
  }

  isLoading() {
    return this.loading();
  }
}
