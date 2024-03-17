import { Component, computed, effect, signal } from '@angular/core';
import { Customer } from '../shared/interfaces';
import { DataService } from '../core/services/data.service';
import { delay } from 'rxjs';

@Component({
  selector: 'app-signals',
  standalone: true,
  templateUrl: './signals.component.html',
  styleUrls: ['./signals.component.css']
})
export class SignalsComponent {
  customers = signal<Customer[]>([]);
  isLoading = signal(true);
  searchQuery = signal('');
  selectedCustomer = signal<Customer | null>(null);

  /** Computed value for the filtered customers.
   * Updates when customer list or search query change. */
  filteredCustomers = computed(() =>
    this.customers().filter(customer =>
      customer.name.toLowerCase().includes(this.searchQuery().toLowerCase())
    )
  );

  constructor(private dataService: DataService) {
    // Note: an effect tracks its dependencies and re-runs when they change.

    effect(() => {
      // The selectedCustomer is the dependency here so only changes to it trigger the effect.
      const name = this.selectedCustomer()?.name ?? 'none';
      console.log(`Selected customer name: ${name}`);
    });

    effect(() => {
      const query = this.searchQuery()
      console.log(`Search query: ${query}`);
    });
  }

  ngOnInit() {
    this.dataService.getCustomers().pipe(
        delay(1000) // simulate delay for our loading signal
      ).subscribe(customers => {
        this.customers.set(customers);
        this.isLoading.set(false);
      });
  }

  editCustomer(customer: Customer) {
    this.selectedCustomer.set(customer);
  }

  /** Is editing if the given customer is the "selected" customer. */
  isEditingCustomer(customer: Customer) {
    return this.selectedCustomer()?.id === customer.id;
  }

  onCustomerNameChange(event: Event) {
    const name = (event.target as HTMLInputElement).value;
    const customer = this.selectedCustomer();
    customer!.name = name;
    this.selectedCustomer.set(customer);
  }

  onSearchQuery(event: Event) {
    const newQuery = (event.target as HTMLInputElement).value;
    this.searchQuery.set(newQuery);
  }

  save() {
    const customer = this.selectedCustomer();
    if (customer) {
      this.customers.update(customers => {
        const index = customers.findIndex(c => c.id === customer.id);
        customers[index] = customer;
        return customers;
      });
      this.resetEditing();
    }
  }

  cancel() {
    this.resetEditing();
  }

  private resetEditing() {
    this.selectedCustomer.set(null);
  }

  // #region Immutable update alternatives

  onCustomerNameChange_immutable(event: Event) {
    const name = (event.target as HTMLInputElement).value;

    // Immutable update of the selected customer
    this.selectedCustomer.update(customer => ({ ...customer!, name }));
  }

  save_immutable() {
    const customer = this.selectedCustomer();
    if (customer) {
      // Immutable update of the customers array
      this.customers.update(customers => customers.map(c => c.id === customer.id ? customer : c));
      this.resetEditing();
    }
  }
  // #endregion Immutable alternatives
}
