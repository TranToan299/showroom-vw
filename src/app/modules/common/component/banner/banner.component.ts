import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { BannerModel } from "../model";

@Component({
    selector: 'banner',
    templateUrl: './banner.component.html',
    styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
    @Input() item: BannerModel = new BannerModel();
    constructor(private route: Router) {

    }
    ngOnInit(): void {
    }

    gotoVR() {
        this.route.navigateByUrl('vr-view');
    }
}