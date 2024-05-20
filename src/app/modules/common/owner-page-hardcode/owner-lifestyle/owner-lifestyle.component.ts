import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CommonService } from "src/app/services/apis/common.service";
import { Meta, Title } from '@angular/platform-browser'
import { PAGE_META_DESCRIPTION, PAGE_TITLE } from 'src/app/constants/app-constants';

@Component({
    selector: 'app-owner-lifestyle',
    templateUrl: './owner-lifestyle.component.html',
    styleUrls: ['./owner-lifestyle.component.scss']
})
export class OwnerLifeStyleComponent implements OnInit {

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private commonService: CommonService,
        private titleService:Title,
        private meta: Meta
    ) { this.titleService.setTitle(`${PAGE_TITLE.lifestyle} | Volkswagen Việt Nam`);  }
    device: string = "";
    changeWidth() {
        var w = window.innerWidth;
        var bannerLifestyle = (<HTMLImageElement>document.getElementById("bannerLifestyle"));
        if (w <= 576) {
            if (this.device != "mobile") {
                bannerLifestyle.src = './assets/images/owner/lifestyle-mobile.webp';
            }
            this.device = "mobile";
        }
        else {
            if (this.device != "pc") {
                bannerLifestyle.src = './assets/images/owner/lifestyle.webp';
            }
            this.device = "pc";
        }
    }

    reference: any = {
        component: "owner-reference",
        title: 'Bạn quan tâm?',
        description: 'Có thể đặt hàng các phụ kiện mang đậm tính thời trang và ứng dụng cao của chúng tôi tại các đại lý ủy quyền. Cùng đón nhận cảm hứng được lan truyền từ nhưng bộ sưu tập và sản phẩm đa dạng.',
        link: {
            name: 'Tìm đại lí ủy quyền của Volkswagen',
            value: 'https://www.vw.com.vn/vi/volkswagen-dealer-search.html'
        }
    }
    horizontal: any = {
        description: 'Sự thanh lịch vượt thời gian. Với bộ sưu tập Cổ điển, chúng tôi luôn tôn trọng nguyên bản nhưng vẫn tìm thấy cho mình không gian riêng cho sự sáng tạo. Khám phá các sản phẩm của chúng tôi.',
        image: 'https://vw-image.s3.ap-southeast-1.amazonaws.com/video/lifestyle-1.webp',
        title:"Lấy ý tưởng từ những huyền thoại",
        link: 'https://www.vw.com.vn/vi/volkswagen-dealer-search.html'
    }


    ngOnInit(): void {
        this.changeWidth();
        window.addEventListener("resize", this.changeWidth);

        this.meta.updateTag({ name: 'description', content: PAGE_META_DESCRIPTION.lifestyle });
    }
    //   data: any
}
