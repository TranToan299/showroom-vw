import { Component, OnInit, Renderer2, Inject } from '@angular/core';
import { CommonService } from "src/app/services/apis/common.service";
import { Meta } from '@angular/platform-browser'
import { DOCUMENT } from '@angular/common';
import {Title} from "@angular/platform-browser";
@Component({
    selector: 'app-touareg-luxury',
    templateUrl: './touareg-luxury.component.html',
    styleUrls: ['./touareg-luxury.component.scss']
})
export class TouaregLuxuryComponent implements OnInit {

    constructor(
        private commonService: CommonService,
        private meta: Meta,
        private _renderer2: Renderer2,
        private titleService:Title,
        @Inject(DOCUMENT) private _document: Document
    ) {
        this.titleService.setTitle("Touareg | Volkswagen Việt Nam");
     }
    device: string = "pc";

    changeWidth() {
        var w = window.innerWidth;
        var touaregBanner = (<HTMLImageElement>document.getElementById("touaregBanner"));
        if (w <= 576) {
            if (this.device != "mobile") {
                touaregBanner.src = 'https://vw-image.s3.ap-southeast-1.amazonaws.com/image/Touareg-Mobile.webp';
            }
            this.device = "mobile";
        }
        else if (w <= 820) {
            if (this.device != "tablet") {
                touaregBanner.src = 'https://vw-image.s3.ap-southeast-1.amazonaws.com/image/Touareg-Tablet.webp';
            }
            this.device = "tablet";
        }
        else {
            if (this.device != "pc") {
                touaregBanner.src = 'https://vw-image.s3.ap-southeast-1.amazonaws.com/image/Touareg-PC.webp';
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
            this.meta.updateTag({ name: 'description', content: data.SeoDescription });
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
            image: "https://vw-image.s3.ap-southeast-1.amazonaws.com/image/Touareg-PC.webp",
            imageMobile: "https://vw-image.s3.ap-southeast-1.amazonaws.com/image/Touareg-Mobile.webp",
            imageTablet: "https://vw-image.s3.ap-southeast-1.amazonaws.com/image/Touareg-Tablet.webp",
        },
        {
            component: "app-category-main-title",
            title: "Touareg Luxury (22KDN/000283)"
        },
        {
            component: "app-category-summary",
            content: [
                {
                    title: 'Giá từ',
                    value: '3,499,000,000 VNĐ'
                },
                {
                    title: 'Công suất tối đa',
                    value: '251',
                    extraText:'Hp'
                },
                {
                    title: 'Mô men tối đa',
                    value: '370',
                    extraText:'Nm'
                },
                {
                    title: 'Tiêu thụ nhiên liệu kết hợp',
                    value: '10,08',
                    extraText:'lit/100km'
                },
                {
                    title: 'Tiêu thụ nhiên liệu trong đô thị',
                    value: '13,33',
                    extraText:'lit/100km'
                },
                {
                    title: 'Tiêu thụ nhiên liệu ngoài đô thị',
                    value: '8,24',
                    extraText:'lit/100km'
                }
            ]
        },
        {
            component: "app-category-brochure",
            name: "Tải Brochure",
            link: './assets/images/touareg/Touareg2022.pdf'
        },
        {
            component: "app-category-h1",
            name: "SUV hạng sang - Nam thần đường phố",
            mt: '',
            description: `Touareg mang đến một làn gió tươi mới cho hành trình khám phá phía trước. Những cải tiến như hệ thống treo khí nén với giảm xóc điều khiển điện tử hay buồng lái kỹ thuật số mang đến  trải nghiệm đầy cảm xúc khi lái chiếc SUV này.`,
            isCenterDescription: false
        },
        {
            component: "app-category-special-features-v3",
            title: "Các trang bị nổi bật của Touareg",
            mt: '',
            images: [
                {type:'video', url:'https://s7g10.scene7.com/is/content/volkswagenag/OneHub_Touareg_Loop-0x360-730k'},
                {type:'img', url:'https://vw-image.s3.ap-southeast-1.amazonaws.com/image/touareg-1.webp'},
                {type:'img', url:'https://vw-image.s3.ap-southeast-1.amazonaws.com/image/touareg-2.webp'}
            ],
            infos: [
                {
                    title: 'Đồng hồ thông tin kỹ thuật số (Innovision Cockpit)',
                    value: 'Hệ thống điều khiển gần như không có các nút bấm truyền thống'
                },
                {
                    title: 'Hệ thống treo khí nén',
                    value: 'Hỗ trợ cho việc off-road dễ dàng hơn'
                },
                {
                    title: 'Đóng mở cốp dễ dàng',
                    value: 'Mở cốp rảnh tay'
                },
            ]
        },
        {
            component: "category-tab-horizontal-gallery",
            title: "Innovision",
            mt: '80px',
            content: [
                {
                    header: 'Buồng lái kỹ thuật số',
                    image: ['https://vw-image.s3.ap-southeast-1.amazonaws.com/image/touareg-3.webp'],
                    title: `Hệ thống điều khiển không công tắc`,
                    description: 'Cụm đồng hỗ kỹ thuật số và màn hình của hệ thống thông tin giải trí tạo thành một bề mặt kính cong: Innovision Cockpit',
                    listItem:[
                        {
                            list: [
                                'Hoạt động bằng cảm ứng, cử chỉ hoặc điều khiển giọng nói',
                                'Hiển thị các chức năng bằng đồ họa và hình ảnh động',
                                'Nội dung của màn hình chính có thể được tùy chỉnh',
                                'Màn hình được chọn có thể được phóng to',
                                'Kiểm soát hệ thống điều hướng và thông tin giải trí thông qua điện thoại thông minh hoặc máy tính bảng'
                            ]
                        }
                    ]
                },
                {
                    header: 'Digital Cockpit',
                    image: ['https://vw-image.s3.ap-southeast-1.amazonaws.com/image/touareg-4.webp'],
                    title: `Hiển thị đúng thông tin bạn muốn xem`,
                    description: 'Đồng hồ tốc độ kiểu cổ điển hay màn hình thông tin với độ phân giải cao? Tại sao không phải là cả hai? Buồng lái kỹ thuật số tùy chọn làm cho điều này trở thành hiện thực:',
                    listItem:[
                        {
                            list: [
                                'Màn hình màu LCD độ phân giải cao 31 cm (12,3 inch)',
                                'Nhiều giao diện khác nhau có thể được cấu hình',
                                'Điều khiển các chức năng và hệ thống thông tin giải trí thông qua vô lăng',
                            ]
                        }
                    ]
                },
                {
                    header: 'DYNAUDIO',
                    image: ['https://vw-image.s3.ap-southeast-1.amazonaws.com/image/touareg-5.webp'],
                    title: `Âm thanh mới cho những chuyến hành trình mới`,
                    description: 'Chiếc xe sẽ giống như phòng hòa nhạc di động với hệ thống âm thanh "DYNAUDIO Consequence" bao gồm 14 loa. Âm thanh vòm 7.1 Dolby được cung cấp bởi 4 loa tweeter, 2 loa trung, 4 loa trầm, 2 loa hiệu ứng phía sau, 1 loa trung tâm phía trước và 1 loa siêu trầm trong khởi động - được hỗ trợ bởi bộ khuếch đại công suất 730 watt',
                },
                {
                    header: 'Màn hình hiển thị thông tin trên kính lái Head-up-Display',
                    image: ['https://vw-image.s3.ap-southeast-1.amazonaws.com/image/touareg-6.webp'],
                    title: `Giữ cho tầm nhìn của bạn luôn ở phía trước`,
                    description: 'Màn hình hiển thị thông tin sử dụng kính chắn gió làm bề mặt chiếu để hiển thị các thông tin quan trọng.',
                    listItem:[
                        {
                            list: [
                                'Hiển thị tốc độ, thông điệp từ hệ thống hỗ trợ người lái hoặc thông tin điều hướng',
                                'Các hình chiếu dễ quan sát, ngay cả khi lái xe vào ban ngày',
                                'Vị trí hiển thị trên mặt kính có thể được điều chỉnh',
                                'Có thể tắt bất cứ lúc nào'
                            ]
                        }
                    ]
                },
            ]
        },
        {
            component: "app-category-photo-gallery",
            title: "",
            content: [
                'https://vw-image.s3.ap-southeast-1.amazonaws.com/image/touareg-7.webp',
                'https://vw-image.s3.ap-southeast-1.amazonaws.com/image/touareg-8.webp',
                'https://vw-image.s3.ap-southeast-1.amazonaws.com/image/touareg-9.webp'
            ],
            mt: '100px'
        },
        {
            component: "category-tab-horizontal-gallery",
            title: "Thiết kế",
            mt: '',
            content: [
                {
                    header: 'Thiết kế',
                    image: [
                        'https://vw-image.s3.ap-southeast-1.amazonaws.com/image/touareg-10-1.webp',
                        'https://vw-image.s3.ap-southeast-1.amazonaws.com/image/touareg-10.webp'
                    ],
                    title: `Hình dáng tổng thể tinh tế`,
                    description: 'Với những điểm nổi bật về mặt thiết kế, Touareg là một chiếc SUV có ngoại thất biểu cảm tuyệt vời:',
                    listItem:[
                        {
                            subTitle:'Gói ngoại thất Elegance:',
                            list: [
                                'Ống xả mạ crom, trái và phải, gắn trên cản sau',
                                'Viền trang trí nhôm bảng taplo và cửa xe',
                                'Ốp bậc lên xuổng bằng tấm thép không rỉ',
                                'Ốp bậc khoang hành lý bằng tấm thép không rỉ',
                                'Cản cùng màu xe, trang trí chrome, trang trí lưới tản nhiệt mạ chrome'
                            ]
                        },
                        {
                            subTitle:'Gói ngoại thất R-line:',
                            list: [
                                'Cản dạng R-line, cản cùng màu thân xe',
                                'Lưới tản nhiệt mạ crome dạng R-line',
                                'Logo “R-line” trên lưới tản nhiệt'
                            ]
                        }
                    ]
                },
                {
                    header: 'Nội thất tiện nghi',
                    image: ['https://vw-image.s3.ap-southeast-1.amazonaws.com/image/touareg-11.webp'],
                    description: `Đồng hồ thông tin kỹ thuật số Innovision Cockpit kích thước lớn 12.3 inch giao diện sắc nét hiện đại, sinh động và rất thân thiện với người dùng thông qua thao tác đơn giản hóa
                        Màn hình giải trí đa chức năng15 inch điều khiển bằng cảm ứng và cử chỉ (Discover Premium infotainment system 15”)
                        Cửa sổ trời dạng pronama toàn cảnh (Tilting and sliding panoramic sunroof)
                        Hệ thống đèn Ambient trang trí nội thất xung quanh xe, có thể tùy chọn 30 màu (30-color Ambient lights)`,
                    listItem:[
                        {
                            list: [
                                'Màn hình hiển thị trên kính lái (Head Up Display) cung cấp thông tin hữu ích khi lái xe',
                                `Ghế Ego comfort seat có chức năng Massage ghế lái đệm hơi, thông khí, có chức năng nhớ ghế, bọc da Vienna (Ego comfort Seat with Massage/ventilation/memory Premium/leather Vienna)`,
                                `Chức năng mở/ đóng cửa xe thông minh như đá chân mở cốp, tự động khóa, mở xe  (Easy Open / Easy Close with Safelock)`
                            ]
                        },
                    ]
                },
                {
                    header: 'Dynaudio',
                    image: ['https://vw-image.s3.ap-southeast-1.amazonaws.com/image/touareg-12.webp'],
                    listItem:[
                        {
                            list: [
                                `Động cơ 2.0 TSI kêt hợp giữa Turbo tăng áp và hệ thống phun nhiên liệu trực tiếp`,
                                'Công suất 251Hp/3940-6000 rpm',
                                'Mô men xoắn cực đại 370 Nm/1600- 4500 rpm',
                                'Hộp số tự động 8 cấp Tiptronic',
                                'Hệ thống dẫn động 4 bánh toàn thời gian thông minh 4MOTION đảm bảo độ bám đường và vận hành tối ưu với 7 chế độ lái: Eco, Comfort, Normal, Sport, Offroad, Snow, Custom',
                                'Vi sai trung tâm kiểm soát trượt tự động',
                                'Khả năng tăng tốc từ 0-100 km/h trong vòng 6.8s',
                                'Tiêu chuẩn khí thải EURO6',
                                'Hệ thống treo khí nén cải tiến, có thể điều chỉnh khoảng sáng gầm xe lên đến 70mm mang lại khả năng vận hành êm ái và sự ưu việt trong điều kiện Off-road',
                            ]
                        },
                    ]
                },
                {
                    header: 'Ghế ngồi cao cấp dạng "ergoActive"',
                    image: ['https://vw-image.s3.ap-southeast-1.amazonaws.com/image/touareg-13.webp'],
                    listItem:[
                        {
                            list: [
                                'Hệ thống chống bó cứng phanh ABS',
                                'Hệ thống phân phối lực phanh điện tử EBD',
                                'Hệ thống cân bằng điện tử với thanh ổn định ESP',
                                'Vi sai kiểm soát trượt tự động',
                                'Hỗ trợ phanh gấp bằng thủy lực HBA',
                                //'Tự động phanh sau va chạm (Multi Collision Brake)',
                                'Hệ thống chống trượt khi tăng tốc ASR',
                                'Hỗ trợ xuống dốc/ khởi hành ngang dốc (Hill Decent Control/Hill Assist Control)',
                                'Phanh đỗ điện tử có chức năng tự động giữ phanh Auto Hold',
                                'Hệ thống kiểm soát hành trình Cruise Control (CCS)',
                                'Gói hỗ trợ tự động đỗ xe  (Camera lùi kết hợp hỗ trợ đỗ xe Park Assist và kiểm soát cự ly đỗ xe PDC)',
                                'Túi khí người lái và hành khách phía trước, túi khí đầu gối, túi khí bên hông phía trước, sau và túi khí rèm',
                                'Hiển thị thông tin trên kính lái HUD',
                                'Khung xe an toàn dạng MLB kết hợp giữa thép và hợp kim nhôm mang lại độ cứng vững tối đa và khả năng vận hành hoàn hảo.',
                            ]
                        },
                    ]
                }
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
