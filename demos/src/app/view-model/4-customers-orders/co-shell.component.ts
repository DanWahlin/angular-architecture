import { Component } from '@angular/core';

/** Describes the ViewModel Class Demo */
@Component({
  selector: 'app-co-shell',
  styleUrls: ['../view-model.css'],
  template: `
  <h2>Customers and Orders</h2>

  <p>ViewModels for entity graphs such as Customers and their orders.</p>

  <app-co-container></app-co-container>

  <section id="notes">
    <h4>Notes:</h4>
    <ul>
      <li>Multiple ViewModels represent the <i>Customer Graph</i>: <code>customers -> orders -> line-items -> products</code>.</li>
      <li><b>ViewService</b> creates and manages ViewModels.</li>
      <li>Container component sticks to coordinating presenters, delegating to the <i>ViewService</i>.</li>
    </ul>
  </section>
  `
})
export class CustomersOrdersShellComponent { }