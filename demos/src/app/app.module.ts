import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PlanningModule } from './planning/planning.module';
import { StructuringComponentsModule } from './structuring-components/structuring-components.module';
import { CoreModule } from './core/core.module';
import { CommunicationModule } from './communication/communication.module';
import { PipesFunctionsModule } from './pipes-functions/pipes-functions.module';
import { SubjectsModule } from './subjects/subjects.module';

@NgModule({
  imports: [ 
    BrowserModule, 
    CoreModule,
    AppRoutingModule,
    PlanningModule,
    StructuringComponentsModule,
    PipesFunctionsModule,
    CommunicationModule,
    SubjectsModule
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }