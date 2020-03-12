import { Observable } from 'rxjs';
import { Customer } from '../model';
import { calcAge, calcFullName } from '../../shared';

/** A summary of a Customer's order, only what the "Customer Details" view should show. */
export interface OrderSummaryVm {
  id: number;
  memo: string;
}

/** 
 * Customer ViewModel represents the Model to suit the Presenters.
 * Also encapsulates or delegates presenter logic.
 * formerly handled by pipes and Presenter emitters.
 */
export class CustomerVm {

  // Only include properties that the views need
  id: number;
  first: string;
  last: string;
  city: string;
  birthDate?: Date;
  photo?: string;

  /** Continually updating observable of this customer's order summaries */
  orderSummaries$?: Observable<OrderSummaryVm[]>;

  static create(
    customer: Partial<Customer> = {},
    orderSummaries$?: Observable<OrderSummaryVm[]>
  ): CustomerVm {
    const vm = Object.assign(new CustomerVm(), toCustomer(customer));
    vm.orderSummaries$ = orderSummaries$;
    return vm;
  }

  /** Clone ViewModel-self with properties and methods */
  clone() {
    return Object.assign(new CustomerVm(), this);
  }

  // Add methods and properties to keep code and pipes out of the HTML.
  get age() { return calcAge(this.birthDate); }
  get name() { return calcFullName(this); }
  get saveDisabled() { return !(this.first || '').trim() || !(this.last || '').trim(); }

  /** Return a Customer-like object with just the properties that can be saved. */
  toCustomer(): Partial<Customer> { return toCustomer(this); }
}

/**
 * Reduce the customer argument to a Customer-like object with just the properties that can be saved.
 * Missing properties get default values. 
 */
function toCustomer(customer: Partial<Customer>): Partial<Customer> {
  const { id = null, first = '', last = '', city = '', birthDate = null, photo = Customer.missingPerson } = customer;
  return { id, first, last, city, birthDate, photo };
}
