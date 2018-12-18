import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AppStoreModule } from './store/app-store.module';
import { MetaReducer, StoreModule } from '@ngrx/store';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

export const metaReducers: MetaReducer<any>[] = environment.production ? []: []; 

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    HttpClientModule,
    AppRoutingModule,
    AppStoreModule,
    StoreModule.forRoot({}, { metaReducers }),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
