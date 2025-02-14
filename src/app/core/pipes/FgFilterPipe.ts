// search.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'searchFilter',
    pure: false
})
export class SearchPipe implements PipeTransform {
    transform(products: any[], searchText: string): any[] {
        if (!products || !searchText) {
            return products;
        }
        return products.filter(product =>
            product.title.toLowerCase().includes(searchText.toLowerCase())
        );
    }
}