import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentInheritanceComponent } from './component-inheritance.component';
import { Widget1Component } from './widget1/widget1.component';
import { Widget2Component } from './widget2/widget2.component';

const routes: Routes = [
    { path: 'component-inheritance', component: ComponentInheritanceComponent }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class ComponentInheritanceRoutingModule {
    static components = [ ComponentInheritanceComponent, Widget1Component, Widget2Component ];
}

