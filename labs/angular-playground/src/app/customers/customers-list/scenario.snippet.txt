import { sandboxOf } from 'angular-playground';
import { CustomersListComponent } from './customers-list.component';
import { DataService } from 'src/app/core/data.service';

export default sandboxOf(CustomersListComponent)
  .add('default', {
    template: `<app-customers-list></app-customers-list>`
  })
  .add('no customers', {
    template: `<app-customers-list></app-customers-list>`,
    providers: [
      {
        provide: DataService, useFactory: () => {
          return { getCustomers() { return null; }}
        }
      }
    ]
  })
  .add('no customers yellow', {
    template: `<app-customers-list [customersClass]="awesomeClass"></app-customers-list>`,
    context: {
      awesomeClass: 'yellow'
    },
    providers: [
      {
        provide: DataService, useFactory: () => {
          return { getCustomers() { return null; }}
        }
      }
    ]
  });
