import { Order } from '../../core/model/order';
import * as OrderActions from '../actions';

export interface OrderState {
  orders: Order[];
  loading: boolean;
  error: boolean;
}

export const initialState: OrderState = {
  orders: [],
  loading: false,
  error: false
};

export function reducer(state = initialState, action: OrderActions.AllOrderActions): OrderState {
  switch (action.type) {

    case OrderActions.GET_ORDERS: {
      return { ...state, loading: true };
    }

    case OrderActions.GET_ORDERS_ERROR: {
      return {
        ...state,
        loading: false
      };
    }

    case OrderActions.GET_ORDERS_SUCCESS: {
      return {
        ...state,
        orders: action.payload,
        loading: false
      };
    }

    //   case OrderActions.ADD_ORDER: {
    //     return { ...state, loading: true };
    //   }

    //   case OrderActions.ADD_ORDER_SUCCESS: {
    //     return {
    //       ...state,
    //       loading: false,
    //       orders: [...state.orders, { ...action.payload }]
    //     };
    //   }

    //   case OrderActions.ADD_ORDER_ERROR: {
    //     return { ...state, loading: false };
    //   }

    //   case OrderActions.DELETE_ORDER: {
    //     return {
    //       ...state,
    //       loading: true,
    //       orders: state.orders.filter(h => h !== action.payload)
    //     };
    //   }

    //   case OrderActions.DELETE_ORDER_SUCCESS: {
    //     const result = { ...state, loading: false };
    //     return result;
    //   }

    //   case OrderActions.DELETE_ORDER_ERROR: {
    //     return {
    //       ...state,
    //       orders: [...state.orders, action.payload.requestData],
    //       loading: false
    //     };
    //   }

    //   case OrderActions.UPDATE_ORDER: {
    //     return {
    //       ...state,
    //       orders: state.orders.map(h => {
    //         if (h.id === action.payload.id) {
    //           state.loading = true;
    //         }
    //         return h;
    //       })
    //     };
    //   }

    //   case OrderActions.UPDATE_ORDER_SUCCESS: {
    //     return modifyOrderState(state, action.payload);
    //   }

    //   case OrderActions.UPDATE_ORDER_ERROR: {
    //     return {
    //       ...state,
    //       loading: false,
    //       orders: state.orders.map(h => {
    //         if (h.id === action.payload.requestData.id) {
    //           // Huh? No idea what the error is!
    //           state.error = true;
    //         }
    //         return h;
    //       })
    //     };
    //   }
    // }
    // return state;

  }

  // function modifyOrderState(orderState: OrderState, orderChanges: Partial<Order>): OrderState {
  //   return {
  //     ...orderState,
  //     loading: false,
  //     orders: orderState.orders.map(h => {
  //       if (h.id === orderChanges.id) {
  //         return { ...h, ...orderChanges };
  //       } else {
  //         return h;
  //       }
  //     })
  //   };
  // }
}
