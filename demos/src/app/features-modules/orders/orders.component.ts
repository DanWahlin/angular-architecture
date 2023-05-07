import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-orders',
    template: `
        <h4>Lazy Loaded Orders Feature</h4>
        <br />
        Feature has a routing module imported into its own module.
    ` 
})
export class OrdersComponent implements OnInit {

    constructor() { }

    ngOnInit() { 

    }

}