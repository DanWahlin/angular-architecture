import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PlanningModule } from './planning/planning.module';
import { StructuringComponentsModule } from './structuring-components/structuring-components.module';
import { CoreModule } from './core/core.module';
import { CommunicationModule } from './communication/communication.module';

@NgModule({
  imports: [ 
    BrowserModule, 
    CoreModule,
    AppRoutingModule,
    PlanningModule,
    StructuringComponentsModule,
    CommunicationModule
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }