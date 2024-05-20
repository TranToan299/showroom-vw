import { Component, Input, OnInit } from "@angular/core";
import { Product } from "src/app/models/product.model";
import { backgroundCars, colorCars } from "src/app/mocks/colorCars";

@Component({
    selector: 'products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss']
}) export class ProductsComponent implements OnInit {
    @Input() products: Product[] = []
    responsiveOptions: any
    ngOnInit(): void {
        this.responsiveOptions = [
            {
                breakpoint: '1024px',
                numVisible: 3,
                numScroll: 1
            },
            {
                breakpoint: '768px',
                numVisible: 2,
                numScroll: 1
            },
            {
                breakpoint: '560px',
                numVisible: 2,
                numScroll: 1
            },
            {
                breakpoint: '420px',
                numVisible: 1,
                numScroll: 1
            }
        ];
        // console.log(this.products)
    }
    backgroundCars: any = backgroundCars
    clickItem(item: any) {
        let name
        name = item.name.toLowerCase()
        if (item.name.includes('Tiguan')) name = 'tiguan'

        location.replace(`http://202.143.110.137:9000/3d/${name}`)
    }

}

