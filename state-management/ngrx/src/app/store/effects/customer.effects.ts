import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { concatMap, switchMap } from 'rxjs/operators';
import * as CustomerActions from '../actions';
import { CustomerDataService } from '../services';
import { EntityState } from '../reducers';

const toAction = CustomerActions.toAction();
type CustomerAction = CustomerActions.CustomerAction;
type GetCustomerAction = CustomerActions.GetCustomer;

@Injectable()
export class CustomerEffects {

  @Effect()
  getCustomers$: Observable<Action> = this.actions$
    .pipe(
      ofType(CustomerActions.GET_CUSTOMERS),
      switchMap(() =>
        toAction(
          this.customerDataService.getCustomers(),
          CustomerActions.GetCustomersSuccess,
          CustomerActions.GetCustomersError
        )
      )
    );

    @Effect()
    getCustomer$: Observable<Action> = this.actions$
      .pipe(
        ofType(CustomerActions.GET_CUSTOMER),
        switchMap((action: GetCustomerAction) =>
          toAction(
            this.customerDataService.getCustomer(action.payload),
            CustomerActions.GetCustomerSuccess,
            CustomerActions.GetCustomerError
          )
        )
      );

  @Effect()
  addCustomer$: Observable<Action> = this.actions$
    .pipe(
      ofType(CustomerActions.ADD_CUSTOMER),
      concatMap((action: CustomerAction) =>
        toAction(
          this.customerDataService.addCustomer(action.payload),
          CustomerActions.AddCustomerSuccess,
          CustomerActions.AddCustomerError
        )
      )
    );

  @Effect()
  deleteCustomer$: Observable<Action> = this.actions$
    .pipe(
      ofType(CustomerActions.DELETE_CUSTOMER),
      concatMap((action: CustomerAction) =>
        toAction(
          this.customerDataService.deleteCustomer(action.payload),
          CustomerActions.DeleteCustomerSuccess,
          CustomerActions.DeleteCustomerError
        )
      )
    );

  @Effect()
  updateCustomer$: Observable<Action> = this.actions$
    .pipe(
      ofType<CustomerActions.UpdateCustomer>(CustomerActions.UPDATE_CUSTOMER),
      concatMap((action: CustomerAction) =>
        toAction(
          this.customerDataService.updateCustomer(action.payload),
          CustomerActions.UpdateCustomerSuccess,
          CustomerActions.UpdateCustomerError
        )
      )
    );

  constructor(
    private actions$: Actions,
    private customerDataService: CustomerDataService
  ) {}

}
