import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { routes } from './routes';
import { CoreModule } from './core/core.module';
import { ViewModelModule } from './view-model/view-model.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    RouterModule.forRoot(routes),
    ViewModelModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
