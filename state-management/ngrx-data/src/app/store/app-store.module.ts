import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';

import { DefaultDataServiceConfig, EntityDataModule } from '@ngrx/data';
import { entityConfig } from './entity-metadata';

const apiRoot = environment.apiUrlBase + '/';
const defaultDataServiceConfig: DefaultDataServiceConfig = {
  /**
   * The API root is /api/* by default. You can override it here.
   */
  root: apiRoot,
  /**
   * By default the APIs are at api/collection-name in the entityHttpResourceUrls.
   * We're overriding that behavior here just to show how it can be done.
   */
  entityHttpResourceUrls: {
    Customer: {
      entityResourceUrl: apiRoot + 'customers/',
      collectionResourceUrl: apiRoot + 'customers/',
    },
    Order: {
      entityResourceUrl: apiRoot + 'orders/',
      collectionResourceUrl: apiRoot + 'orders/',
    },
  },
};

@NgModule({
  imports: [
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot(entityConfig),
    environment.production ? [] : StoreDevtoolsModule.instrument(),
  ],
  providers: [
    { provide: DefaultDataServiceConfig, useValue: defaultDataServiceConfig },
  ],
})
export class AppStoreModule {}
