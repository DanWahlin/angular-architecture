import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcmeSharedModule } from 'projects/acme-shared/src/public_api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AcmeSharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
