import { Component, EventEmitter, Input, Output } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { Customer } from '../model';
import { ngIfAnim } from '../animations';
import { AgePipe, FullNamePipe, InputDateComponent } from '../shared';

@Component({
  standalone: true,
  selector: 'app-customer-details',
  imports: [FormsModule, AgePipe, FullNamePipe, InputDateComponent],
  styleUrls: ['./customer.css'],
  animations: [ngIfAnim],
  template: `

  @if(vm) {
    <div [@ngIfAnim]>
      <h4>Details</h4>
      <table class="table">
        <tr>
          <td rowspan="6"><img class="details" src="{{vm.photo}}" title="{{vm | fullname }}"></td>
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

        <tr>
          <td>Pet: </td>
          <td><input [(ngModel)]="vm.pet" placeholder="Pet"></td>
        </tr>
        <tr>
          <td>Birth Date: </td>
          <td>
            <input-date [model]="vm" property="birthDate" min='1920-01-01' max='2020-01-01'/>
          </td>
        </tr>
        <tr>
          <td>Age: </td>
          <td>{{ vm.birthDate | age }} </td> <!-- Uses the age property instead of pipe -->
        </tr>
      </table>

      <div><input type="checkbox" [(ngModel)]="vm.isDeleted"> Is Deleted</div>

      <div class="button-row">
        <!-- Uses the canSave property instead of the canSave() method -->
        <button (click)="save.emit(vm)" class="btn btn-success" [disabled]="!canSave(vm)">Save</button>
        <button (click)="cancel.emit()" class="btn btn-light">Cancel</button>
      </div>
    </div>
  } @else {
    <h2>No Selected Customer</h2>
  }
 `,
})
export class CustomerDetailsComponent {
  @Input() vm: Partial<Customer>;
  @Output() cancel = new EventEmitter();
  @Output() save = new EventEmitter();

  canSave(vm: Partial<Customer>) { return (vm.first || '').trim() && (vm.last || '').trim(); }
}
