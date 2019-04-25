import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private itemsInCart = 0;
  private shoppingCartSubject$ = new Subject<number>();
  shoppingCartChanged$ = this.shoppingCartSubject$.asObservable();

  addToCart() {
    this.itemsInCart++;
    this.shoppingCartSubject$.next(this.itemsInCart);
  }

}
