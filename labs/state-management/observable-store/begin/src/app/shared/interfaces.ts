import { Customer, Order } from '../core/model';

export interface StoreState {
    customers: Customer[];
    customer: Customer;
    orders: Order[];
}