import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import { catchError, delay, map } from 'rxjs/operators';
import { Customer } from '../../core/model/customer';
import { DataServiceError } from './data-error.service';
import { environment } from '../../../environments/environment';

@Injectable()
export class CustomerDataService {

  apiUrlBase = environment.apiUrlBase;

  constructor(private http: HttpClient) {}

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${this.apiUrlBase}/customers`)
    .pipe(
      catchError(this.handleError())
    );
  }

  getCustomer(id: number): Observable<Customer> {
    return this.http.get<Customer>(`${this.apiUrlBase}/customers/${id}`)
    .pipe(
      catchError(this.handleError())
    );
  }

  addCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(`${this.apiUrlBase}/customers/`, customer)
    .pipe(
      catchError(this.handleError(customer))
    );
  }

  deleteCustomer(customer: Customer): Observable<Customer> {
    return this.http.delete(`${this.apiUrlBase}/customers/${customer.id}`)
    .pipe(
      map(() => customer),
      catchError(this.handleError(customer))
    );
  }

  updateCustomer(customer: Customer): Observable<Customer> {
    return this.http.put<Customer>(`${this.apiUrlBase}/customers/${customer.id}`, customer)
    .pipe(
      map(() => customer),
      catchError(this.handleError(customer))
    );
  }

  private handleError<T>(requestData?: T) {
    return (res: HttpErrorResponse) => {
      const error = new DataServiceError(res.error, requestData);
      console.error(error);
      // return new ErrorObservable(error);
      return throwError(error);
    };
  }
}
