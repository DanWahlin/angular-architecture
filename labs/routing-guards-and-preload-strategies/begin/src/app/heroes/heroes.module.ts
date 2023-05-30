import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routes } from './routes';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroService } from './hero.service';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
  exports: [HeroesComponent, HeroDetailComponent],
  declarations: [HeroesComponent, HeroDetailComponent, HeroListComponent],
})
export class HeroesModule {}
