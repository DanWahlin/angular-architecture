import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducers } from './reducers';
import { CustomerEffects } from './effects/customer.effects';
import { OrderEffects } from './effects/order.effects';
import { CustomerDataService, CustomerSelectors, OrderDataService, OrderSelectors } from './services';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature('entityCache', reducers),
    EffectsModule.forFeature([ CustomerEffects, OrderEffects ])
  ],
  providers: [
    CustomerDataService,
    CustomerSelectors,
    OrderDataService,
    OrderSelectors
  ],
  exports: [StoreModule, EffectsModule]
})
export class AppStoreModule {}
