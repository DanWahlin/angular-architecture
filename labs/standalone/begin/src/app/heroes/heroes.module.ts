/*** DELETE THIS MODULE ***/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routes } from './routes';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule, SharedModule, RouterModule.forChild(routes),
    // ALREADY converted these two components to standalone and imported them into this module
    HeroDetailComponent, HeroListComponent
  ],
  exports: [HeroesComponent],
  declarations: [HeroesComponent], // <-- Hereoes is the last of the 3 components to be converted to standalone
})
export class HeroesModule {}
