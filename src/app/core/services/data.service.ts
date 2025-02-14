import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class DataService {
    
    constructor(public http: HttpClient) { }

    baseUrl: string = "https://fakestoreapi.com"


    getProducts(): Observable<any> {
        let url = this.baseUrl + '/products'
        return this.http.get<any>(url);
    }
}