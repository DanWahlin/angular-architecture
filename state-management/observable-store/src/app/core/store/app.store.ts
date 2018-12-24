import { Injectable } from "@angular/core";

import { ObservableStore } from '@codewithdan/observable-store';
import { Customer, Order } from '../model';
import { environment } from "../../../environments/environment";

export interface StoreState {
    customers: Customer[];
    customer: Customer;
    orders: Order[];
}

/*
    Define single store used throughout application. 
    Shape of data stored is defined by StoreState interface.

    Parameters passed to contructor:
    - Initial state (if any)
    - Store settings
*/

@Injectable({
    providedIn: 'root'
})
export class AppStore extends ObservableStore<StoreState> { 
    constructor() {
        super(null, { trackStateHistory: !environment.production });
    }
}