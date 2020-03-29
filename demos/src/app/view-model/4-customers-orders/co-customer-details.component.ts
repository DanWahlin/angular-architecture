import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CustomerVm } from './customer-vm';
import { ngIfAnim } from '../../animations';

@Component({
  selector: 'app-co-customer-details',
  template: `
    <div *ngIf="vm" [@ngIfAnim]>
      <h4>Details</h4>
      <table class="table">
        <tr>
          <td rowspan="5"><img class="details" src="{{ vm.photo }}" /></td>
          <td><b>First Name</b>:</td>
          <td><input [(ngModel)]="vm.first" placeholder="First" /></td>
        </tr>
        <tr>
          <td><b>Last Name</b>:</td>
          <td><input [(ngModel)]="vm.last" placeholder="Last" /></td>
        </tr>
        <tr>
          <td>City:</td>
          <td><input [(ngModel)]="vm.city" placeholder="City" /></td>
        </tr>
        <tr>
          <td>Birth Date:</td>
          <td>
            <input-date [model]="vm" property="birthDate" min="1920-01-01" max="2020-01-01"></input-date>
          </td>
        </tr>
        <tr>
          <td>Age:</td>
          <td>{{ vm.age }}</td>
        </tr>
      </table>

      <ng-container *ngIf="vm.orderSummaries$ | async as summaries; else noOrders">
        <p><b>Orders</b></p>
        <table *ngIf="summaries?.length > 0; else noOrders" class="table table-striped nav">
          <tr *ngFor="let summary of summaries" (click)="selectOrder.next(summary)">
            <td>{{ summary.id }}</td>
            <td>{{ summary.memo }}</td>
          </tr>

          <tr></tr>
        </table>
      </ng-container>

      <ng-template #noOrders> {{ vm.name }} has no orders. </ng-template>

      <div class="button-row">
        <!-- Now a-->
        <button (click)="save.emit(vm)" class="btn btn-success" [disabled]="vm.saveDisabled">Save</button>
        <button (click)="cancel.emit()" class="btn btn-light">Cancel</button>
      </div>
    </div>
  `,
  animations: [ngIfAnim],
  styleUrls: ['../view-model.css']
})
export class CustomerDetailsComponent {
  @Input() vm: CustomerVm;
  @Output() cancel = new EventEmitter();
  @Output() save = new EventEmitter();
  @Output() selectOrder = new EventEmitter();
}
