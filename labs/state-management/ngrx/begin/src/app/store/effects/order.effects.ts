import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import * as OrderActions from '../actions';
import { OrderDataService } from '../services';

const toAction = OrderActions.toAction();
type GetOrdersAction = OrderActions.GetOrders;

@Injectable()
export class OrderEffects {

  
  getOrders$: Observable<Action> = createEffect(() => this.actions$
    .pipe(
      ofType(OrderActions.GET_ORDERS),
      switchMap((action: GetOrdersAction) =>
        toAction(
          this.orderDataService.getOrders(action.payload),
          OrderActions.GetOrdersSuccess,
          OrderActions.GetOrdersError
        )
      )
    ));

  constructor(
    private actions$: Actions,
    private orderDataService: OrderDataService
  ) {}
}
