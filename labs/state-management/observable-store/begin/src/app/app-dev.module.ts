import { NgModule } from '@angular/core';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';

import { HttpClientInMemoryWebApiModule, InMemoryDbService, InMemoryBackendConfigArgs} from 'angular-in-memory-web-api';
import { InMemoryDataService } from './core/in-memory-data.service';

@NgModule({
  imports: [
    AppModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
      delay: 200,
      passThruUnknownUrl: true,
      post204: false,
      put204: false
    })
  ],
  providers: [ { provide: InMemoryDataService, useExisting: InMemoryDbService } ],
  bootstrap: [ AppComponent ]
})
export class AppDevModule {}
