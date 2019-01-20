import { ActionReducerMap } from '@ngrx/store';

import * as actions from '../actions';
import * as customersReducers from './customer.reducer';
import * as ordersReducers from './order.reducer';

export type Action = actions.CustomerAction;

export interface EntityState {
  customers: customersReducers.CustomerState;
  customer: customersReducers.CustomerState;
  orders: ordersReducers.OrderState;
}

export const reducers: ActionReducerMap<EntityState> = {
  customers: customersReducers.reducer,
  customer: customersReducers.reducer,
  orders: ordersReducers.reducer
};
