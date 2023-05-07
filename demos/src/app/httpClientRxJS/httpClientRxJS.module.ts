import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientRxJSRoutingModule } from './httpClientRxJS-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, HttpClientRxJSRoutingModule, ReactiveFormsModule, HttpClientRxJSRoutingModule.components],
})
export class HttpClientRxJSModule { }