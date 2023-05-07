import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ComponentInheritanceRoutingModule } from './component-inheritance-routing.module';

@NgModule({
  declarations: [ComponentInheritanceRoutingModule.components],
  imports: [
    CommonModule,
    FormsModule,
    ComponentInheritanceRoutingModule
  ]
})
export class ComponentInheritanceModule { }
