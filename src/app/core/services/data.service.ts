import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map } from 'rxjs/operators';
import { ICustomer } from '../../shared/interfaces';
import { ClonerService } from './cloner.service';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {

  customers: ICustomer[] = [
    {
      id: 1,
      name: 'John Doe',
      city: 'Phoenix',
      age: 42
    },
    {
      id: 2,
      name: 'Jane Doe',
      city: 'Seattle',
      age: 30
    },
    {
      id: 3,
      name: 'Michelle Thompson',
      city: 'Orlando',
      age: 22
    }
  ];

  customersSubject = new BehaviorSubject<ICustomer[]>(this.customers);

  constructor(private cloner: ClonerService) { }

  getCustomers() : Observable<ICustomer[]> {
    return of(this.customers);
  }

  addCustomer() : Observable<ICustomer[]> {
    let id = this.customers[this.customers.length - 1].id + 1;
    this.customers.push({
      id: id,
      name: 'New Customer ' + id,
      city: 'Somewhere',
      age: id * 5
    });
    return of(this.customers);
  }

  addCustomerClone() : Observable<ICustomer[]> {
    return this.addCustomer().pipe(
      map(custs => {
        return this.cloner.deepClone(custs);
      })
    )
  }

}
