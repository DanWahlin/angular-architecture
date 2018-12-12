import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { DataService } from './services/data.service';
import { ClonerService } from './services/cloner.service';
import { EventBusService } from './services/event-bus.service';
import { HttpClientRxJSService } from './services/httpClientRxJS.service';

@NgModule({
  imports: [ HttpClientModule ],
  declarations: [],
  providers: [ DataService, ClonerService, EventBusService, HttpClientRxJSService ]
})
export class CoreModule { }
