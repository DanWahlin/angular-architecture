import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { DataService } from './services/data.service';
import { ClonerService } from './services/cloner.service';
import { EventBusService } from './services/event-bus.service';
import { HttpClientRxJSService } from './services/httpClientRxJS.service';
import { AuthInterceptor } from './interceptors/auth.interceptor';

@NgModule({
  imports: [ HttpClientModule ],
  declarations: [],
  providers: [ DataService, ClonerService, EventBusService, HttpClientRxJSService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true  }
  ]
})
export class CoreModule { }
