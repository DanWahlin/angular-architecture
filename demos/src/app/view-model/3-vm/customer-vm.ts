import { Customer } from '../model';
import { calcAge, calcFullName } from '../../shared';

/**
 * Customer ViewModel represents the Model to suit the Presenters.
 * Also encapsulates or delegates presenter logic.
 * formerly handled by pipes and Presenter emitters.
 */
export class CustomerVm {
  // Only include properties that the views need
  id = 0;
  first = '';
  last = '';
  city = '';
  birthDate?: Date | string = '';
  photo = '';

  /** Create CustomerVm from a Customer */
  static create(customer: Partial<Customer> = {}): CustomerVm {
    return Object.assign(new CustomerVm(), toCustomer(customer));
  }

  /** Clone ViewModel-self with properties and methods */
  clone() {
    return Object.assign(new CustomerVm(), this);
  }

  // Add methods and properties to keep code and pipes out of the HTML. They replace pipes which can be inefficient (see FullNamePipe).
  get age() {
    return calcAge(this.birthDate as string);
  }
  get name() {
    return calcFullName(this);
  }
  get saveDisabled() {
    return !(this.first || '').trim() || !(this.last || '').trim();
  }

  /** Return a Customer-like object with just the properties that can be saved. */
  toCustomer() {
    return toCustomer(this);
  }
}

/**
 * Reduce the customer argument to a Customer-like object with just the properties that can be saved.
 * Missing properties get default values.
 */
function toCustomer(customer: Partial<Customer>): Partial<Customer> {
  const { id = 0, first = '', last = '', city = '', birthDate = '', photo = Customer.missingPerson } = customer;
  return { id, first, last, city, birthDate, photo };
}
