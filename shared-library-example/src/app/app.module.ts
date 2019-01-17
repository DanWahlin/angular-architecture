import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcmeSharedModule } from 'acme-shared';

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
