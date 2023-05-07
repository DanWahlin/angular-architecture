import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectsRoutingModule } from './subjects-routing.module';

@NgModule({
    imports: [
        CommonModule,
        SubjectsRoutingModule,
        SubjectsRoutingModule.components
    ]
})
export class SubjectsModule { }