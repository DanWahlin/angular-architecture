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
    customers$: Observable<Customer[]>;
    loading$: Observable<boolean>;

    constructor(
        private store: Store<EntityState>,
        private customerSelectors: CustomerSelectors) {

    }

    ngOnInit() {
        this.customers$ = this.customerSelectors.customers$;
        this.loading$ = this.customerSelectors.loading$;
        this.getCustomers();
    }

    getCustomers() {
        this.store.dispatch(new CustomerAction.GetCustomers());
    }

}
