import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CoreModule } from './core';
import { routes } from './routes';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    HttpClientModule,
    RouterModule.forRoot(routes, {
      // Uncomment the line of code below. Put the Preload Strategy here
      // preloadingStrategy: PreloadAllModules,
      // preloadingStrategy: PreloadSelectedModulesList,
      // preloadingStrategy: NetworkAwarePreloadStrategy,
      // preloadingStrategy: PreloadAllModules,
    }),
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
