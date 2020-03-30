import { Component } from '@angular/core';

@Component({
  selector: 'app-header-bar-links',
  template: `
    <div class="navbar-menu">
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a href="https://github.com/johnpapa/heroes-react" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-github fa-2x" aria-hidden="true"></i>
            </a>
            <a href="https://twitter.com/john_papa" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-twitter fa-2x" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        width: 100%;
      }
    `
  ]
})
export class HeaderBarLinksComponent {}
