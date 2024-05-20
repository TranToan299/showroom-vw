
import { map } from 'rxjs/operators'
import { Observable, of } from 'rxjs'
import { HttpClient, HttpParams } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from 'src/environments/environment'
import { Product } from 'src/app/models/product.model'
@Injectable()
export class ProductService {

    baseUrl = environment.baseUrl

    constructor(private http: HttpClient) { }

    // getListUser(params: {
    //     keyWord?: string
    //     role?: string
    //     approve?: string
    // }): Observable<any> {

    // }

    generateProduct() {
        let products: Product[] = []
        let arr: any = [
            {
                image: './assets/resources/Polo.svg',
                name: 'Polo',
                description: 'Lorem ipsum dolor sit amet',
                inventoryStatus: 'string',
                price: 10000,
                rating: 5,
                category: 'string'
            },
            {
                image: './assets/resources/TiguanAllspace.svg',
                name: 'Tiguan Elegance',
                description: 'Lorem ipsum dolor sit amet',
                inventoryStatus: 'string',
                price: 10000,
                rating: 5,
                category: 'string'
            },

            {
                image: './assets/resources/Passat.svg',
                name: 'Tiguan Luxury S',
                description: 'Lorem ipsum dolor sit amet',
                inventoryStatus: 'string',
                price: 10000,
                rating: 5,
                category: 'string'
            },
            {
                image: './assets/resources/Touareg.svg',
                name: 'Teramont',
                description: 'Lorem ipsum dolor sit amet',
                inventoryStatus: 'string',
                price: 10000,
                rating: 5,
                category: 'string'
            },
            {
                image: './assets/resources/Teramont.svg',
                name: 'New Model',
                description: 'Lorem ipsum dolor sit amet',
                inventoryStatus: 'string',
                price: 10000,
                rating: 5,
                category: 'string'
            },

        ]
        for (let i = 0; i < arr.length; i++) {
            let prod = new Product(arr[i]);
            products.push(prod);
        }
        // console.log(products)
        return of(products);
    }

}
