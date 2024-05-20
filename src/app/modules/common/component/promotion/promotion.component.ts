import { Component, Input, OnInit } from "@angular/core";
import { ImageModel, PromotionModel } from "../model";
import { CommonService } from "src/app/services/apis/common.service";
import { Meta, Title } from "@angular/platform-browser";
import { PAGE_META_DESCRIPTION, PAGE_TITLE } from "src/app/constants/app-constants";

@Component({
    selector: 'promotion',
    templateUrl: './promotion.component.html',
    styleUrls: ['./promotion.component.scss']
})
export class PromotionComponent implements OnInit {
    constructor(
        private commonService: CommonService, private meta: Meta,
        private titleService:Title,){ this.titleService.setTitle(`${PAGE_TITLE.promotion} | Volkswagen Việt Nam`);  }
    ngOnInit(): void {
        this.meta.updateTag({ name: 'description', content: PAGE_META_DESCRIPTION.promotion });
        // send view
        this.commonService.getIp().subscribe((data: any) => {
            let ip = data.ip
            this.commonService.putAnalyticsURL({ URL: window.location.href, Ip: ip }).subscribe((data: any) => {
            })
        })
        // scroll top -- khó hiểu 
        window.scrollTo({ top: 0, })

        this.commonService.getAllNews().subscribe((data: any) => {
            let promotion = data.find((item: any) => item.IsActive && item.Type == 'promotion')
            // console.log(promotion)
            this.commonService.getNewsById(promotion.Id).subscribe((data: any) => {
                this.promotion = data
                // console.log(this.promotion)
                let content: any = document.querySelector('.content')
                content.innerHTML = data.content
            });
        });

    }

    ngAfterViewInit() {
        // Execute the Google Tag Manager script
        const script = document.createElement('script');
        script.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-MRBR8B');`;
        document.head.appendChild(script);
      }
    promotion: any = {}

}