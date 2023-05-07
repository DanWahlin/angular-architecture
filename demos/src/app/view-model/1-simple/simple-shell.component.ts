import { Component } from '@angular/core';
import { SimpleContainerComponent } from './simple-container.component';

/** Describes the Simple VM Demo */
@Component({
    selector: 'app-simple-shell',
    styleUrls: ['../view-model.css'],
    template: `
    <h2>Simple Binding</h2>

    <p>Two-way binding directly to the model data.</p>

    <app-simple-container></app-simple-container>

    <section id="notes">
      <h4>Notes:</h4>
      <ul>
        <li>Mutates the Customer model directly in the Details view.</li>
        <li>Adding a customer updates the customer list immediately.</li>
        <li>Changes to customer detail update customer list immediately.</li>
        <li>Difficult to enforce validation of customer changes (ex: name required).</li>
      </ul>
    </section>
  `,
    standalone: true,
    imports: [SimpleContainerComponent]
})
export class SimpleShellComponent {}
