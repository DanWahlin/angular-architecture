import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CustomerVm } from './customer-vm';

@Component({
  selector: 'app-vm-customer-list',
  styleUrls: ['../view-model.css'],
  template: `
    <h4>Customers</h4>

    <table class="table table-striped nav">
      <tr *ngFor="let vm of vms" (click)="select(vm)">
        <td>{{ vm.name }}</td>
        <!-- Look Ma! No pipe! -->
      </tr>
    </table>
  `
})
export class VmCustomerListComponent {
  @Input() vms: CustomerVm[] = [];
  @Output() selected = new EventEmitter<CustomerVm>();

  select(vm: CustomerVm) {
    this.selected.emit(vm);
  }
}
