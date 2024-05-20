import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CommonService } from "src/app/services/apis/common.service";
import { Meta, Title } from '@angular/platform-browser'
import { PAGE_META_DESCRIPTION, PAGE_TITLE } from 'src/app/constants/app-constants';

@Component({
    selector: 'app-owner-insurance',
    templateUrl: './owner-insurance.component.html',
    styleUrls: ['./owner-insurance.component.scss']
})
export class OwnerInsuranceComponent implements OnInit {

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private commonService: CommonService,
        private titleService:Title,
        private meta: Meta
    ) { this.titleService.setTitle(`${PAGE_TITLE.warranty} | Volkswagen Việt Nam`);  }
    device: string = "";
    changeWidth() {
        var w = window.innerWidth;
        var insuranceBanner = (<HTMLImageElement>document.getElementById("insuranceBanner"));
        if (w <= 576) {
            if(this.device!="mobile"){
                insuranceBanner.src = './assets/images/owner/insurance-mobile.webp';
            }
            this.device = "mobile";
        }
        else if (w <= 820) {
            if(this.device!="tablet"){
                insuranceBanner.src = './assets/images/owner/insurance-tablet.webp';
            }
            this.device = "tablet";
        }
        else {
            if(this.device!="pc"){
                insuranceBanner.src = './assets/images/owner/insurance-pc.webp';
            }
            this.device = "pc";
        }
    }

    title: any = {
        component: "owner-main-title",
        title: "Bảo hành xe mới"
    }
    
    ngOnInit(): void {
        this.changeWidth();
        window.addEventListener("resize", this.changeWidth);

        this.meta.updateTag({ name: 'description', content: PAGE_META_DESCRIPTION.warranty });
    }
    //   data: any
}
