import { Action } from '@ngrx/store';

import { Order } from '../../core/model/order';
import { DataServiceError } from '../services';
import { DataAction, DataErrorAction } from './data.actions';

export const GET_ORDER = '[Order] GET_ORDER';
export const GET_ORDER_SUCCESS = '[Order] GET_ORDER_SUCCESS';
export const GET_ORDER_ERROR = '[Order] GET_ORDER_ERROR';

export const GET_ORDERS = '[Order] GET_ORDERS';
export const GET_ORDERS_SUCCESS = '[Order] GET_ORDERS_SUCCESS';
export const GET_ORDERS_ERROR = '[Order] GET_ORDERS_ERROR';

export abstract class OrderAction implements DataAction<Order> {
  readonly type: string;
  constructor(public readonly payload: Order) {}
}

export abstract class OrderErrorAction implements DataErrorAction<Order> {
  readonly type: string;
  constructor(public readonly payload: DataServiceError<Order>) {}
}

export class GetOrders implements Action {
  readonly type = GET_ORDERS;
  constructor(public readonly payload: number) {}
}

export class GetOrdersSuccess implements Action {
  readonly type = GET_ORDERS_SUCCESS;
  constructor(public readonly payload: Order[]) {}
}

export class GetOrdersError implements Action {
  readonly type = GET_ORDERS_ERROR;
  constructor(public readonly payload: any) {}
}

export class GetOrder implements Action {
  readonly type = GET_ORDER;
  constructor(public readonly payload: string) {}
}

export class GetOrderSuccess extends OrderAction {
  readonly type = GET_ORDER_SUCCESS;
}

export class GetOrderError extends OrderErrorAction {
  readonly type = GET_ORDER_ERROR;
}

export type AllOrderActions =
  | GetOrders
  | GetOrdersSuccess
  | GetOrdersError;
