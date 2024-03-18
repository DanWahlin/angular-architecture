import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

import { DataService } from '../core/services/data.service';
import { Product } from '../shared/interfaces';
import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-pipes-functions',
  standalone: true,
  imports: [CurrencyPipe, AsyncPipe, SharedModule],
  template: `
    <h1>Pipes versus Functions</h1>
    This example shows how using pipes (where possible) instead of functions in
    a template can enhance performance. See the console.
    <br /><br />
    <h4>Add Product</h4>
    Name:
    <input
      type="text"
      (input)="newProduct.name = $any($event).target.value"
      [value]="newProduct.name"
      title="Product Name"
    />
    <br />
    Price:
    <input
      type="text"
      (input)="newProduct.price = $any($event).target.value"
      [value]="newProduct.price"
      title="Product Price"
    />
    <br /><br />
    <button class="btn btn-primary" (click)="addProduct()">Add Product</button>
    <br />

    <h3>Calling a Function from a Template</h3>
    <table class="table table-striped">
      <tr>
        <th>Name</th>
        <th>Total</th>
      </tr>
      @for(product of products$ | async; track product.id){
      <tr>
        <td>{{ product.name }}</td>
        <td>{{ addTax(product.price) | currency }}</td>
      </tr>
      }
    </table>

    <h3>Using a Pipe in a Template</h3>
    <table class="table table-striped">
      <tr>
        <th>Name</th>
        <th>Total</th>
      </tr>
      @for(product of products$ | async; track product.id){
      <tr>
        <td>{{ product.name }}</td>
        <td>{{ product.price | addtax | currency }}</td>
      </tr>
      }
    </table>

    <h3>Using a Pipe (and &#64;memo() decorator) in a Template</h3>
    <table class="table table-striped">
      <tr>
        <th>Name</th>
        <th>Total</th>
      </tr>
      @for(product of products$ | async; track product.id){
      <tr>
        <td>{{ product.name }}</td>
        <td>{{ product.price | addtaxmemo | currency }}</td>
      </tr>
      }
    </table>
  `,
})
export class PipesFunctionsComponent implements OnInit {
  products$: Observable<Product[]> = of([]);
  tax = 0.08;
  newProduct: Product = {
    id: null,
    name: '',
    price: 0,
  };

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.products$ = this.dataService.getProducts();
  }

  addTax(price: number) {
    console.log('addTax() function called');
    return price + price * this.tax;
  }

  addProduct() {
    this.products$ = this.dataService.addProduct(this.newProduct);
  }
}
