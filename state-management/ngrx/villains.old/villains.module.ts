import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VillainsRoutingModule } from './villains-routing.module';
import { VillainDetailComponent } from './villain-detail/villain-detail.component';
import { VillainsComponent } from './villains/villains.component';
import { VillainListComponent } from './villain-list/villain-list.component';

import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';

@NgModule({
  imports: [CommonModule, SharedModule, MaterialModule, VillainsRoutingModule],
  exports: [VillainsComponent, VillainDetailComponent],
  declarations: [
    VillainsComponent,
    VillainDetailComponent,
    VillainListComponent
  ],
  providers: []
})
export class VillainsModule {}
