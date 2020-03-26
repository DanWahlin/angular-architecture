import { Component, Input } from '@angular/core';
import { Customer } from '../model';
import { ngIfAnim } from '../../animations';

@Component({
  selector: 'app-simple-customer-details',
  styleUrls: ['../view-model.css'],
  animations: [ngIfAnim],
  template: `

  <div *ngIf="customer" [@ngIfAnim]>
    <h4>Details</h4>
    <table class="table">
      <tr>
        <td rowspan="5"><img class="details" src="{{customer.photo}}"></td>
        <td><b>First Name</b>: </td>
        <td><input [(ngModel)]="customer.first" placeholder="First"></td>
      </tr>
      <tr>
        <td><b>Last Name</b>: </td>
        <td><input [(ngModel)]="customer.last" placeholder="Last"></td>
      </tr>
      <tr>
        <td>City: </td>
        <td><input [(ngModel)]="customer.city" placeholder="City"></td>
      </tr>
      <tr>
        <td>Birth Date: </td>
        <td>
          <input-date [model]="customer" property="birthDate" min='1920-01-01' max='2020-01-01'></input-date>
        </td>
      </tr>
      <tr>
        <td>Age: </td>
        <td>{{ customer.birthDate | age }} </td>
      </tr>
    </table>
 </div>
  `
})
export class SimpleCustomerDetailsComponent {
  @Input() customer: Customer;
}
