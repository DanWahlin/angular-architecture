import { Customer } from '../model';
import { calcAge, calcFullName } from '../shared';

/** Customer ViewModel represents the Model to suit presentation components.
 * Also encapsulates or delegates per-entity presenter logic that was
 * formerly handled by pipes and Presenter emitters.
 */
export class CustomerVm {

  // Only include properties that the views need
  // Excludes "secretSauce"
  id: number;
  first: string;
  last: string;
  city: string;
  birthDate?: Date;
  pet: string;
  photo?: string;
  isDeleted: boolean;

  // Added methods and synthetic properties to keep code and pipes out of the HTML
  get age() { return calcAge(this.birthDate); }
  get name() { return calcFullName(this); }
  get canSave() { return (this.first || '').trim() && (this.last || '').trim(); }


  /** Create CustomerVm from a Customer */
  static create(customer?: Customer): CustomerVm {
    return Object.assign(new CustomerVm(), toCustomer(customer));
  }

  /** Return a Customer-like object with just the properties that can be saved. */
  toCustomer(): Partial<Customer> { return toCustomer(this); }

  /** Clone itself, preserving methods and getter/setter properties. */
  clone() { return Object.assign(new CustomerVm(), this); }
}

/** Reduce the customer argument to a Customer-like object with just the properties that can be saved.
 * Missing properties get default values.
 */
function toCustomer(customer: Partial<CustomerVm>): Partial<Customer> {
  const { id = null, first = '', last = '', city = '', birthDate = null, photo = Customer.missingPerson, isDeleted, pet } = customer || {};
  return { id, first, last, city, birthDate, photo, isDeleted, pet };
}
