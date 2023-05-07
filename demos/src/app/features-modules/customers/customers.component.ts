import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-customers',
    template: `
        <h4>Lazy Loaded Customers Feature</h4>
        <br />
        Feature has a routing module imported into its own module.
    `,
    standalone: true
})
export class CustomersComponent implements OnInit {

    constructor() { }

    ngOnInit() { 

    }

}