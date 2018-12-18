import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer, MasterDetailCommands } from '../../core';
import { CustomerSelectors, EntityState } from '../../store';
import * as CustomerAction from '../../store/actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomersComponent implements MasterDetailCommands<Customer>, OnInit {
  selected: Customer;
  commands = this;

  customers$: Observable<Customer[]>;
  loading$: Observable<boolean>;

  constructor(
    private store: Store<EntityState>,
    private customerSelectors: CustomerSelectors) {

      this.customers$ = this.customerSelectors.customers$;
      this.loading$ = this.customerSelectors.loading$;
      
    }

  ngOnInit() {
    this.getCustomers();
  }

  close() {
    this.selected = null;
  }

  enableAddMode() {
    this.selected = <any>{};
  }

  getCustomers() {
    this.close();
    this.store.dispatch(new CustomerAction.GetCustomers());
  }

  add(customer: Customer) {
    this.store.dispatch(new CustomerAction.AddCustomer(customer));
  }

  delete(customer: Customer) {
    this.close();
    this.store.dispatch(new CustomerAction.DeleteCustomer(customer));
  }

  update(customer: Customer) {
    this.store.dispatch(new CustomerAction.UpdateCustomer(customer));
  }

  select(customer: Customer) {
    this.selected = customer;
  }

  unselect() {
    this.selected = null;
  }
}
