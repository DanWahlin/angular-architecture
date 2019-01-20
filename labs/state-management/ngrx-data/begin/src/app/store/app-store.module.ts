import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';

import { DefaultDataServiceConfig, NgrxDataModule } from 'ngrx-data';


const apiRoot = environment.apiUrlBase + '/';
const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root: apiRoot,
  entityHttpResourceUrls: {
    Customer: { entityResourceUrl: apiRoot + 'customers/', collectionResourceUrl: apiRoot + 'customers/' },
    Order: { entityResourceUrl: apiRoot + 'orders/', collectionResourceUrl: apiRoot + 'orders/' },
  }
};

@NgModule({
  imports: [
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    NgrxDataModule.forRoot(),
    environment.production ? [] : StoreDevtoolsModule.instrument()
  ],
  providers: [ { provide: DefaultDataServiceConfig, useValue: defaultDataServiceConfig } ]
})
export class AppStoreModule {}
