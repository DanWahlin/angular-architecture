import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Hero } from "../core";
import { HeroService } from "./hero.service";

@Component({
  selector: "app-heroes",
  template: `
    <div class="content-container">
      <app-list-header title="Heroes" (refresh)="getHeroes()"></app-list-header>
      <div class="columns is-multiline is-variable">
        <div class="column is-8" *ngIf="heroes$ | async as heroes">
          <app-hero-list [heroes]="heroes"></app-hero-list>
        </div>
      </div>
    </div>
  `
})
export class HeroesComponent implements OnInit {
  heroes$: Observable<Hero[]>;
  message = "?";

  constructor(private heroService: HeroService) {
    this.heroes$ = heroService.entities$;
  }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes() {
    this.heroService.getAll();
  }
}
