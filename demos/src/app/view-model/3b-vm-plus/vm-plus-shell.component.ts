import { Component } from '@angular/core';

/** Describes the ViewModel Class PLUS Demo */
@Component({
  selector: 'app-vm-plus-shell',
  styleUrls: ['../view-model.css'],
  template: `
  <h2>ViewModel Wonder Class</h2>

  <p>The ViewModel that <i>does it all</i> ... perhaps too much.</p>

  <app-vm-plus-container></app-vm-plus-container>

  <section id="notes">
    <h4>Notes:</h4>
    <ul>
      <li>ViewModel includes the select, cancel, save functions.</li>
      <li>Removes event bindings from HTML templates and event emitters from component classes.</li>
      <li>Similar to react property passing.</li>
      <li><i>Concern: presenter coordination is hidden within the view model</i>.</li>
    </ul>
  </section>
  `
})
export class VmPlusShellComponent { }