import { Component, Input } from '@angular/core';
import { CustomerVmPlus } from './customer-vm-plus';
import { ngIfAnim } from '../../animations';

@Component({
  selector: 'app-vm-plus-customer-details',
  styleUrls: ['../view-model.css'],
  animations: [ngIfAnim],
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

      <div class="button-row">
        <!-- Now a-->
        <button (click)="vm.save()" class="btn btn-success" [disabled]="vm.saveDisabled">Save</button>
        <button (click)="vm.cancel()" class="btn btn-light">Cancel</button>
      </div>
    </div>
  `
})
export class VmPlusCustomerDetailsComponent {
  @Input() vm: CustomerVmPlus;
}
