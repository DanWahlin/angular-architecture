import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { VillainDetailContainerComponent } from './villain-detail-container/villain-detail-container.component';
import { VillainDetailComponent } from './villain-detail/villain-detail.component';
import { VillainListComponent } from './villain-list/villain-list.component';
import { routes } from './routes';
import { VillainsComponent } from './villains/villains.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
  exports: [VillainsComponent, VillainDetailComponent],
  declarations: [
    VillainsComponent,
    VillainDetailComponent,
    VillainListComponent,
    VillainDetailContainerComponent,
  ],
})
export class VillainsModule {}
