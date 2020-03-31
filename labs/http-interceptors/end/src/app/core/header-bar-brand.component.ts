import { Component } from '@angular/core';

@Component({
  selector: 'app-header-bar-brand',
  template: `
    <div class="navbar-brand">
      <a
        class="navbar-item"
        href="https://angular.io/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fab js-logo fa-angular fa-2x" aria-hidden="true"></i>
      </a>
      <a class="navbar-item nav-home" router-link="/">
        <span class="tour">TOUR</span> <span class="of">OF</span>
        <span class="heroes">HEROES</span>
      </a>
      <button
        class="link navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span> <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </button>
    </div>
  `
})
export class HeaderBarBrandComponent {}
