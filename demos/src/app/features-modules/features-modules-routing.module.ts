import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FeaturesModulesComponent } from './features-modules.component';

const routes: Routes = [
    { 
        path: '', 
        component: FeaturesModulesComponent,
        children: [
            { path: 'customers', loadChildren: './customers/customers.module#CustomersModule' },
            { path: 'orders', loadChildren: './orders/orders.module#OrdersModule' }
        ]
    }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class FeaturesModulesRoutingModule {
    static components = [ FeaturesModulesComponent ];
}

