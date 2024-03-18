export class Customer {
  /** Default image when a customer has no photo link. */
  static missingPerson = 'assets/missing-person.png';

  id: number;
  first: string;
  last: string;
  city = '';
  birthDate?: Date;
  pet?: string;
  photo?: string;
  isDeleted?: boolean; // true if customer is “soft deleted”

  // The  secretSauce  property cannot be changed and should remain hidden.
  secretSauce?: string;

  /** Create a default new Customer, merging in properties of the optional customer argument */
  static create(id: number, customer: Partial<Customer> = {}) {
    const newCustomer = Object.assign(
      new Customer(),
      {
        // Default values
        id, // beauty step: want id to appear first in the JSON
        first: 'New',
        last: 'Customer ' + id,
        photo: Customer.missingPerson,
        ...customer,
      },
      { id } // force the new id in case it's in the customer arg
    );
    return newCustomer;
  }

  /** Reduce the customer argument to a Customer-like object with just the properties that can be saved.
   * Missing properties get default values.
   */
  static toCustomer(customer?: Partial<Customer>): Partial<Customer> {
    const {
      id = null,
      first = '',
      last = '',
      city = '',
      birthDate = null,
      photo = Customer.missingPerson,
      isDeleted,
      pet,
    } = customer || {};
    return { id, first, last, city, birthDate, photo, isDeleted, pet };
  }
}
