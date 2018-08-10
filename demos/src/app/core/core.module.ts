import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataService } from './services/data.service';
import { ClonerService } from './services/cloner.service';
import { EventBusService } from './services/event-bus.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [ DataService, ClonerService, EventBusService ]
})
export class CoreModule { }
