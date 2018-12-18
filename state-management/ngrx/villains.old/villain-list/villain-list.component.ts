import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { MasterDetailCommands } from '../../core/master-detail-commands';
import { Order } from '../../core/model/order';

@Component({
  selector: 'app-villain-list',
  templateUrl: './villain-list.component.html',
  styleUrls: ['./villain-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VillainListComponent {
  @Input() villains: Order[];
  @Input() selectedVillain: Order;
  @Input() commands: MasterDetailCommands<Order>;

  byId(villain: Order) {
    return villain.id;
  }

  onSelect(villain: Order) {
    this.commands.select(villain);
  }

  deleteVillain(villain: Order) {
    this.commands.delete(villain);
  }
}
