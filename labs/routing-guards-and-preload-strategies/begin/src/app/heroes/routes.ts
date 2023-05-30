import { Routes } from '@angular/router';

import { HeroesComponent } from './heroes/heroes.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: HeroesComponent },
];
