import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import { ObservableStore } from '@codewithdan/observable-store';

import { Customer } from '../core/model';
import { StoreState } from '../shared/interfaces';

@Injectable({
    providedIn: 'root'
})
export class CustomersService {

    apiUrl = 'api/customers';

    constructor(private http: HttpClient) { 
        
    }

    private fetchCustomers() {
        return this.http.get<Customer[]>(this.apiUrl)
            .pipe(
                map(customers => {
                    
                    // Set the Store State Here
                    

                    return customers;
                }),
                catchError(this.handleError)
            );
    }

    getAll() {
        // Get Store State Here
        

        // pull from store cache
        if (state && state.customers) {

            // Log Store State Here


            return of(state.customers);
        }
        // doesn't exist in store so fetch from server
        else {
            return this.fetchCustomers()
                .pipe(
                    catchError(this.handleError)
                );
        }
    }

    get(id) {
        return this.getAll()
            .pipe(
                map(custs => {
                    let filteredCusts = custs.filter(cust => cust.id === id);
                    const customer = (filteredCusts && filteredCusts.length) ? filteredCusts[0] : null;                
                    this.setState({ customer }, CustomersStoreActions.GetCustomer);
                    return customer;
                }),
                catchError(this.handleError)
            );
    }

    add(customer: Customer) {
        return this.http.post(this.apiUrl, customer)
            .pipe(
                switchMap(cust => {
                    // update local store with added customer data
                    // not required of course unless the store cache is needed 
                    // (it is for the customer list component in this example)
                    return this.fetchCustomers();
                }),
                catchError(this.handleError)
            );
    }

    update(customer: Customer) {
        return this.http.put(this.apiUrl + '/' + customer.id, customer)
            .pipe(
                switchMap(cust => {
                    // update local store with updated customer data
                    // not required of course unless the store cache is needed 
                    // (it is for the customer list component in this example)
                    return this.fetchCustomers();
                }),
                catchError(this.handleError)
            );
    }

    delete(id: number) {
        return this.http.delete(this.apiUrl + '/' + id)
            .pipe(
                switchMap(() => {
                    // update local store since customer deleted
                    // not required of course unless the store cache is needed 
                    // (it is for the customer list component in this example)
                    return this.fetchCustomers();
                }),
                catchError(this.handleError)
            );
    }

    private handleError(error: any) {
        console.error('server error:', error);
        if (error.error instanceof Error) {
            const errMessage = error.error.message;
            return Observable.throw(errMessage);
        }
        return Observable.throw(error || 'Server error');
      }
}

export enum CustomersStoreActions {
    GetCustomers = 'get_customers',
    GetCustomer = 'get_customer'
}