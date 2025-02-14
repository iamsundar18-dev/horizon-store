import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { Router } from '@angular/router';
import { DataService } from '../../../core/services/data.service';

@Component({
    selector: 'product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss'],
})

export class ProductListComponent implements OnInit {

    constructor(public router: Router, public dataService: DataService) {}

    productObj: any = {};
    searchText: string = '';

    ngOnInit() {
        this.initializeValues();
    }

    initializeValues() {
        this.dataService.getProducts().subscribe((response: any) => {
            console.log(response);
            this.productObj.productList = response;
        })
    }

    getStarArray(rating: number): number[] {
        const totalStars = 5;
        const filledStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;
        const stars = [];

        for (let i = 1; i <= totalStars; i++) {
            if (i <= filledStars) {
                stars.push(1); // full star
            } else if (i === filledStars + 1 && hasHalfStar) {
                stars.push(0.5); // half star
            } else {
                stars.push(0); // empty star
            }
        }
        return stars;
    }
}