import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'product-3d-list',
    templateUrl: './product-3d-list.component.html',
    styleUrls: ['./product-3d-list.component.css']
})

export class Product3DListComponent implements OnInit {
    constructor(private route: Router){}
    ngOnInit(): void {

    }
    public arrCar = ['polo', 'teramont', 'tiguan']
    selectCar(car: string){
        this.route.navigateByUrl(`/3d/${car}`)
    }
}
