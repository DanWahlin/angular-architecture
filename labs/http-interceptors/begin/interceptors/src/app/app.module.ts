import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { coreComponents } from "./core";
import { heroComponents } from "./heroes";
import { SharedModule } from "./shared/shared.module";
import { AppStoreModule } from "./store/store.module";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent, coreComponents, heroComponents],
  imports: [BrowserModule, HttpClientModule, SharedModule, AppStoreModule],
  providers: [
    // provide the interceptors
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
