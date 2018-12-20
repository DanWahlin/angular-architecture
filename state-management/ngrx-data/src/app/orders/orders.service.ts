import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from 'ngrx-data';
import { Order } from '../core/model/order';

@Injectable({ providedIn: 'root' })
export class OrdersService extends EntityCollectionServiceBase<Order> {

  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Order', serviceElementsFactory);
  }

}