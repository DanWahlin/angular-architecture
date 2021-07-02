import { Customer } from '../../core/model/customer';
import * as CustomerActions from '../actions';

export interface CustomerState {
  customers: Customer[];
  customer: Customer;
  loading: boolean;
  error: boolean;
}

export const initialState: CustomerState = {
  customers: [],
  customer: null,
  loading: false,
  error: false
};

export function reducer(
  state = initialState,
  action: CustomerActions.AllCustomerActions
): CustomerState {

  switch (action.type) {
    case CustomerActions.ADD_CUSTOMER: {
      return { ...state, loading: true };
    }

    case CustomerActions.ADD_CUSTOMER_SUCCESS: {
      return {
        ...state,
        loading: false,
        customers: [...state.customers, { ...action.payload }]
      };
    }

    case CustomerActions.ADD_CUSTOMER_ERROR: {
      return { ...state, loading: false };
    }

    case CustomerActions.GET_CUSTOMERS: {
      return { ...state, loading: true };
    }

    case CustomerActions.GET_CUSTOMERS_ERROR: {
      return {
        ...state,
        loading: false
      };
    }

    case CustomerActions.GET_CUSTOMERS_SUCCESS: {
      return {
        ...state,
        customers: action.payload,
        loading: false
      };
    }

    case CustomerActions.GET_CUSTOMER: {
      return { ...state, loading: true };
    }

    case CustomerActions.GET_CUSTOMER_ERROR: {
      return {
        ...state,
        loading: false
      };
    }

    case CustomerActions.GET_CUSTOMER_SUCCESS: {
      return {
        ...state,
        customer: action.payload,
        loading: false
      };
    }

    case CustomerActions.DELETE_CUSTOMER: {
      return {
        ...state,
        loading: true,
        customers: state.customers.filter(h => h !== action.payload)
      };
    }

    case CustomerActions.DELETE_CUSTOMER_SUCCESS: {
      const result = { ...state, loading: false };
      return result;
    }

    case CustomerActions.DELETE_CUSTOMER_ERROR: {
      return {
        ...state,
        customers: [...state.customers, action.payload.requestData],
        loading: false
      };
    }

    case CustomerActions.UPDATE_CUSTOMER: {
      return {
        ...state,
        loading: isLoading(state.customers, action)
      }
    }

    case CustomerActions.UPDATE_CUSTOMER_SUCCESS: {
      return modifyCustomerState(state, action.payload);
    }

    case CustomerActions.UPDATE_CUSTOMER_ERROR: {
      return {
        ...state,
        loading: false
      };
    }

    case CustomerActions.SET_CUSTOMER_LOADING: {
      return {
        ...state,
        loading: action.payload == null ? true : action.payload
      };
    }
  }
  return state;
}

function isLoading(customers: Customer[], action: any) {
  for (let customer of customers) {
    if (customer.id === action.payload.id) {
      return true;
    }
  }
  return false;
}

function modifyCustomerState(customerState: CustomerState, customerChanges: Partial<Customer>): CustomerState {

  return {
    ...customerState,
    loading: false,
    customers: customerState.customers.map(h => {
      if (h.id === customerChanges.id) {
        return { ...h, ...customerChanges };
      } else {
        return h;
      }
    })
  };

}
