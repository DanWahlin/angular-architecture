import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from '../core/model/order';
import { Observable } from 'rxjs';
import { OrdersService } from './orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: [ './orders.component.scss' ]
})
export class OrdersComponent implements OnInit {

  orders$: Observable<Order[]>;
  loading$: Observable<boolean>;

  constructor(private ordersService: OrdersService,
              private route: ActivatedRoute) {
      this.loading$ = this.ordersService.loading$;
   }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.orders$ = this.ordersService.getWithQuery('customerId=' + id);
  }

}
