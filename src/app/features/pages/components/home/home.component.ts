import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    animations: [
        trigger('fadeIn', [
            transition(':enter', [
                style({ opacity: 0, transform: 'translateY(20px)' }),
                animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
            ])
        ])
    ]
})

export class HomeComponent implements OnInit {

    constructor(public router: Router) {}

    featuredProducts = [
        {
            id: 1,
            name: 'NextGen Backpack',
            price: 109.99,
            rating: 4.8,
            discount: 15,
            image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
            tag: 'New Arrival'
        },
        {
            id: 2,
            name: 'Mens Cotton Jacket',
            price: 55.99,
            rating: 4.8,
            discount: 15,
            image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
            tag: 'New Arrival'
        },
        {
            id: 3,
            name: 'Pierced Owl Rose Gold',
            price: 10.99,
            rating: 4.8,
            discount: 15,
            image: 'https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg',
            tag: 'New Arrival'
        },
        {
            id: 4,
            name: 'Rain Jacket Women Windbreaker',
            price: 39.99,
            rating: 4.8,
            discount: 15,
            image: 'https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg',
            tag: 'Hot Sale'
        },
    ];

    categories = [
        {
            name: 'Smart Gadgets',
            icon: 'devices',
            count: 156,
            bgColor: '#FF6B6B'
        },
    ];

    currentBannerIndex = 0;
    banners = [
        {
            title: 'Horizon Store',
            subtitle: 'The One-stop Shopping Destination',
            image: 'assets/images/banner1.jpg',
            cta: 'Shop Now'
        },
    ];

    ngOnInit() {
        
    }

    goToProductList() {
        this.router.navigate(['products'])
    }
}