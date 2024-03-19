import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { Hero } from '../../core';
import { HeroService } from '../hero.service';

import { materialImports } from '../../standalone-imports';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroListComponent } from '../hero-list/hero-list.component';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [materialImports, HeroDetailComponent, HeroListComponent],
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  selectedHero: Hero | null;

  heroes: Hero[];
  loading: boolean;

  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.getHeroes();
  }

  clear() {
    this.selectedHero = null;
  }

  deleteHero(hero: Hero) {
    this.loading = true;
    this.unselect();
    this.heroService
      .deleteHero(hero)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe(
        () => (this.heroes = this.heroes.filter(h => h.id !== hero.id))
      );
  }

  enableAddMode() {
    this.selectedHero = <any>{};
  }

  getHeroes() {
    this.loading = true;
    this.heroService
      .getHeroes()
      .pipe(finalize(() => (this.loading = false)))
      .subscribe(heroes => (this.heroes = heroes));
    this.unselect();
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

  update(hero: Hero) {
    this.loading = true;
    this.heroService
      .updateHero(hero)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe(
        () =>
          (this.heroes = this.heroes.map(h => (h.id === hero.id ? hero : h)))
      );
  }

  add(hero: Hero) {
    this.loading = true;
    this.heroService
      .addHero(hero)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe(addedHero => (this.heroes = this.heroes.concat(addedHero)));
  }

  unselect() {
    this.selectedHero = null;
  }
}
