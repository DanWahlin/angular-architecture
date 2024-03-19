import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Villain } from '../../core';
import { materialImports } from '../../standalone-imports';

@Component({
  selector: 'app-villain-list',
  standalone: true,
  imports: [materialImports],
  templateUrl: './villain-list.component.html',
  styleUrls: ['./villain-list.component.scss']
})
export class VillainListComponent {
  @Input() villains: Villain[];
  @Input() selectedVillain: Villain;
  @Output() deleted = new EventEmitter<Villain>();
  @Output() selected = new EventEmitter<Villain>();

  onSelect(villain: Villain) {
    this.selected.emit(villain);
  }

  deleteVillain(villain: Villain) {
    this.deleted.emit(villain);
  }
}
