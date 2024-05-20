import { Component, OnInit } from '@angular/core';
import { CommonService } from "src/app/services/apis/common.service";
import { Meta } from '@angular/platform-browser'

@Component({
    selector: 'app-passat',
    templateUrl: './passat.component.html',
    styleUrls: ['./passat.component.scss']
})
export class PassatComponent implements OnInit {

    constructor(
        private commonService: CommonService,
        private meta: Meta) { }
    device: string = "";

    changeWidth() {
        var w = window.innerWidth;
        var passatBanner = (<HTMLImageElement>document.getElementById("passatBanner"));
        if (w <= 576) {
            if (this.device != "mobile") {
                passatBanner.src = './assets/images/cate/passat/bannerMobile.webp';
            }
            this.device = "mobile";
        }
        else if (w <= 780) {
            if (this.device != "tablet") {
                passatBanner.src = './assets/images/cate/passat/bannerTablet.webp';
            }
            this.device = "tablet";
        }
        else {
            if (this.device != "pc") {
                passatBanner.src = './assets/images/cate/passat/banner.jfif';
            }
            this.device = "pc";
        }
    }

    ngOnInit(): void {
        this.changeWidth();
        window.addEventListener("resize", this.changeWidth);
        // scroll top -- khó hiểu
        window.scrollTo({ top: 0, })
        // update meta
        this.commonService.getCategoryById(6).subscribe((data: any) => {
            //console.log(data)
            this.meta.updateTag({ name: 'description', content: data.SeoDescription });
            this.meta.updateTag({ name: 'keywords', content: data.SeoKeyword });
        })
        // send view
        this.commonService.getIp().subscribe((data: any) => {
            let ip = data.ip
            //console.log({ URL: window.location.href, Ip: ip })
            this.commonService.putAnalyticsURL({ URL: window.location.href, Ip: ip }).subscribe((data: any) => {
                //console.log('putAnalyticsURL')
                //console.log({ URL: window.location.href, Ip: ip })
            })
        })

    }
    // nội thất
    imageInterior: string = './assets/images/cate/passat/interior0.jfif'
    onInteriorTabOpen(e: any) {
        let index = e.index
        this.imageInterior = `./assets/images/cate/passat/interior${index}.jfif`
    }
    // nội thất
    imageDesign: string = './assets/images/cate/passat/design0.jfif'
    onDesignTabOpen(e: any) {
        let index = e.index
        this.imageDesign = `./assets/images/cate/passat/design${index}.jfif`
    }

}
