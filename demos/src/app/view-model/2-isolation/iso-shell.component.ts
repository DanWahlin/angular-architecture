import { Component } from '@angular/core';
import { IsoContainerComponent } from './iso-container.component';

/** Describes the Isolation VM Demo */
@Component({
    selector: 'app-iso-shell',
    styleUrls: ['../view-model.css'],
    template: `
    <h2>Isolation</h2>

    <p>ViewModel object isolates presenter data from the model data.</p>

    <app-iso-container></app-iso-container>

    <section id="notes">
      <h4>Notes:</h4>
      <ul>
        <li>Two-way binding to the ViewModel instead of the customer.</li>
        <li>No longer mutates the model but rather an isolated ViewModel that represents the model.</li>
        <li>Adding a customer is deferred to Details and DOES NOT change the customer list until saved.</li>
        <li>Changes to customer details DO NOT change the customer list until saved.</li>
        <li>Easier to validate (first & last required)</li>
        <li>Cancel discards added or changed customer.</li>
      </ul>
    </section>
  `,
    standalone: true,
    imports: [IsoContainerComponent]
})
export class IsoShellComponent {}
