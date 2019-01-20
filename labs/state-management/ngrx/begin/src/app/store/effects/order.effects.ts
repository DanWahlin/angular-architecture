import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import * as OrderActions from '../actions';
import { OrderDataService } from '../services';

const toAction = OrderActions.toAction();
type GetOrdersAction = OrderActions.GetOrders;

@Injectable()
export class OrderEffects {

  @Effect()
  getOrders$: Observable<Action> = this.actions$
    .pipe(
      ofType(OrderActions.GET_ORDERS),
      switchMap((action: GetOrdersAction) =>
        toAction(
          this.orderDataService.getOrders(action.payload),
          OrderActions.GetOrdersSuccess,
          OrderActions.GetOrdersError
        )
      )
    );

  constructor(
    private actions$: Actions,
    private orderDataService: OrderDataService
  ) {}
}
