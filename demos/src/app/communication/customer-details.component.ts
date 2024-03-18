import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Customer } from '../shared/interfaces';

@Component({
  selector: 'app-customer-details',
  standalone: true,
  template: `
    <h4>Details</h4>
    @if(customer){
    <table class="table">
      <tr>
        <td>Name:</td>
        <td>{{ customer.name }}</td>
      </tr>
      <tr>
        <td>City:</td>
        <td>{{ customer.city }}</td>
      </tr>
      <tr>
        <td>Age:</td>
        <td>{{ customer.age }}</td>
      </tr>
    </table>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomerDetailsComponent {
  @Input() customer!: Customer;
}
