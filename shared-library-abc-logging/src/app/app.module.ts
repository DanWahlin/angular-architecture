import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { BrowserLoggerModule } from 'browser-logger';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserLoggerModule.forRoot(environment)],
  bootstrap: [AppComponent],
})
export class AppModule {}
