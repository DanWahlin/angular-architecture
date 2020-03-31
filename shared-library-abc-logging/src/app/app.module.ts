import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { BrowserLoggerModule } from 'projects/browser-logger/src/public-api';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserLoggerModule.forRoot(environment)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
