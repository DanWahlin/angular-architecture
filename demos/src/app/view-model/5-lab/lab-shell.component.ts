import { Component } from '@angular/core';

/** Describes the ViewModel Class Demo */
@Component({
  selector: 'app-lab-shell',
  styleUrls: ['../view-model.css'],
  template: `
  <h2>Lab</h2>

  <h4>Extend the Customer ViewModel Demo</h4>
  <p>
    You'll extend the Customer ViewModel example by displaying two properties that
    are in the Customer data but not in the ViewModel: <code>pet</code> and <code>isDeleted</code>
  </p>
  <p>
    The <code>isDeleted</code> flag is a reversible Customer "soft delete".
    You'll add a <code>showDeleted</code> flag to the container and use it 
    to filter Customer ViewModels for display.
  </p>

  <div class="button-row">
    <button routerLink="begin" class="btn btn-info button-row">Begin</button>
    <button routerLink="end" class="btn btn-success button-row">End</button>
  </div>

  <section id="lab-content">
    <router-outlet></router-outlet>
  </section>

  <section id="notes">
    <h4>Instructions:</h4>
    <ol>
      <li>Add <code>pet</code> and <code>isDeleted</code> to the <code>CustomerVm</code>.</li>
      <li>Include those properties in the <code>toCustomer()</code> function so that they are displayed and saved.</li>
      <li>Add <code>pet</code> as an editable field in the <code>VmCustomerDetailsComponent</code>.</li>
      <li>Increment the photo's <code>rowspan</code> attribute to accommodate "Pet".</li>
      <li>Add <code>isDeleted</code> as a checkbox toggle at the bottom.</li>
      <li>Add <code>showDeleted</code> flag to the <code>VmContainerComponent</code></li>
      <li>Extend the <code>createVm$()</code> method to use that flag to decide 
      whether to display deleted customers.</li>
      <li>Add a <code>toggleShowDeleted()</code> method to toggle that flag.</li>
      <li>Add a checkbox to the <code>VmContainerComponent</code> template that toggles the flag.</li>
    </ol>
  </section>
  `
})
export class LabShellComponent { }