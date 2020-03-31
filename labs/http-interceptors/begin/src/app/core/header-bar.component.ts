import { Component } from '@angular/core';

@Component({
  selector: 'app-header-bar',
  template: `
    <header>
      <nav class="navbar has-background-dark is-dark" role="navigation" aria-label="main navigation">
        <app-header-bar-brand></app-header-bar-brand>
        <app-header-bar-links></app-header-bar-links>
      </nav>
    </header>
  `
})
export class HeaderBarComponent {}
