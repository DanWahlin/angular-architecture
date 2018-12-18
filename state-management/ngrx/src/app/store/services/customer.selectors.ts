import { Injectable } from '@angular/core';
import { Store, createSelector, createFeatureSelector } from '@ngrx/store';

import { EntityState } from '../reducers';
import { CustomerState } from '../reducers/customer.reducer';

const getEntityState = createFeatureSelector<EntityState>('entityCache');

const getCustomerState = createSelector(
  getEntityState,
  (state: EntityState) => state.customers
);

const getAllCustomers = createSelector(
  getCustomerState,
  (state: CustomerState) => state.customers
);

const getCustomer = createSelector(
  getCustomerState,
  (state: CustomerState) => state.customer
);

const getCustomersLoading = createSelector(
  getCustomerState,
  (state: CustomerState) => state.loading
);

@Injectable()
export class CustomerSelectors {

  constructor(private store: Store<EntityState>) {}

  customers$ = this.store.select(getAllCustomers);
  customer$ = this.store.select(getCustomer);
  customerState$ = this.store.select(getCustomerState);
  loading$ = this.store.select(getCustomersLoading);

}
