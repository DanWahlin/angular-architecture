import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { concatMap, switchMap } from 'rxjs/operators';
import * as CustomerActions from '../actions';
import { CustomerDataService } from '../services';

const toAction = CustomerActions.toAction();
type CustomerAction = CustomerActions.CustomerAction;
type GetCustomerAction = CustomerActions.GetCustomer;

@Injectable()
export class CustomerEffects {

  
  getCustomers$: Observable<Action> = createEffect(() => this.actions$
    .pipe(
      ofType(CustomerActions.GET_CUSTOMERS),
      switchMap(() =>
        toAction(
          this.customerDataService.getCustomers(),
          CustomerActions.GetCustomersSuccess,
          CustomerActions.GetCustomersError
        )
      )
    ));

    
    getCustomer$: Observable<Action> = createEffect(() => this.actions$
      .pipe(
        ofType(CustomerActions.GET_CUSTOMER),
        switchMap((action: GetCustomerAction) =>
          toAction(
            this.customerDataService.getCustomer(action.payload),
            CustomerActions.GetCustomerSuccess,
            CustomerActions.GetCustomerError
          )
        )
      ));

  
  addCustomer$: Observable<Action> = createEffect(() => this.actions$
    .pipe(
      ofType(CustomerActions.ADD_CUSTOMER),
      concatMap((action: CustomerAction) =>
        toAction(
          this.customerDataService.addCustomer(action.payload),
          CustomerActions.AddCustomerSuccess,
          CustomerActions.AddCustomerError
        )
      )
    ));

  
  deleteCustomer$: Observable<Action> = createEffect(() => this.actions$
    .pipe(
      ofType(CustomerActions.DELETE_CUSTOMER),
      concatMap((action: CustomerAction) =>
        toAction(
          this.customerDataService.deleteCustomer(action.payload),
          CustomerActions.DeleteCustomerSuccess,
          CustomerActions.DeleteCustomerError
        )
      )
    ));

  
  updateCustomer$: Observable<Action> = createEffect(() => this.actions$
    .pipe(
      ofType<CustomerActions.UpdateCustomer>(CustomerActions.UPDATE_CUSTOMER),
      concatMap((action: CustomerAction) =>
        toAction(
          this.customerDataService.updateCustomer(action.payload),
          CustomerActions.UpdateCustomerSuccess,
          CustomerActions.UpdateCustomerError
        )
      )
    ));

  constructor(
    private actions$: Actions,
    private customerDataService: CustomerDataService
  ) {}

}
