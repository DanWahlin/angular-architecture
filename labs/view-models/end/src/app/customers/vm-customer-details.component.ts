import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CustomerVm } from './customer-vm';
import { ngIfAnim } from '../animations';

@Component({
  selector: 'app-vm-customer-details',
  styleUrls: ['./view-model.css'],
  animations: [ngIfAnim],
  template: `

  <div *ngIf="vm" [@ngIfAnim]>
    <h4>Details</h4>
    <table class="table">
      <tr>
        <!-- 4. Increase rowspan to 6 (to make room for "Pet") -->
        <td rowspan="6"><img class="details" src="{{vm.photo}}"></td>
        <td><b>First Name</b>: </td>
        <td><input [(ngModel)]="vm.first" placeholder="First"></td>
      </tr>
      <tr>
        <td><b>Last Name</b>: </td>
        <td><input [(ngModel)]="vm.last" placeholder="Last"></td>
      </tr>
      <tr>
        <td>City: </td>
        <td><input [(ngModel)]="vm.city" placeholder="City"></td>
      </tr>

      <!-- 3. Add Pet as an input -->
      <tr>
        <td>Pet: </td>
        <td><input [(ngModel)]="vm.pet" placeholder="Pet"></td>
      </tr>
      <tr>
        <td>Birth Date: </td>
        <td>
          <input-date [model]="vm" property="birthDate" min='1920-01-01' max='2020-01-01'></input-date>
        </td>
      </tr>
      <tr>
        <td>Age: </td>
        <td>{{ vm.birthDate | age }} </td>
      </tr>
    </table>

    <!-- 5. Add isDeleted as a checkbox below the table -->
    <div><input type="checkbox" [(ngModel)]="vm.isDeleted"> Is Deleted</div>

    <div class="button-row">
      <!-- Now a-->
      <button (click)="save.emit(vm)" class="btn btn-success" [disabled]="vm.saveDisabled">Save</button>
      <button (click)="cancel.emit()" class="btn btn-light">Cancel</button>
    </div>
  </div>
 `,
})
export class VmCustomerDetailsComponent {
  @Input() vm: CustomerVm;
  @Output() cancel = new EventEmitter();
  @Output() save = new EventEmitter();
}
