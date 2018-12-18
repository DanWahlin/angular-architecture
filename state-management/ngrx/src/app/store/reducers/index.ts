import { ActionReducerMap } from '@ngrx/store';

import * as fromActions from '../actions';
import * as fromCustomers from './customer.reducer';
import * as fromOrders from './order.reducer';

export type Action = fromActions.CustomerAction;

export interface EntityState {
  customers: fromCustomers.CustomerState;
  customer: fromCustomers.CustomerState;
  orders: fromOrders.OrderState;
}

export const reducers: ActionReducerMap<EntityState> = {
  customers: fromCustomers.reducer,
  customer: fromCustomers.reducer,
  orders: fromOrders.reducer
};
