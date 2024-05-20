import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CommonService } from "src/app/services/apis/common.service";
import { Meta } from '@angular/platform-browser'

@Component({
    selector: 'app-owner-transport',
    templateUrl: './owner-transport.component.html',
    styleUrls: ['./owner-transport.component.scss']
})
export class OwnerTransportComponent implements OnInit {

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private commonService: CommonService,
        private meta: Meta
    ) { }
    device: string = "";
    changeWidth() {
        var w = window.innerWidth;
        var bannerTransport = (<HTMLImageElement>document.getElementById("bannerTransport"));
        if (w <= 576) {
            if (this.device != "mobile") {
                bannerTransport.src = './assets/images/owner/bannerTransport-mobile.webp';
            }
            this.device = "mobile";
        }
        else {
            if (this.device != "pc") {
                bannerTransport.src = './assets/images/owner/bannerTransport.webp';
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


    ngOnInit(): void {
        this.changeWidth();
        window.addEventListener("resize", this.changeWidth);
    }
    //   data: any
}
