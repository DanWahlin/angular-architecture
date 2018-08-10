import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PipesFunctionsComponent } from './pipes-functions.component';

const routes: Routes = [
    { path: 'pipes-functions', component: PipesFunctionsComponent }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class PipesFunctionsRoutingModule {
    static components = [
        PipesFunctionsComponent
    ]
}