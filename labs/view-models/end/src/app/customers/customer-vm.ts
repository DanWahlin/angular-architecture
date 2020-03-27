import { Customer } from '../model';
import { calcAge, calcFullName } from '../shared';

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

  // Add "pet" and "isDeleted" properties
  pet: string;
  isDeleted: boolean;

  /** Create CustomerVm from a Customer */
  static create(customer: Partial<Customer> = {}): CustomerVm {
    return Object.assign(new CustomerVm(), toCustomer(customer));
  }

  /** Clone ViewModel-self with properties and methods */
  clone() {
    return Object.assign(new CustomerVm(), this);
  }

  // Add methods and properties to keep code and pipes out of the HTML
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

  // 2. Include "pet" and "isDeleted" among the managed properties here as well, both in and out.
  const { id = null, first = '', last = '', city = '', birthDate = null, photo = Customer.missingPerson, isDeleted, pet } = customer;
  return { id, first, last, city, birthDate, photo, isDeleted, pet };
}
