import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Hero } from '../core';

@Component({
  selector: 'app-hero-list',
  template: `
    <ul class="list">
      @for(hero of heroes; track hero.id) {
      <li role="presentation">
        <div class="card">
          <app-card-content
            [name]="hero.name"
            [description]="hero.description"
          ></app-card-content>
        </div>
      </li>
      }
    </ul>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroListComponent {
  @Input() heroes: Hero[];

  byId(hero: Hero) {
    return hero.id;
  }
}
