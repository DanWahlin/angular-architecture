import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OrderVm } from './order-vm';
import { ngIfAnim } from '../../animations';

const YearInMs = 365 * 24 * 60 * 60 * 1000;

@Component({
  selector: 'app-co-order-details',
  template: `

  <div *ngIf="vm" [@ngIfAnim]>
    <h4>Order #{{ vm.orderId }}</h4>
    <table class="table">
      <tr>
        <td>Customer: </td>
        <td>{{ vm.customerName }}</td>
      </tr>
      <tr>
        <td>Memo: </td>
        <td><input [(ngModel)]="vm.memo" placeholder="Memo" class="memo"></td>
      </tr>
      <tr>
        <td>Order Date: </td>
        <td>
          <input-date [model]="vm" property="orderDate" min='2020-01-01' max='{{orderMax}}'></input-date>
        </td>
      </tr>
      <tr>
    </table>

    <table class="line-items" *ngIf="vm.lineItems?.length > 0; else noItems" class="table">
      <tr>
        <th>Product</th>
        <th class="right">Qty</th>
        <th class="right">Price</th>
        <th class="right">Cost</th>
      </tr>
      <tr *ngFor="let item of vm.lineItems" class="line-item">
        <td>{{ item.productName }}</td>
        <td class="right"><input [(ngModel)]="item.quantity" ></td>
        <td class="right">{{ item.price | currency }}</td>
        <td class="right">{{ item.price * item.quantity | currency }}</td>
      <tr>
    </table>

    <ng-template #noItems>
      Order has no line items.
    </ng-template>

    <div class="button-row">
      <!-- Now a-->
      <button (click)="save.emit(vm)" class="btn btn-success">Save</button>
      <button (click)="cancel.emit()" class="btn btn-light">Cancel</button>
    </div>
  </div>
 `,
  styleUrls: ['../view-model.css'],
  animations: [ngIfAnim],
})
export class OrderDetailsComponent {
  @Input() vm: OrderVm;
  @Output() cancel = new EventEmitter();
  @Output() save = new EventEmitter();

  /** Order date can be max of one year from today */
  orderMax = new Date(new Date().valueOf() + YearInMs).toISOString().substr(0, 10);
}
