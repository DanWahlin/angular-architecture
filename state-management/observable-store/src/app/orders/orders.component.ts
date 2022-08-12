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

  orders$!: Observable<Order[]>;

  constructor(private ordersService: OrdersService,
              private route: ActivatedRoute) {

   }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.orders$ = this.ordersService.get(id);
  }

}
