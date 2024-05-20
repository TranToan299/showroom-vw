import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CommonService } from "src/app/services/apis/common.service";
import { Meta, Title } from '@angular/platform-browser'
import { PAGE_META_DESCRIPTION, PAGE_TITLE } from 'src/app/constants/app-constants';

@Component({
    selector: 'app-owner-information',
    templateUrl: './owner-information.component.html',
    styleUrls: ['./owner-information.component.scss']
})
export class OwnerInformationComponent implements OnInit {

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private commonService: CommonService,
        private meta: Meta,
        private titleService:Title
    ) { this.titleService.setTitle(`${PAGE_TITLE.usefulInfo} | Volkswagen Việt Nam`);  }

    device: string = "";
    changeWidth() {
        var w = window.innerWidth;
        var informationBanner = (<HTMLImageElement>document.getElementById("informationBanner"));
        if (w <= 576) {
            if(this.device!="mobile"){
                informationBanner.src = './assets/images/owner/informationBanner-mobile.webp';
            }
            this.device = "mobile";
        }
        else if (w <= 820) {
            if(this.device!="tablet"){
                informationBanner.src = './assets/images/owner/informationBanner-tablet.webp';
            }
            this.device = "tablet";
        }
        else {
            if(this.device!="pc"){
                informationBanner.src = './assets/images/owner/informationBanner-pc.webp';
            }
            this.device = "pc";
        }
    }

    content: any = [
        {
            component: "owner-main-title",
            title: "Thông tin hữu ích về chiếc Volkswagen của bạn"
        },
        {
            component: "owner-reference",
            title: 'Hướng dẫn sử dụng dành cho chủ sở hữu',
            description: 'Bạn không cần phải nhớ mọi chức năng, đèn cảnh báo và mọi bộ phận của chiếc xe. Hướng dẫn sử dụng dành cho chủ sở hữu sẽ hỗ trợ bạn điều đó',
            link: {
                name: 'Tham khảo hướng dẫn giành cho chủ sở hữu',
                value: '#'
            }
        },
        {
            component: "owner-detail-horizontal",
            description: 'Đèn cảnh báo bất ngờ hiện trên bảng điều khiển khiến bạn bối rối. Để giúp bạn xác định nhanh chóng vấn đề, chúng tôi cung cấp các hướng dẫn liên quan đến đèn cảnh báo',
            image: 'https://vw-image.s3.ap-southeast-1.amazonaws.com/video/infomation-1.webp',
            title:"Ý nghĩa của đèn cảnh báo",
            link: '/owner/warning-light'
        },
    ]
    ngOnInit(): void {
        this.changeWidth();
        window.addEventListener("resize", this.changeWidth);
        this.meta.updateTag({ name: 'description', content: PAGE_META_DESCRIPTION.usefulInfo });
    }
    //   data: any
}
