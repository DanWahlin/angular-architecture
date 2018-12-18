import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from '../core/model/order';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { EntityState, OrderSelectors } from '../store';
import * as OrderAction from '../store/actions';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: [ './orders.component.scss' ]
})
export class OrdersComponent implements OnInit {

  orders$: Observable<Order[]>;
  loading$: Observable<boolean>;

  constructor(private store: Store<EntityState>,
              private orderSelectors: OrderSelectors,
              private route: ActivatedRoute) { 
      this.orders$ = this.orderSelectors.orders$;
      this.loading$ = this.orderSelectors.loading$;
   }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.store.dispatch(new OrderAction.GetOrders(id));
  }

}
