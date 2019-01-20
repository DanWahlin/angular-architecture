import { Action } from '@ngrx/store';

import { Customer } from '../../core/model/customer';
import { DataServiceError } from '../services';
import { DataAction, DataErrorAction } from './data.actions';

export const ADD_CUSTOMER = '[Customer] ADD_CUSTOMER';
export const ADD_CUSTOMER_ERROR = '[Customer] ADD_CUSTOMER_ERROR';
export const ADD_CUSTOMER_SUCCESS = '[Customer] ADD_CUSTOMER_SUCCESS';

export const GET_CUSTOMER = '[Customer] GET_CUSTOMER';
export const GET_CUSTOMER_SUCCESS = '[Customer] GET_CUSTOMER_SUCCESS';
export const GET_CUSTOMER_ERROR = '[Customer] GET_CUSTOMER_ERROR';

export const UPDATE_CUSTOMER = '[Customer] UPDATE_CUSTOMER';
export const UPDATE_CUSTOMER_SUCCESS = '[Customer] UPDATE_CUSTOMER_SUCCESS';
export const UPDATE_CUSTOMER_ERROR = '[Customer] UPDATE_CUSTOMER_ERROR';

export const GET_CUSTOMERS = '[Customer] GET_CUSTOMERES';
export const GET_CUSTOMERS_SUCCESS = '[Customer] GET_CUSTOMERES_SUCCESS';
export const GET_CUSTOMERS_ERROR = '[Customer] GET_CUSTOMERES_ERROR';

export const DELETE_CUSTOMER = '[Customer] DELETE_CUSTOMER';
export const DELETE_CUSTOMER_SUCCESS = '[Customer] DELETE_CUSTOMER_SUCCESS';
export const DELETE_CUSTOMER_ERROR = '[Customer] DELETE_CUSTOMER_ERROR';

export const SET_CUSTOMER_LOADING = '[Customer] SET_CUSTOMER_LOADING';

export abstract class CustomerAction implements DataAction<Customer> {
  readonly type: string;
  constructor(public readonly payload: Customer) {}
}

export abstract class CustomerErrorAction implements DataErrorAction<Customer> {
  readonly type: string;
  constructor(public readonly payload: DataServiceError<Customer>) {}
}

export class GetCustomers implements Action {
  readonly type = GET_CUSTOMERS;
}

// Add GetCustomersSuccess action here





export class GetCustomersError implements Action {
  readonly type = GET_CUSTOMERS_ERROR;
  constructor(public readonly payload: any) {}
}

export class GetCustomer implements Action {
  readonly type = GET_CUSTOMER;
  constructor(public readonly payload: number) {}
}

export class GetCustomerSuccess implements Action {
  readonly type = GET_CUSTOMER_SUCCESS;
  constructor(public readonly payload: Customer) {}
}

export class GetCustomerError extends CustomerErrorAction {
  readonly type = GET_CUSTOMER_ERROR;
}

export class AddCustomer extends CustomerAction {
  readonly type = ADD_CUSTOMER;
}

export class AddCustomerSuccess extends CustomerAction {
  readonly type = ADD_CUSTOMER_SUCCESS;
}

export class AddCustomerError extends CustomerErrorAction {
  readonly type = ADD_CUSTOMER_ERROR;
}

export class UpdateCustomer extends CustomerAction {
  readonly type = UPDATE_CUSTOMER;
}

export class UpdateCustomerSuccess extends CustomerAction {
  readonly type = UPDATE_CUSTOMER_SUCCESS;
}

export class UpdateCustomerError extends CustomerErrorAction {
  readonly type = UPDATE_CUSTOMER_ERROR;
}

export class DeleteCustomer extends CustomerAction {
  readonly type = DELETE_CUSTOMER;
}

export class DeleteCustomerSuccess extends CustomerAction {
  readonly type = DELETE_CUSTOMER_SUCCESS;
}

export class DeleteCustomerError extends CustomerErrorAction {
  readonly type = DELETE_CUSTOMER_ERROR;
}

export class SetCustomerLoading {
  readonly type = SET_CUSTOMER_LOADING;
  constructor(public payload = true) {}
}

export type AllCustomerActions =
  | GetCustomer
  | GetCustomerSuccess
  | GetCustomerError
  | UpdateCustomer
  | UpdateCustomerSuccess
  | UpdateCustomerError
  | GetCustomers
  | GetCustomersSuccess
  | GetCustomersError
  | AddCustomer
  | AddCustomerSuccess
  | AddCustomerError
  | DeleteCustomer
  | DeleteCustomerSuccess
  | DeleteCustomerError
  | SetCustomerLoading;
