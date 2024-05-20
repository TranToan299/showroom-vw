import { Component, OnInit, Renderer2, Inject } from '@angular/core';
import { CommonService } from "src/app/services/apis/common.service";
import { Meta } from '@angular/platform-browser'
import { DOCUMENT } from '@angular/common';
import {Title} from "@angular/platform-browser";
@Component({
    selector: 'app-polo-v2',
    templateUrl: './polo-v2.component.html',
    styleUrls: ['./polo-v2.component.scss']
})
export class PoloV2Component implements OnInit {

    constructor(
        private commonService: CommonService,
        private meta: Meta,
        private titleService:Title,
        private _renderer2: Renderer2,
        @Inject(DOCUMENT) private _document: Document
    ) {this.titleService.setTitle("Polo | Volkswagen Việt Nam");   }
    device: string = "";

    changeWidth() {
        var w = window.innerWidth;
        var poloBanner = (<HTMLImageElement>document.getElementById("poloBanner"));
        if (w <= 576) {
            if (this.device != "mobile") {
                poloBanner.src = './assets/images/cate/polo/bannerMobile.webp';
            }
            this.device = "mobile";
        }
        else if (w <= 820) {
            if (this.device != "tablet") {
                poloBanner.src = './assets/images/cate/polo/bannerTablet.webp';
            }
            this.device = "tablet";
        }
        else {
            if (this.device != "pc") {
                poloBanner.src = './assets/images/cate/polo/banner.webp';
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
        this.commonService.getCategoryById(7).subscribe((data: any) => {
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
        // add script tg to html
        let script1 = this._renderer2.createElement('script');
        let script2 = this._renderer2.createElement('script');
        script1.src = '//static.accesstrade.vn/js/trackingtag/tracking.min.js';
        script2.type = `text/javascript`;
        script2.text = `
      AT.init({"campaign_id":2241, "is_reoccur": 0,"is_lastclick": 1} );
      AT.track();
      
    `;
    //console.log('---------test script---------')
        this._renderer2.appendChild(this._document.body, script1);
        setTimeout(() => {
            this._renderer2.appendChild(this._document.body, script2);
        }, 1000)
    }
    content: any = [
        {
            component: "app-category-banner",
            image: "./assets/images/cate/polo/banner.webp",
            imageTablet: "./assets/images/cate/polo/bannerTablet.webp",
            imageMobile: "./assets/images/cate/polo/bannerMobile.webp",
        },
        {
            component: "app-category-main-title",
            title: "Polo"
        },
        {
            component: "app-category-summary",
            content: [
                {
                    title: 'Giá từ (VNĐ)',
                    value: '695.000.000'
                },
                {
                    title: 'Công suất tối đa',
                    value: '105 Hp'
                },
                {
                    title: 'Mô men xoắn tối đa',
                    value: '153Nm'
                },
                {
                    title: 'Tiêu thụ nhiên liệu kết hợp',
                    value: '7,41 lit/100km'
                },
                {
                    title: 'Tiêu thụ nhiên liệu trong đô thị',
                    value: '9,84 lit/100km'
                },
                {
                    title: 'Tiêu thụ nhiên liệu ngoài đô thị',
                    value: '5,99 lit/100km' 
                },
            ]
        },
        {
            component: "app-category-brochure",
            name: "Tải Brochure",
            link: './assets/images/cate/polo/polo-brochure.pdf'
        },
        {
            component: "app-category-h1",
            name: "Giải pháp cho dòng xe đô thị",
            mt: '',
            description: `Thiết kế cá tính và năng động cùng với không gian ngồi thoải mái cho 5 người, khả
      năng vận hành linh hoạt và đa dạng về màu sắc. Polo mang lại giải pháp hoàn hảo cho một chiếc hatchback dành cho đô
      thị.`,
            isCenterDescription: false
        },
        {
            component: "app-category-special-features",
            title: "Các trang thiết bị chính",
            mt: '',
            content: [
                {
                    image: './assets/images/cate/polo/equipment0.webp',
                    title: 'Khung xe liền khối sử dụng thép chịu lực cao',
                    description: 'Khung xe liền khối mang lại trải vận hành xe ổn định và cứng vững và an toàn'
                },
                {
                    image: './assets/images/cate/polo/equipment1.webp',
                    title: 'Thiết kế ngoại thất năng động và trẻ trung',
                    description: 'Bạn sẽ dễ dàng nhận ra Polo ngay cả khi di chuyển trong phố đông'
                },
                {
                    image: './assets/images/cate/polo/equipment2.webp',
                    title: 'Hộp số tự động 6 cấp với chức năng sang số thể thao',
                    description: 'Không chỉ vận hành mượt mà với chế độ 6 số tự động, leo dốc và xuống dốc an toàn với chế độ số sử dụng phanh động cơ, Polo còn mang lại cảm giác lái thể thao tuyệt vời với chế độ số thể thao S.'
                }
            ]
        },
        {
            component: "app-category-tab-horizontal",
            title: "Nội thất rộng rãi và tiện nghi",
            mt: '',
            content: [
                {
                    header: 'Nội thất bọc da sang trọng',
                    image: './assets/images/cate/polo/interior0.jfif',
                    title: `Nội thất bọc da hài hòa và sang trọng với tông màu đen, ấm
          cúng với tùy chọn màu kem.`,
                    description: ''
                },
                {
                    header: 'Hệ thống điều hòa tự động Climatetronic',
                    image: './assets/images/cate/polo/interior1.jfif',
                    title: `Bạn sẽ thực sự dễ chịu khi không khí luôn duy trì được nhiệt
          độ mà bạn mong muốn.`,
                    description: `Điều hòa không khí tự động giúp không khí trong xe luôn duy trì nhiệt độ mà bạn
          cài đặt.`
                },
                {
                    header: 'Tay lái bọc da, tích hợp nhiều phím điều khiển âm thanh',
                    image: './assets/images/cate/polo/interior2.jfif',
                    title: `Điều khiển xe dễ dàng với tay lái bọc da tích hợp các phím đa
          chức năng`,
                    description: `Tay lái bọc da 3 chấu phẳng đáy, kết hợp với các chi tiết trang trí mạ bạc`,
                    list: [
                        'Các phím bấm tích hợp điều khiển hệ thống âm thanh',
                        'Tích hợp nút điều khiển hệ thống kiểm soát hành trình'
                    ]
                },
                {
                    header: 'Hệ thống giải trí đa năng Composition Media 6.5',
                    image: './assets/images/cate/polo/interior3.jfif',
                    title: `Hệ thống giải trí đa năng giúp mọi chuyến hành trình trở nên
          thư giãn và thú vị`,
                    description: ``,
                    list: [
                        `Hệ thông màn hình giải trí đa chức năng Composition Media 6.5 inch điều khiển cảm ứng. Tích hợp cổng AUX, SD card, USB, Bluetooth, App-conect.`,
                        'Màn hình còn có chức năng hiển thị tín hiệu của hệ thống kiểm soát cự li đỗ xe PDC và các chức năng cài đặt liên quan đến vận hành xe.'
                    ]
                },
            ]
        },
        {
            component: "app-category-photo-gallery",
            title: "",
            content: [
                './assets/images/cate/polo/exterior0.webp',
                './assets/images/cate/polo/exterior1.webp',
                './assets/images/cate/polo/exterior2.webp'
            ],
            mt: '120px'
        },
        {
            component: "app-category-tab-horizontal",
            title: "Thiết kế",
            mt: '',
            content: [
                {
                    header: 'Thiết kế',
                    image: './assets/images/cate/polo/design0.jfif',
                    title: `Thiết kế năng động`,
                    description: '',
                    list: [
                        'Lưới tản nhiệt thiết kế thể thao',
                        'Cản trước và đèn trước thiết kế hài hòa',
                        'Mâm xe thanh lịch và tinh tế',
                        'Thiết kế đuôi xe cứng cáp và gọn gàng',
                        'Cánh hướng gió và bộ ốp lườn xe tăng dáng vẻ thể thao',
                    ]
                },
                {
                    header: 'Nội thất phong cách',
                    image: './assets/images/cate/polo/design1.jfif',
                    title: `Nội thất phong cách và thoáng đãng`,
                    description: ``,
                    list: [
                        'Các chi tiết được phối màu hài hòa',
                        'Không gian yên tĩnh và thoải mái cho 5 người ngồi',
                        'Ghế bọc da êm ái và tiện nghi với tùy chọn màu đen hoặc kem.',
                        'Tay lái bọc da 3 chấu có nút chỉnh âm thanh và màn hình thông tin',
                        'Tay nắm cần số bọc da và mạ bạc',
                        'Gương chiếu hậu trong xe chống chói'
                    ]
                },
                {
                    header: 'Vận hành',
                    image: './assets/images/cate/polo/design2.jfif',
                    title: ``,
                    description: ``,
                    list: [
                        'Động cơ I4 dung tích 1.6l mạnh mẽ và tiết kiệm nhiên liệu',
                        'Công suất cực đại 105Hp/5250 vòng/phút',
                        'Mô men xoắn cực đại 153 Nm/3750 vòng/phút',
                        'Hộp số tự động 6 cấp số với chức năng sang số thể thao',
                        'Trợ lực lái điện, đánh lái chính xác và nhẹ nhàng',
                        'Tiêu hao nhiên liệu trong điều kiện đường hỗn hợp là: 7,4l/100km',
                        'Tiêu chuẩn khí thải EURO4'
                    ]
                },
                {
                    header: 'An toàn công nghệ',
                    image: './assets/images/cate/polo/design3.jfif',
                    title: ``,
                    description: ``,
                    list: [
                        `Hệ thống kiểm soát cự ly đỗ xe PDC với tín hiệu cảnh báo trên màn hình giải trí đa thông tin.`,
                        'Camera lùi',
                        'Hệ thống chống bó cứng phanh ABS',
                        'Hệ thống kiểm soát hành trình Cruise Control',
                        'Túi khí cho người lái và hành khách phía trước',
                        'Hệ thống mã hóa động cơ Immobilizer và cảnh báo chống trộm',
                        'Hệ thống lái trợ lực điện hỗ trợ đánh lái thoải mái & chính xác',
                        'Dây đai an toàn 3 điểm cho tất cả các ghế',
                        'Trợ lực lái điện biến thiên theo tốc độ',
                        'Thân xe thiết kế tối ưu bảo vệ hành khách và khách bộ hành khi xảy ra va chạm',
                        'Khung xe liền khối cấu trúc thiết kế thép chịu lực, độ cứng cao, bảo vệ hành khách ngồi bên trong',
                        'Kính chỉnh điện, 1 chạm với chức năng chống kẹt an toàn và lên xuống kính bằng chìa khóa',
                    ]
                },
            ]
        },
        {
            component: "app-category-reference",
            title: "Chi phí lăn bánh",
            mt: '120px',
            description: ``,
            link: {
                value: '/product/cost',
                name: 'Tham khảo thêm'
            }
        },
    ]

}
