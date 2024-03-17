import { Routes } from '@angular/router';

import { VillainsComponent } from './villains/villains.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: VillainsComponent },
];
