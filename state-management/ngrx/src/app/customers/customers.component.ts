import { Component, OnInit } from '@angular/core';

import { Customer } from '../core/model/customer';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { EntityState, CustomerSelectors } from '../store';
import * as CustomerAction from '../store/actions';

@Component({
    selector: 'app-customers',
    templateUrl: './customers.component.html'
})
export class CustomersComponent implements OnInit {
    title = 'Customers';
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
