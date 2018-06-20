import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { DataService } from '../core/services/data.service';
import { IProduct } from '../shared/interfaces';

@Component({
  selector: 'app-pipes-functions',
  templateUrl: './pipes-functions.component.html',
  styles: []
})
export class PipesFunctionsComponent implements OnInit {
  products$: Observable<IProduct[]>;
  tax = .08;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.products$ = this.dataService.getProducts();
  }

  getTotalPrice(price: number) {
    console.log('totalPrice() function called');
    return price + (price * this.tax);
  }

}
