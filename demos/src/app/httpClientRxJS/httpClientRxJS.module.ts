import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientRxJSRoutingModule } from './httpClientRxJS-routing.module';

@NgModule({
    imports: [ CommonModule, HttpClientRxJSRoutingModule ],
    declarations: [ HttpClientRxJSRoutingModule.components ],
})
export class HttpClientRxJSModule { }