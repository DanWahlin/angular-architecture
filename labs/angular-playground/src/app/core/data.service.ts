import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    customers = [
        {
            id: 1,
            name: 'John Doe',
            city: 'Phoenix',
            age: 42
        },
        {
            id: 2,
            name: 'Jane Doe',
            city: 'Seattle',
            age: 30
        },
        {
            id: 3,
            name: 'Michelle Thompson',
            city: 'Orlando',
            age: 22
        }
        ];

        orders = [
        {
            id: 1,
            name: 'Basketball',
            price: 29.99
        },
        {
            id: 2,
            name: 'XBox',
            price: 249.99
        },
        {
            id: 3,
            name: 'Nintendo Switch',
            price: 249.99
        },
        {
            id: 4,
            name: 'Bat',
            price: 29.99
        },
        {
            id: 5,
            name: 'Glove',
            price: 29.99
        },
        {
            id: 6,
            name: 'Cell Phone',
            price: 799.99
        },
        {
            id: 7,
            name: 'Cell Phone Service',
            price: 49.99
        },
        {
            id: 8,
            name: 'Laptop',
            price: 999.99
        },
        {
            id: 9,
            name: 'Bluetooth Speaker',
            price: 69.99
        },
        {
            id: 10,
            name: 'TV',
            price: 1599.99
        }
        ];

    getCustomers() {
        return this.customers;
    }

    getOrders() {
        return this.orders;
    }

}