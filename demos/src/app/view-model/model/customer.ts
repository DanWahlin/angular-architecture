export class Customer {
  /** Default image when a customer has no photo link. */
  static missingPerson = 'assets/missing-person.png';

  id: number;
  first: string;
  last: string;
  city = '';
  birthDate?: Date;
  photo?: string;

  // These properties are in the customer data but are not displayed.
  isDeleted?: boolean; // true if customer is “soft deleted”
  pet?: string; // name of pet

  // The  secretSauce  property cannot be changed and should remain hidden.
  secretSauce?: string;

  /** Create a default new Customer, merging in properties of the optional customer argument */
  static create(id: number, customer: Partial<Customer> = {}) {
    const newCustomer = Object.assign(new Customer(), {
      // Defaults
      first: 'New',
      last: 'Customer ' + id,
      photo: Customer.missingPerson,
      ...customer,
      id
    });
    return newCustomer;
  }
}
