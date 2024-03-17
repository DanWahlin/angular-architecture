/*** DELETE THIS MODULE ***/

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { CoreModule } from './core'; // <-- Delete the CoreModule import

import { NetworkAwarePreloadStrategy } from './core';
import { RouterModule } from '@angular/router';
import { routes } from './routes';

// Import the ToolbarComponent
// import { ToolbarComponent } from './core/toolbar/toolbar.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes, {
      preloadingStrategy: NetworkAwarePreloadStrategy,
    }),

    CoreModule, // <-- Delete the CoreModule import
    // Import the ToolbarComponent instead
    // ToolbarComponent

  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
