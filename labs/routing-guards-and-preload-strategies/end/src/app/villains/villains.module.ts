import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { VillainDetailContainerComponent } from './villain-detail-container/villain-detail-container.component';
import { VillainDetailComponent } from './villain-detail/villain-detail.component';
import { VillainListComponent } from './villain-list/villain-list.component';
import { VillainsRoutingModule } from './villains-routing.module';
import { VillainsComponent } from './villains/villains.component';

@NgModule({
  imports: [CommonModule, SharedModule, VillainsRoutingModule],
  exports: [VillainsComponent, VillainDetailComponent],
  declarations: [
    VillainsComponent,
    VillainDetailComponent,
    VillainListComponent,
    VillainDetailContainerComponent
  ]
})
export class VillainsModule {}
