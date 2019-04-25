import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppingCartService } from '../core/shopping-cart.service';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  cartItemsCount = 0;
  shoppingCartSub: Subscription;

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
    this.shoppingCartSub = this.shoppingCartService.shoppingCartChanged$.subscribe(val => {
      this.cartItemsCount = val;
    });
  }

  ngOnDestroy() {
    this.shoppingCartSub.unsubscribe();
  }

}

