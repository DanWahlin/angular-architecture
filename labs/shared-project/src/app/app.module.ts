import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedLibModule } from 'shared-lib';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SharedLibModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
