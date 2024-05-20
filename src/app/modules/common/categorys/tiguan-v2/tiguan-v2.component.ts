import { PAGE_META_DESCRIPTION } from './../../../../constants/app-constants';
import { Component, OnInit, Renderer2, Inject } from '@angular/core';
import { CommonService } from "src/app/services/apis/common.service";
import { Meta } from '@angular/platform-browser'
import { DOCUMENT } from '@angular/common';
import {Title} from "@angular/platform-browser";
import { PAGE_TITLE } from 'src/app/constants/app-constants';
@Component({
    selector: 'app-tiguan-v2',
    templateUrl: './tiguan-v2.component.html',
    styleUrls: ['./tiguan-v2.component.scss']
})
export class TiguanV2Component implements OnInit {

    constructor(
        private commonService: CommonService,
        private meta: Meta,
        private _renderer2: Renderer2,
        private titleService:Title,
        @Inject(DOCUMENT) private _document: Document
    ) { this.titleService.setTitle(`${PAGE_TITLE.tiguanAllspace} | Volkswagen Việt Nam`);  }
    device: string = "pc";

    changeWidth() {
        var w = window.innerWidth;
        var tiguanBanner = (<HTMLImageElement>document.getElementById("tiguanBanner"));
        if (w <= 576) {
            if (this.device != "mobile") {
                tiguanBanner.src = './assets/images/cate/tiguan/bannerMobile.webp';
            }
            this.device = "mobile";
        }
        else if (w <= 820) {
            if (this.device != "tablet") {
                tiguanBanner.src = './assets/images/cate/tiguan/bannerTablet.webp';
            }
            this.device = "tablet";
        }
        else {
            if (this.device != "pc") {
                tiguanBanner.src = './assets/images/cate/tiguan/banner.jfif';
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
        this.commonService.getCategoryById(4).subscribe((data: any) => {
            console.log(data)
            this.meta.updateTag({ name: 'description', content: PAGE_META_DESCRIPTION.tiguanAllspace });
            this.meta.updateTag({ name: 'keywords', content: data.SeoKeyword });
        })
        // send view
        this.commonService.getIp().subscribe((data: any) => {
            let ip = data.ip
            console.log({ URL: window.location.href, Ip: ip })
            this.commonService.putAnalyticsURL({ URL: window.location.href, Ip: ip }).subscribe((data: any) => {
                console.log('putAnalyticsURL')
                console.log({ URL: window.location.href, Ip: ip })
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
      console.log('---------test script---------')
    `;
        this._renderer2.appendChild(this._document.body, script1);
        setTimeout(() => {
            this._renderer2.appendChild(this._document.body, script2);
        }, 1000)
    }
    content: any = [
        {
            component: "app-category-banner",
            image: "./assets/images/cate/tiguan/banner.jfif",
            imageMobile: "./assets/images/cate/tiguan/bannerMobile.webp",
            imageTablet: "./assets/images/cate/tiguan/bannerTablet.webp",
        },
        {
            component: "app-category-main-title",
            title: "Tiguan Allspace"
        },
        {
            component: "app-category-summary",
            content: [
                {
                    title: 'Giá từ (VNĐ)',
                    value: '1.699.000.000'
                },
                {
                    title: 'Tiêu thụ nhiên liệu kết hợp',
                    value: '8,9 lit/100km'
                },
                {
                    title: 'Tiêu thụ nhiên liệu ngoài đô thị',
                    value: '6.7 lit/100km'
                },
            ]
        },
        {
            component: "app-category-brochure",
            name: "Tải Brochure",
            link: './assets/images/cate/tiguan/tiguan2021.pdf'
        },
        {
            component: "app-category-h1",
            name: "SUV 7 chỗ thương hiệu Đức",
            mt: '',
            description: `Mẫu xe 7 chỗ thương hiệu Đức nhập khẩu duy nhất có giá dưới 2 tỷ đồng. Với phiên bản Tiguan Allspace trục cơ sở kéo dài tạo không gian rộng rãi thoải mái cho bất cứ cuộc hành trình nào. Tiguan Allspace mang đến những giá trị đích thực trong phân khúc xe nhập khẩu dành cho người Việt. cho tất cả những cuộc phiêu lưu và khám phá.s`,
            isCenterDescription: false
        },
        {
            component: "app-category-special-features-v2",
            title: "Các tính năng nổi bật của Tiguan",
            mt: '',
            images: [
                './assets/images/cate/tiguan/feature1.webp',
                './assets/images/cate/tiguan/feature2.webp',
                './assets/images/cate/tiguan/feature3.webp'
            ],
            infos: [
                {
                    title: 'Đồng hồ trung tâm dạng kỹ thuật số Digital Cockpit',
                    value: 'Đồng hồ kỹ thuật số 12.3 inch với 3 lựa chọn giao diện hiển thị và tùy chỉnh màu sắc'
                },
                {
                    title: 'Hệ thống hỗ trợ đỗ xe Park Assist',
                    value: 'Việc tìm khoảng trống và đỗ xe thật dễ dàng với hệ thống hỗ trợ đỗ xe Park Assist'
                },
                {
                    title: 'Gói quan sát xung quanh Area View',
                    value: 'Quan sát xung quanh xe với camera 360 hiển thị dạng 3D với độ phân giải cao'
                },
            ]
        },
        {
            component: "app-category-tab-horizontal",
            title: "Thiết kế mạnh mẽ, đậm chất SUV",
            mt: '',
            content: [
                {
                    header: 'Bố trí không gian',
                    image: './assets/images/cate/tiguan/design0.jfif',
                    title: `7 chỗ ngồi và lộ trình tới điểm đến của bạn`,
                    description: 'Tiguan là một chiếc SUV thực sự linh hoạt. Nhờ có thêm hàng ghế thứ 3, nó có thể chở tới 7 người và có khoang hành lý tối đa lên đến 1775 lít. Một đặc điểm tiện dụng, bằng 1 thao tác bạn có thể gập hàng ghế thứ 3 để tạo không gian chứa hành lý quá khổ.',
                    list: [
                        'Lưới tản nhiệt với thanh trang trí mạ crom nối liền 2 đèn xe',
                        'Khung xe liền khối với thiết kế kết cấu thép chịu lực an toàn',
                        'Cụm đèn LED Projector cá tính với các công nghệ tiên tiến, tự động bật tắt, mở rộng góc chiếu khi vào cua, điều chỉnh khoảng chiếu sáng tự động, coming home và leaving home"',
                        'Gương chiếu hậu chỉnh điện, gập và sưởi điện, tích hợp đèn LED báo rẽ',
                        'Mâm đúc hợp kim nhôm 19-inch 5 chấu “Victoria Falls” với màu xám nổi bật',
                        'Lốp xe tự vá 235/50R19, bu lông chống trộm bánh xe',
                        'Cụm đèn LED sau xe thiết kế sắc cạnh và nổi bật',
                        'Ống xả kép mạ Chrome, viền cửa sổ mạ chrome, giá nóc sơn màu bạc, cánh hướng gió tích hợp đèn báo phanh tăng thêm dáng vẻ thể thao cho Tiguan',
                    ]
                },
                {
                    header: 'Đóng mở cốp thông minh Easy Open',
                    image: './assets/images/cate/tiguan/design1.jfif',
                    title: `Đóng mở cốp dễ dàng và tiện lợi`,
                    description: `Bạn đứng trước khoang hành lý với rất nhiều túi đồ và không thể mở cốp. Với hệ thống đóng mở cốp thông minh, bạn có thể mở nó bằng chân, chỉ cần di chuyển chân phía sau xe, khoanh hành lý sẽ mở. Cũng thật dễ dàng để đóng cốp xe bằng cách nhấn nút trên cốp sau. Thật là ấn tượng, khoang hành lý có dung tích lên đến 1775 lít.`
                },
                {
                    header: 'Dynaudio',
                    image: './assets/images/cate/tiguan/design2.jfif',
                    title: `Hệ thống loa cao cấp Dynaudio`,
                    description: `Hệ thống âm thanh vòm cao cấp DYNAUDIO 8 loa, 1 loa trung tâm, 1 loa subwoofer công suất cực đại lên đến 400 Wat (Tiguan Luxury S). Hệ thống âm thanh cao cấp 8 loa (Tiguan Elegance và Luxury). Với chất lượng âm thanh vượt trội ở mọi ghế ngồi, mọi hành trình sẽ thư giãn như bạn đang trải nghiệm trong không gian của phòng hòa nhạc.`,
                },
                {
                    header: 'Ghế ngồi cao cấp dạng "ergoActive"',
                    image: './assets/images/cate/tiguan/design3.jfif',
                    title: ``,
                    description: `Ngồi xuống và cảm nhận. Hệ thống ghế kiểu thể thao ergoActive giúp mọi thứ trở nên đơn giản. Nhờ có hệ thống chỉnh ghế 14 hướng, bạn có thể dễ dàng điều chỉnh phù hợp với cơ thể mình, giúp giải phóng sự mệt mỏi cho lưng của bạn, đảm bảo sự thoải mái và thư giãn.`,
                    list: [
                        `Tích hợp sưởi ghế`,
                        'Bơm tựa lưng và chức năng massage (Elegance & Luxury)',
                        'Chức năng nhớ vị trị (Luxury S)'
                    ]
                },
                {
                    header: 'Đồng Hồ Trung Tâm hiển thị thông tin Active Infor Display',
                    image: './assets/images/cate/tiguan/design4.jfif',
                    title: `Màn hình thông tin dành riêng cho tài xế`,
                    description: `Hệ thống âm thanh vòm cao cấp DYNAUDIO 8 loa, 1 loa trung tâm, 1 loa subwoofer Khi quan sát đồng hồ tốc độ và công tơ mét hoặc dữ liệu lái xe, hoặc tiêu đề của bài hát bạn đang nghe hoặc những lựa chọn khác. Ngay trong tầm tay bạn: với tay lái đa chức năng, thật dễ dàng để bạn để cấu hình màn hình phân giải cao theo cách bạn muốn.`,
                },
            ]
        },
        {
            component: "app-category-photo-gallery",
            title: "",
            content: [
                './assets/images/cate/tiguan/experience0.webp',
                './assets/images/cate/tiguan/experience1.webp',
                './assets/images/cate/tiguan/experience2.webp'
            ],
            mt: '120px'
        },
        {
            component: "app-category-tab-horizontal",
            title: "Các hệ thống hỗ trợ",
            mt: '',
            content: [
                {
                    header: 'Gói quan sát',
                    image: './assets/images/cate/tiguan/support0.jfif',
                    title: `Nhìn về phía trước theo mọi hướng`,
                    description: 'Ra khỏi một bãi đỗ xe ở nơi đông đúc, di chuyển trên địa hình khó khăn: có rất nhiều tình huống người lái cần hơn là một đôi mắt. Với gói quan sát Area View bạn sẽ có: 4 camera quan sát xung quanh xe và cung cấp các góc nhìn thực tế hiển thị trên màn hình giải trí của xe. Giống như một ma thuật: Kết hợp tất cả các camera sẽ giúp hệ thống tạo ra góc nhìn kiểu mắt chim: bạn sẽ có góc nhìn toàn cảnh từ phía trên và xung quanh.',
                },
                {
                    header: 'Tiguan của bạn: Trợ lý đáng tin cậy',
                    image: './assets/images/cate/tiguan/support1.jfif',
                    title: `Hệ thống hỗ trợ đỗ xe tự động`,
                    description: `Tiguan với tính năng hỗ trợ đỗ xe không chỉ cho bạn biết khoảng trống đỗ xe có đủ lớn hay không, nó còn giúp bạn lái xe vào chỗ đỗ xe. Tất cả những gì bạn phải làm là điều khiển cần số, bàn đạp ga và phanh. Hệ thống sẽ giúp bạn tự đánh lái`,
                    list: [
                        'Cảm biến siêu âm sẽ dò khoảng trống đỗ xe (tốc độ di chuyển dưới 40 km/h)',
                        'Chỉ cần 80cm khoảng cách phía trước và sau là đủ',
                        'Có thể vô hiệu hóa chức năng bất kể lúc nào',
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
