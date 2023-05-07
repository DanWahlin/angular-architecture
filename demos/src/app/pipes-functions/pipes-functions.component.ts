import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

import { DataService } from '../core/services/data.service';
import { Product } from '../shared/interfaces';
import { AddTaxMemoPipe } from '../shared/addtax-memo.pipe';
import { AddTaxPipe } from '../shared/addtax.pipe';
import { NgFor, AsyncPipe, CurrencyPipe } from '@angular/common';

@Component({
    selector: 'app-pipes-functions',
    templateUrl: './pipes-functions.component.html',
    styles: [],
    standalone: true,
    imports: [NgFor, AsyncPipe, CurrencyPipe, AddTaxPipe, AddTaxMemoPipe]
})
export class PipesFunctionsComponent implements OnInit {
  products$: Observable<Product[]> = of([]);
  tax = .08;
  newProduct: Product = {
    id: null,
    name: '',
    price: 0
  };

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.products$ = this.dataService.getProducts();
  }

  addTax(price: number) {
    console.log('addTax() function called');
    return price + (price * this.tax);
  }

  addProduct() {
    this.products$ = this.dataService.addProduct(this.newProduct);
  }

}
