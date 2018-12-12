import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientRxJSComponent } from './httpClientRxJS.component';

const routes: Routes = [
    { path: 'httpclient-rxjs', component: HttpClientRxJSComponent }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class HttpClientRxJSRoutingModule {
    static components = [ HttpClientRxJSComponent ]
}