import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommunicationComponent } from './communication.component';

const routes: Routes = [
    { path: 'communication', component: CommunicationComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {}) ],
  exports: [ RouterModule ]
})
export class CommunicationRoutingModule {
  static components = [ CommunicationComponent ];
}

