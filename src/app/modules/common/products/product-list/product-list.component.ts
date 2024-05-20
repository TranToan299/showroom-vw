import { Component, OnInit } from "@angular/core";
import { colorCars, backgroundCars } from "src/app/mocks/colorCars";
import { Product } from "src/app/models/product.model";
import { ProductService } from "src/app/services/apis/products.service";


@Component({
    selector: 'app-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
    constructor(
        private productService: ProductService
    ) { }
    ngOnInit(): void {
        this.productService.generateProduct().subscribe(p => this.products = p);
        // console.log(this.products)
    }
    colorCars: any = colorCars
    backgroundCars: any = backgroundCars
    products: Product[] = [];



}