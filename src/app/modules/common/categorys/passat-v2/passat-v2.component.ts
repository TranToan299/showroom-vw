import { Component, OnInit } from '@angular/core';
import { CommonService } from "src/app/services/apis/common.service";
import { Meta } from '@angular/platform-browser'
import {Title} from "@angular/platform-browser";
@Component({
    selector: 'app-passat-v2',
    templateUrl: './passat-v2.component.html',
    styleUrls: ['./passat-v2.component.scss']
})
export class PassatV2Component implements OnInit {

    constructor(
        private commonService: CommonService,
        private titleService:Title,
        private meta: Meta
    ) {this.titleService.setTitle("Passat | Volkswagen Việt Nam");  }
    device: string = "pc";
    changeWidth() {
        var w = window.innerWidth;
        var passatBanner = (<HTMLImageElement>document.getElementById("passatBanner"));
        if (w <= 576) {
            if (this.device != "mobile") {
                passatBanner.src = './assets/images/cate/passat/bannerMobile.webp';
            }
            this.device = "mobile";
        }
        else if (w <= 820) {
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
    content: any = [
        {
            component: "app-category-banner",
            image: "./assets/images/cate/passat/banner.jfif",
            imageTablet: "./assets/images/cate/passat/bannerTablet.webp",
            imageMobile: "./assets/images/cate/passat/bannerMobile.webp",
        },
        {
            component: "app-category-main-title",
            title: "Passat"
        },
        {
            component: "app-category-summary",
            content: [
                {
                    title: 'Giá từ (VNĐ)',
                    value: '1.480.000.000'
                },
                {
                    title: 'Mô men xoắn tối đa',
                    value: '250Nm'
                },
                {
                    title: 'Tiêu thụ nhiên liệu trong đô thị',
                    value: '9,15 lit/100km'
                },
                {
                    title: 'Tiêu thụ nhiên liệu ngoài đô thị',
                    value: '6,53 lit/100km'
                },
            ]
        },
        {
            component: "app-category-brochure",
            name: "Tải Brochure",
            link: './assets/images/cate/passat/passat-brochure.pdf',
            // link:'./assets/VW_Dieu_Khoan_Mua_Ban.pdf'
        },
        {
            component: "app-category-h1",
            name: "Công nghệ thiết thực",
            mt: '',
            description: `Kết hợp những công nghệ thiết thực, ngoại thất và phong cách năng động với tiện nghi dành cho gia đình, sự tin cậy và an toàn. Passat được tạo ra để giúp cuộc sống bận rộn của bạn trở nên dễ dàng hơn`,
            isCenterDescription: false
        },
        {
            component: "app-category-special-features",
            title: "Đặc điểm nổi bật",
            mt: '',
            content: [
                {
                    image: './assets/images/cate/passat/feature0.webp',
                    title: 'Tiết kiệm nhiên liệu và vận hành tối ưu với động cơ tăng áp và phun nhiên liệu trực tiếp 1.8l TSI',
                    description: 'Động cơ có kích thước nhỏ gọn. Tối ưu hóa quá trình nạp hỗn hợp không khí và nhiên liệu mang lại cho Passat khả năng vận hành hiệu quả vượt trội.'
                },
                {
                    image: './assets/images/cate/passat/feature1.webp',
                    title: 'Ghế Ergo Comfort',
                    description: 'Ghế Ergo Comfort với chức năng chỉnh điện 14 hướng, bơm hơi tựa lưng, chức năng nhớ ghế và Massage ghế lái.'
                },
                {
                    image: './assets/images/cate/passat/feature2.webp',
                    title: 'Thiết kế tinh tế',
                    description: 'Khoác trên mình dáng dấp doanh nhân. Passat mang lại cho chủ sở hữu hình ảnh lịch lãm và thành đạt.'
                }
            ]
        },
        {
            component: "app-category-tab-horizontal",
            title: "Nội thất rộng rãi và tiện nghi",
            mt: '',
            content: [
                {
                    header: 'Nội thất sang trọng',
                    image: './assets/images/cate/passat/interior0.jfif',
                    title: `Hài hòa và tinh tế trong từng chi tiết`,
                    description: '',
                    list: [
                        'Nội thất phối hợp hài hòa giữa màu sắc và chất liệu cao cấp cùng với các đường nét thiết kế sắc nét và tinh tế.',
                        'Ghế ngồi cao cấp với chất liệu bọc gia sang trọng cùng với tính năng ghế chỉnh điện 14 hướng và chức năng massage dành cho ghế lái.',
                        'Hỗ trợ vào xe thông minh',
                        'Tạo hình chính xác và tỉ mỉ từng chi tiết nhỏ như viền trang trí taplo, cửa gió điều hòa, các nút điều khiển.',
                        'Không gian riêng tư và yên tĩnh cho tất cả người ngồi'
                    ]
                },
                {
                    header: 'Hệ thống điều hòa tự động 3 vùng nhiệt độ Climatronic',
                    image: './assets/images/cate/passat/interior1.jfif',
                    title: `Nhiệt độ trong xe luôn đảm bảo cho mọi hành khách sự thoải
          mái và dễ chịu`,
                    description: ``,
                    list: [
                        'Điều hòa không khí tự động giúp không khí trong xe luôn duy trì nhiệt độ mà bạn cài đặt.',
                        'Chế độ lọc không khí Aircare cho không khí trong xe luôn ở tình trạng trong lành nhất.',
                        'Chế độ tiện nghi Rest giúp xe giữ độ lạnh trong vòng 5-10 phút khi khách hàng tắt máy và rời khỏi xe.'
                    ]
                },
                {
                    header: 'Tay lái bọc da, tích hợp nhiều phím điều khiển âm thanh',
                    image: './assets/images/cate/passat/interior2.jfif',
                    title: `Điều khiển xe dễ dàng với tay lái bọc da tích hợp các phím đa
          chức năng`,
                    description: `Tay lái bọc da 3 chấu phẳng đáy, kết hợp với các chi tiết trang trí mạ bạc`,
                    list: [
                        'Các phím bấm tích hợp điều khiển hệ thống âm thanh',
                        'Tích hợp nút điều khiển hệ thống kiểm soát hành trình cruise control và giới hạn tốc độ tối đa'
                    ]
                },
                {
                    header: 'Hệ thống giải trí đa năng Composition Media 8 inch',
                    image: './assets/images/cate/passat/interior3.jfif',
                    title: `Hệ thống giải trí đa năng giúp mọi chuyến hành trình trở nên
          thư giãn và thú vị`,
                    description: ``,
                    list: [
                        `Hệ thông màn hình giải trí đa chức năng Composition Media 6.5 inch điều khiển cảm ứng. Tích hợp cổng AUX, SD card, USB, Bluetooth, CD`,
                        'Màn hình còn có chức năng hiển thị tín hiệu của hệ thống kiểm soát cự li đỗ xe PDC, camera lùi và các chức năng cài đặt liên quan đến vận hành xe.'
                    ]
                },
            ]
        },
        {
            component: "app-category-photo-gallery",
            title: "",
            content: [
                './assets/images/cate/passat/exterior0.webp',
                './assets/images/cate/passat/exterior1.webp',
                './assets/images/cate/passat/exterior2.webp'
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
                    image: './assets/images/cate/passat/design0.jfif',
                    title: `Đẳng cấp doanh nhân`,
                    description: '',
                    list: [
                        'Thiết kế cân đối và chững chạc',
                        'Lưới tản nhiệt dạng 4 thanh ngang mạ chrome mạnh mẽ',
                        'Đèn xe công nghệ LED và thiết kế sắc sảo, cụm đèn sau cá tính và nổi bật. Tích hợp công nghệ tự động bật tắt/ tự động điều chỉnh khoảng chiếu sáng (Dynamic Headlight Range Control)/mở rộng góc chiếu khi vào cua/ Chế độ coming home và leaving home.',
                        'Gương chiếu hậu chỉnh điện, gập điện, tích hợp đèn báo rẽ, đèn chào mừng, có chức năng sấy.',
                        'Mâm xe hợp kim nhôm "Dartford" 18-inch thiết kế khí động học',
                        'Thân xe với những đường gân dập nổi mạnh mẽ kéo dài từ cửa trước đến cụm đèn hậu, tăng sự cứng cáp và khỏe mạnh.',
                        'Chất liệu ghế bọc da êm ái và sang trọng'
                    ]
                },
                {
                    header: 'Vận hành',
                    image: './assets/images/cate/passat/design1.jfif',
                    title: `Trải nghiệm công nghệ vận hành tiên phong`,
                    description: ``,
                    list: [
                        'Động cơ 1.8 TSI kêt hợp giữa Turbo tăng áp và hệ thống phun nhiên liệu trực tiếp/ Công nghệ trục cam biến thiên/Công nghệ biến thiên chiều dài đường ống nạp',
                        'Công suất cực đại 180 Hp/ 5500-6000 vòng/phút',
                        'Mô men xoắn cực đại 250 Nm/ 1500-5000 vòng/phút',
                        'Hộp số tự động ly hợp kép 7 cấp số/ kết hợp chế độ số sử dụng phanh động cơ và chế độ thể thao S tin',
                        'Khả năng tăng tốc từ 0-100 km/h trong vòng 7.9s',
                        'Tiêu hao nhiên liệu đường hỗn hợp là 7.49 l/100 km',
                        'Tiêu chuẩn khí xả Euro 5'
                    ]
                },
                {
                    header: 'An toàn công nghê',
                    image: './assets/images/cate/passat/design2.jfif',
                    title: ``,
                    description: ``,
                    list: [
                        'Hệ thống chống bó cứng phanh ABS',
                        'Hỗ trợ lực phanh khẩn cấp BAS',
                        'Chống trượt khi tăng tốc ASR',
                        'Ổn định thân xe điện tử ESC (Electronic Stability Control)',
                        'Kiểm soát cự ly đỗ xe phía trước và sau xe (PDC)',
                        'Công nghệ cảnh báo tài xế (Driver alert system)',
                        'Phanh tay điện tử và chức năng hỗ trợ dừng xe (AUTO HOLD)',
                        'Hệ thống hỗ trợ khởi hành ngang dốc HSA',
                        'Hệ thống điều khiển hành trình và giới hạn tốc độ tối đa (cruise control với speed limit)',
                        'Chức năng Auto start/stop tự động ngắt động cơ khi xe tạm dừng, giúp giảm thiểu tiêu hao nhiêu liệu & khí xả',
                        'Hệ thống tái tạo năng lượng khi phanh',
                        'Trợ lực điện biến thiên theo tốc độ',
                        'Camera lùi ẩn sau logo cốp xe',
                        'Dây đai an toàn 3 điểm cho tất cả các ghế với bộ căng đai khẩn cấp & giới hạn lực siết',
                        'Túi khí hàng ghế trước, túi khí bên hông hàng ghế trước và túi khí cửa sổ hai bên',
                        'Theo dõi áp suất lốp TPMS',
                        'Bulông bánh xe có chức năng chống trộm',
                        'Gạt mưa tự động',
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
