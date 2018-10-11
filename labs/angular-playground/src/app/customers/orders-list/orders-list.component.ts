import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DataService } from 'src/app/core/data.service';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrdersListComponent implements OnInit {

  orders;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.orders = this.dataService.getOrders();
  }

}
