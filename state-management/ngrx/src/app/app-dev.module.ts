import { NgModule } from '@angular/core';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';

import { HttpClientInMemoryWebApiModule, InMemoryDbService } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './core/in-memory-data.service';

@NgModule({
  imports: [
    AppModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
      delay: 0,
      passThruUnknownUrl: true
    })
  ],
  providers: [ { provide: InMemoryDataService, useExisting: InMemoryDbService } ],
  bootstrap: [ AppComponent ]
})
export class AppDevModule {}
