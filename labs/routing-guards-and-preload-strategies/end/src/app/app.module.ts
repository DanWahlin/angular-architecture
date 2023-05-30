import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CoreModule, NetworkAwarePreloadStrategy } from './core';
import { RouterModule } from '@angular/router';
import { routes } from './routes';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    HttpClientModule,
    // Solution - PreloadAllModules or PreloadSelectedModulesList or NetworkAwarePreloadStrategy
    RouterModule.forRoot(routes, {
    preloadingStrategy: NetworkAwarePreloadStrategy
}),
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
