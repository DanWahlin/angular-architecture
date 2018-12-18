import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Order } from '../../core/model/order';
import { DataServiceError } from './data-error.service';
import { apiUrlBase } from "./defaults";

@Injectable()
export class OrderDataService {
  constructor(private http: HttpClient) {}

  getOrders(customerId: number): Observable<Order[]> {
    return this.http.get<Order[]>(`${apiUrlBase}/orders?customerId=${customerId}`)
    .pipe(
      catchError(this.handleError())
    );
  }

  // addOrder(order: Order): Observable<Order> {
  //   return this.http.post<Order>(`${apiUrlBase}/orders/`, order)
  //   .pipe(
  //     catchError(this.handleError(order))
  //   );
  // }

  // deleteOrder(order: Order): Observable<Order> {
  //   return this.http.delete(`${apiUrlBase}/orders/${order.id}`)
  //   .pipe(
  //     map(() => order),
  //     catchError(this.handleError(order))
  //   );
  //   }

  // updateOrder(order: Order): Observable<Order> {
  //   return this.http.put<Order>(`${apiUrlBase}/orders/${order.id}`, order)
  //   .pipe(
  //     map(() => order),
  //     catchError(this.handleError(order))
  //   );
  // }

  private handleError<T>(requestData?: T) {
    return (res: HttpErrorResponse) => {
      const error = new DataServiceError(res.error, requestData);
      console.error(error);
      return throwError(error);
    };
  }
}
