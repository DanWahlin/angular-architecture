import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MasterDetailCommands } from '../../core/master-detail-commands';
import { OrderSelectors, EntityState } from '../../store';
import { Store } from '@ngrx/store';
import * as OrderAction from '../../store/actions';
import { Order } from '../../core/model/order';

@Component({
  selector: 'app-villains',
  templateUrl: './villains.component.html',
  styleUrls: ['./villains.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VillainsComponent
  implements MasterDetailCommands<Order>, OnInit {
  selected: Order;
  commands = this;

  villains$: Observable<Order[]>;
  loading$: Observable<boolean>;

  constructor(
    private store: Store<EntityState>,
    private villainSelectors: OrderSelectors
  ) {
    this.villains$ = this.villainSelectors.orders$;
    this.loading$ = this.villainSelectors.loading$;
  }

  ngOnInit() {
    this.getVillains();
  }

  close() {
    this.selected = null;
  }

  enableAddMode() {
    this.selected = <any>{};
  }

  getVillains() {
    this.close();
    this.store.dispatch(new OrderAction.GetOrders());
  }

  add(villain: Order) {
    this.store.dispatch(new OrderAction.AddOrder(villain));
  }

  delete(villain: Order) {
    this.close();
    this.store.dispatch(new OrderAction.DeleteOrder(villain));
  }

  update(villain: Order) {
    this.store.dispatch(new OrderAction.UpdateOrder(villain));
  }

  select(villain: Order) {
    this.selected = villain;
  }

  unselect() {
    this.selected = null;
  }
}
