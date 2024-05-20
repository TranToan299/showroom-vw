import { listProduct, additionalInformationCategory } from './../../../mocks/listProduct';
import { Component, OnInit, OnDestroy } from "@angular/core";
import { CommonService } from "src/app/services/apis/common.service";
import { ProductService } from "src/app/services/apis/products.service";
import { Meta } from '@angular/platform-browser'
import { MessageService } from 'primeng/api';
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
    constructor(
        private commonService: CommonService,
        private meta: Meta,
        private messageService: MessageService
    ) { }
    

    ngOnInit() {
        let bubbleContainer = document.getElementById('chatBubblesContainer');
        if(bubbleContainer)
            bubbleContainer.style.display = "none";
        // set meta
        // this.meta.addTags([
        //     { name: 'description', content: 'Volkswagen Việt Nam' },
        //     { name: 'keywords', content: 'Volkswagen Việt Nam, Volkswagen, Virtual studio, Volkswage Showroom' },
        //     { name: 'author', content: 'Volkswagen Việt Nam' },

        // ]);
        // update meta
        this.meta.updateTag({ name: 'description', content: 'Volkswagen Việt Nam' });
        this.meta.updateTag({ name: 'keywords', content: 'Volkswagen Việt Nam, Volkswagen, Virtual studio, Volkswage Showroom' });
        this.meta.updateTag({ name: 'author', content: 'Volkswagen Việt Nam' });
        // send view
        this.commonService.getIp().subscribe((data: any) => {
            let ip = data.ip
            console.log({ URL: window.location.href, Ip: ip })
            this.commonService.putAnalyticsURL({ URL: window.location.href, Ip: ip }).subscribe((data: any) => {
                console.log('putAnalyticsURL')
                console.log({ URL: window.location.href, Ip: ip })
            })
        })
        // effect scroll down
        this.idEffect = setInterval(this.effectBtnScroll, 1000)
        // scroll top -- khó hiểu 
        window.scrollTo({ top: 0, })
        // get data news
        this.commonService.getAllNews().subscribe((data: any) => {
            // console.log('data', data)
            this.news = data.find((item: any, index: number) => {
                return item.IsActive && item.Type == 'new'
            })
            this.promotion = data.find((item: any, index: number) => {
                return item.IsActive && item.Type == 'promotion'
            })
            // console.log('news', this.news)
            // console.log('promotion', this.promotion)
        })
        this.commonService.getCategory().subscribe((data: any) => {
            console.log('data', data)
            data.forEach((item: any) => {
                if (item.IsActive && item.Id !== 33 && item.Id !== 30 && item.Id !== 36) {

                    this.listProduct.push({ ...item, ...additionalInformationCategory[item.Id] })
                }
                // this.listProduct.push({ ...item, ...additionalInformationCategory[item.Id] })
            })
            
            console.log('this.listProduct', this.listProduct)
            
            
        })
        // this.commonService.getListOwner().subscribe((data: any) => {
        //     console.log('data', data)
        //     data.forEach((item: any) => {
        //         if (item.IsActive) {
        //             this.pageContents.push({ ...item})
        //         }
        //     })
        //     console.log('this.pagecontents', this.pageContents)
        // })
    }
    ngOnDestroy() {
        clearInterval(this.idEffect);
    }
    idEffect?: any
    listProduct: any = [
        {
            "Id": 20,
            "Name": "New Teramont X",
            "ImageUrl": "../../../../assets/images/teramont-x/FULL-XE-THUBNAIL-WEB_TERAMONT-X.png",
            "SortOrder": 1,
            "SeoAlias": "New Teramont X",
            "SeoDescription": "SUV 7 chỗ đích thực - Đỉnh cao chủ động",
            "SeoKeyword": "New Teramont X",
            "SeoTitle": "New Teramont X",
            "ParentId": 0,
            "IsActive": true,
            "bgColor": "#b9bdc0",
            "link": "/product/teramont_x"
        },
        {
            "Id": 33,
            "Name": "Viloran",
            "ImageUrl": "../../../../assets/images/viloran/FULL-XE-THUBNAIL-WEB_VILORAN.png",
            "SortOrder": 1,
            "SeoAlias": "Viloran",
            "SeoDescription": "SUV 7 chỗ đích thực - Đỉnh cao chủ động",
            "SeoKeyword": "Viloran",
            "SeoTitle": "Viloran",
            "ParentId": 0,
            "IsActive": true,
            "bgColor": "#770912",
            "link": "/viloran"
        },
        {
            "Id": 30,
            "Name": "Touareg",
            "ImageUrl": "../../../../assets/images/touareg/FULL-XE-THUBNAIL-WEB_TOUAREG.png",
            "SortOrder": 1,
            "SeoAlias": "Touareg",
            "SeoDescription": "Touareg",
            "SeoKeyword": "Touareg",
            "SeoTitle": "Touareg",
            "ParentId": 0,
            "IsActive": true,
            "bgColor": "#f1e5d6",
            "link": "/touareg"
        }
    ]

    news: any = {}
    pageContents: any = []
    promotion: any = {}
    clickBtnScrollBottom() {
        let listProduct: any = document.querySelector('.listProduct')
        if (listProduct) listProduct.scrollIntoView({ behavior: 'smooth' });
    }
    effectBtnScroll() {
        let icon: any = document.querySelector('.wrapScrollBottom .scrollBottom i')
        if (icon.style.transform == 'translateY(8px)') {
            icon.style.transition = 'all ease  0s'
            icon.style.opacity = '0'

            icon.style.transform = 'translateY(-8px)'
            icon.style.webkitTransform = 'translateY(-8px)'
            icon.style.msTransform = 'translateY(-8px)'
        } else {
            icon.style.transition = 'all ease  0.8s'
            icon.style.opacity = '1'

            icon.style.transform = 'translateY(8px)'
            icon.style.webkitTransform = 'translateY(8px)'
            icon.style.msTransform = 'translateY(8px)'

        }
    }
}