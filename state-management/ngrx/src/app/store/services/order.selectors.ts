import { Injectable } from '@angular/core';
import { Store, createSelector, createFeatureSelector, select } from '@ngrx/store';

import { EntityState } from '../reducers';
import { OrderState } from '../reducers/order.reducer';

// selectors
const getEntityState = createFeatureSelector<EntityState>('entityCache');

const getOrdersState = createSelector(
  getEntityState,
  (state: EntityState) => state.orders
);

const getAllOrders = createSelector(
  getOrdersState,
  (state: OrderState) => state.orders
);

const getOrdersLoading = createSelector(
  getOrdersState,
  (state: OrderState) => state.loading
);

@Injectable()
export class OrderSelectors {
  constructor(private store: Store<EntityState>) {}
  orders$ = this.store.pipe(select(getAllOrders));
  orderState$ = this.store.pipe(select(getOrdersState));
  loading$ = this.store.pipe(select(getOrdersLoading));
}
