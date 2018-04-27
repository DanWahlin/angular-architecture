import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesModulesRoutingModule } from './features-modules-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FeaturesModulesRoutingModule
  ],
  declarations: [ FeaturesModulesRoutingModule.components ]
})
export class FeaturesModulesModule { }
