import { Injectable } from '@angular/core';
import { Customer } from '../shared/interfaces';
import { List, fromJS } from 'immutable';
import { Observable, of, EMPTY } from 'rxjs';
import { map } from 'rxjs/operators';
import { ClonerService } from './cloner.service';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  customers: Customer[] = [
    {
      id: 1,
      name: 'John Doe',
      address: {
        city: 'Phoenix'
      },
      orderTotal: 9.99
    },
    {
      id: 2,
      name: 'Jane Doe',
      address: {
        city: 'Seattle'
      },
      orderTotal: 29.99
    },
    {
      id: 3,
      name: 'Michelle Thompson',
      address: {
        city: 'London'
      },
      orderTotal: 99.99
    }
  ];

  immutableCustomers = List<Customer>(this.customers);

  constructor(private clonerService: ClonerService) {  }

  getCustomers() : Observable<Customer[]> {
    // const custs = this.customers;
    // const custs = JSON.parse(JSON.stringify(this.customers));
    // const custs = this.clonerService.deepClone<Customer[]>(this.customers);
    const custs = this.immutableCustomers.toArray();
    return of(custs);
  }

  getCustomer(id: number) : Observable<Customer> {
    return this.getCustomers()
      .pipe(
        map((custs: Customer[]) => {
          const filteredCusts = custs.filter(cust => cust.id === id);
          // Enable if using Immutable.js below
          // const filteredCusts = this.immutableCustomers.filter(cust => cust.id === id);
          if (filteredCusts) {
            const cust = filteredCusts[0];
            if (cust) {
              // return cust;
              // return JSON.parse(JSON.stringify(cust)) as Customer;
              // return this.clonerService.deepClone<Customer>(cust);
              return fromJS(cust).toJS() as any;
            }
          } 
          return {} as Customer;
        }),
      );
  }

  updateCustomer(customer: Customer) : Observable<boolean> {
    const index = this.getCustomerIndex(customer.id);
    customer.orderTotal = +customer.orderTotal;
    // update collections
    this.customers[index] = customer;
    this.immutableCustomers = this.immutableCustomers.update(index, () => customer);
    return of(true);
  }

  getCustomerIndex(id: number) {
    return this.customers.findIndex((cust, index, array) => cust.id === id);
  }
}
