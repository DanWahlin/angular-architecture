import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
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
    .ofType(CustomerActions.GET_CUSTOMERS)
    .pipe(
      switchMap(() =>
        toAction(
          this.CustomerDataService.getCustomers(),
          CustomerActions.GetCustomersSuccess,
          CustomerActions.GetCustomersError
        )
      )
    );

    @Effect()
    getCustomer$: Observable<Action> = this.actions$
      .ofType(CustomerActions.GET_CUSTOMER)
      .pipe(
        switchMap((action: GetCustomerAction) =>
          toAction(
            this.CustomerDataService.getCustomer(action.payload),
            CustomerActions.GetCustomerSuccess,
            CustomerActions.GetCustomerError
          )
        )
      );

  @Effect()
  addCustomer$: Observable<Action> = this.actions$
    .ofType(CustomerActions.ADD_CUSTOMER)
    .pipe(
      concatMap((action: CustomerAction) =>
        toAction(
          this.CustomerDataService.addCustomer(action.payload),
          CustomerActions.AddCustomerSuccess,
          CustomerActions.AddCustomerError
        )
      )
    );

  @Effect()
  deleteCustomer$: Observable<Action> = this.actions$
    .ofType(CustomerActions.DELETE_CUSTOMER)
    .pipe(
      concatMap((action: CustomerAction) =>
        toAction(
          this.CustomerDataService.deleteCustomer(action.payload),
          CustomerActions.DeleteCustomerSuccess,
          CustomerActions.DeleteCustomerError
        )
      )
    );

  @Effect()
  updateCustomer$: Observable<Action> = this.actions$
    .ofType<CustomerActions.UpdateCustomer>(CustomerActions.UPDATE_CUSTOMER)
    .pipe(
      concatMap((action: CustomerAction) =>
        toAction(
          this.CustomerDataService.updateCustomer(action.payload),
          CustomerActions.UpdateCustomerSuccess,
          CustomerActions.UpdateCustomerError
        )
      )
    );

  constructor(
    private store: Store<EntityState>,
    private actions$: Actions,
    private CustomerDataService: CustomerDataService
  ) {}
}
