/*
This Customer ViewModel class is NOT needed at all in this "begin" version.
The "begin" version borrows the (most of) the shape of the Customer class for its view model.

This is a skeleton of the class for your implementation of the "end" version.
*/

import { Customer } from '../model';

/** Customer ViewModel represents the Model to suit presentation components.
 * Also encapsulates or delegates per-entity presenter logic that was
 * formerly handled by pipes and Presenter emitters.
 */
export class CustomerVm {

  // Only include properties that the views need
  id: number;
  // 1. Add just the other properties that the views need

  // 2. Implement methods and synthetic properties pipes out of the HTML
  // Hint: steal the pipe methods
  get age()  { throw new Error('Not implemented'); }
  get name() { throw new Error('Not implemented'); }
  // 3. Implement this getter property.
  // Hint: the implementation is in CustomerDetailsComponent
  get canSave() { throw new Error('Not implemented'); }

  /** Create CustomerVm from a Customer */
  static create(customer?: Customer): CustomerVm {
    throw new Error('Not implemented');
  }

  /** Clone itself, preserving methods and getter/setter properties. */
  clone() { return Object.assign(new CustomerVm(), this); }

  // 4. Add a toCustomer() method that delegates to the toCustomer() function
}

/** Reduce the customer argument to a Customer-like object with just the properties that can be saved.
 * Missing properties get default values.
 */
export function toCustomer(customer: Partial<Customer> = {}): Partial<Customer> {
  const { id = null, first = '', last = '', city = '', birthDate = null, photo = Customer.missingPerson, isDeleted, pet } = customer || {};
  return { id, first, last, city, birthDate, photo, isDeleted, pet };
}
