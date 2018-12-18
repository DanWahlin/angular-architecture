import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { concatMap, switchMap } from 'rxjs/operators';
import * as OrderActions from '../actions';
import { EntityState } from '../reducers';
import { OrderDataService } from '../services';

const toAction = OrderActions.toAction();
type OrderAction = OrderActions.OrderAction;
type GetOrdersAction = OrderActions.GetOrders;

@Injectable()
export class OrderEffects {

  @Effect()
  getOrders$: Observable<Action> = this.actions$
    .ofType(OrderActions.GET_ORDERS)
    .pipe(
      switchMap((action: GetOrdersAction) =>
        toAction(
          this.orderDataService.getOrders(action.payload),
          OrderActions.GetOrdersSuccess,
          OrderActions.GetOrdersError
        )
      )
    );

  // @Effect()
  // addOrder$: Observable<Action> = this.actions$
  //   .ofType(OrderActions.ADD_ORDER)
  //   .pipe(
  //     concatMap((action: OrderAction) =>
  //       toAction(
  //         this.orderDataService.addOrder(action.payload),
  //         OrderActions.AddOrderSuccess,
  //         OrderActions.AddOrderError
  //       )
  //     )
  //   );

  // @Effect()
  // deleteOrder$: Observable<Action> = this.actions$
  //   .ofType(OrderActions.DELETE_ORDER)
  //   .pipe(
  //     concatMap((action: OrderAction) =>
  //       toAction(
  //         this.orderDataService.deleteOrder(action.payload),
  //         OrderActions.DeleteOrderSuccess,
  //         OrderActions.DeleteOrderError
  //       )
  //     )
  //   );

  // @Effect()
  // updateOrder$: Observable<Action> = this.actions$
  //   .ofType<OrderActions.UpdateOrder>(OrderActions.UPDATE_ORDER)
  //   .pipe(
  //     concatMap((action: OrderAction) =>
  //       toAction(
  //         this.orderDataService.updateOrder(action.payload),
  //         OrderActions.UpdateOrderSuccess,
  //         OrderActions.UpdateOrderError
  //       )
  //     )
  //   );

  constructor(
    private actions$: Actions,
    private orderDataService: OrderDataService
  ) {}
}
