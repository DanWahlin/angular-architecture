import { enableProdMode, importProvidersFrom } from '@angular/core';
import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { HttpClientRxJSModule } from './app/httpClientRxJS/httpClientRxJS.module';
import { ComponentInheritanceModule } from './app/component-inheritance/component-inheritance.module';
import { SubjectsModule } from './app/subjects/subjects.module';
import { ViewModelModule } from './app/view-model/view-model.module';
import { CommunicationModule } from './app/communication/communication.module';
import { PipesFunctionsModule } from './app/pipes-functions/pipes-functions.module';
import { StructuringComponentsModule } from './app/structuring-components/structuring-components.module';
import { PlanningModule } from './app/planning/planning.module';
import { AppRoutingModule } from './app/app-routing.module';
import { CoreModule } from './app/core/core.module';
import { provideAnimations } from '@angular/platform-browser/animations';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, CoreModule, AppRoutingModule, PlanningModule, StructuringComponentsModule, 
          PipesFunctionsModule, CommunicationModule, ViewModelModule, SubjectsModule, ComponentInheritanceModule, HttpClientRxJSModule),
        provideAnimations()
    ]
})
  .catch(err => console.error(err));
