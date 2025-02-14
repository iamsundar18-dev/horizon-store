import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'top-nav',
    templateUrl: 'top-nav.component.html'
})

export class TopNavComponent implements OnInit {
    
    constructor(public router: Router) { }

    ngOnInit() { }

    goToHomePage() {
        this.router.navigate(['/'])
    }
    
    goToProductList() {
        this.router.navigate(['products'])
    }
}