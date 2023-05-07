import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';

import { SimpleCustomerListComponent } from './simple-customer-list.component';
import { IsoCustomerDetailsComponent } from './iso-customer-details.component';
import { IsoContainerComponent } from './iso-container.component';
import { IsoShellComponent } from './iso-shell.component';

const routes: Routes = [{ path: '', component: IsoShellComponent }];

/** Isolation VM Demo - NgModule */
@NgModule({
    imports: [CommonModule, FormsModule, SharedModule, RouterModule.forChild(routes), IsoCustomerDetailsComponent, SimpleCustomerListComponent, IsoContainerComponent, IsoShellComponent]
})
export class IsoModule {}
