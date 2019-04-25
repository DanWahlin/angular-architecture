import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../core/shopping-cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {

  }

  addToCart() {
    this.shoppingCartService.addToCart();
  }

}
