import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Customer } from '../model';
import { ngIfAnim } from '../../animations';

@Component({
  selector: 'app-iso-customer-details',
  styleUrls: ['../view-model.css'],
  animations: [ngIfAnim],
  template: `
    <div *ngIf="viewModel" [@ngIfAnim]>
      <h4>Details</h4>
      <table class="table">
        <tr>
          <td rowspan="5"><img class="details" src="{{ viewModel.photo }}" /></td>
          <td><b>First Name</b>:</td>
          <td><input [(ngModel)]="viewModel.first" placeholder="First" /></td>
        </tr>
        <tr>
          <td><b>Last Name</b>:</td>
          <td><input [(ngModel)]="viewModel.last" placeholder="Last" /></td>
        </tr>
        <tr>
          <td>City:</td>
          <td><input [(ngModel)]="viewModel.city" placeholder="City" /></td>
        </tr>
        <tr>
          <td>Birth Date:</td>
          <td>
            <input-date [model]="viewModel" property="birthDate" min="1920-01-01" max="2020-01-01"></input-date>
          </td>
        </tr>
        <tr>
          <td>Age:</td>
          <td>{{ viewModel.birthDate | age }}</td>
        </tr>
      </table>

      <div class="button-row">
        <button (click)="save.emit(viewModel)" class="btn btn-success" [disabled]="saveDisabled">Save</button>
        <button (click)="cancel.emit()" class="btn btn-light">Cancel</button>
      </div>
    </div>
  `
})
export class IsoCustomerDetailsComponent {
  @Input() viewModel: Customer;
  @Output() cancel = new EventEmitter();
  @Output() save = new EventEmitter();

  get saveDisabled() {
    return !(this.viewModel.first || '').trim() || !(this.viewModel.last || '').trim();
  }
}
