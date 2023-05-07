import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ComponentInheritanceRoutingModule } from './component-inheritance-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ComponentInheritanceRoutingModule,
        ComponentInheritanceRoutingModule.components
    ]
})
export class ComponentInheritanceModule { }
