import { Component, OnInit, Renderer2, Inject, Input } from '@angular/core';
import { CommonService } from "src/app/services/apis/common.service";
import { Meta, Title } from '@angular/platform-browser'
import { DOCUMENT } from '@angular/common';
import { IProductVersion, PAGE_META_DESCRIPTION, PAGE_TITLE } from 'src/app/constants/app-constants';
@Component({
    selector: 'app-viloran-new',
    templateUrl: './viloran-new.component.html',
    styleUrls: ['./viloran-new.component.scss']
})
export class ViloranNewComponent implements OnInit {
    isExpanded: boolean = false;
    isExpandedExterior: boolean = false;
    constructor(
        private commonService: CommonService,
        private meta: Meta,
        private _renderer2: Renderer2,
        private titleService: Title,
        @Inject(DOCUMENT) private _document: Document
    ) { this.titleService.setTitle(`${PAGE_TITLE.viloran} | Volkswagen Việt Nam`); }
    device: string = "pc";

    @Input() isDeposit: boolean = false
    togglePanel() {
        this.isExpanded = !this.isExpanded;
    }
    goToElement(q: string) {
        let elemnet: any = document.querySelector(q)
        elemnet.scrollIntoView({ behavior: 'smooth' });
    }
    togglePanelExterior() {
        this.isExpandedExterior = !this.isExpandedExterior;
    }
    changeWidth() {
        var w = window.innerWidth;
        var touaregBanner = (<HTMLImageElement>document.getElementById("virtusBanner"));
        if (w <= 576) {
            if (this.device != "mobile") {
                touaregBanner.src = 'https://vw-image.s3.ap-southeast-1.amazonaws.com/image/Virtus-Mobile.webp';
            }
            this.device = "mobile";
        }
        else if (w <= 820) {
            if (this.device != "tablet") {
                touaregBanner.src = 'https://vw-image.s3.ap-southeast-1.amazonaws.com/image/Virtus-Tablet.webp';
            }
            this.device = "tablet";
        }
        else {
            if (this.device != "pc") {
                touaregBanner.src = 'https://vw-image.s3.ap-southeast-1.amazonaws.com/image/Virtus-PC.webp';
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
            this.meta.updateTag({ name: 'description', content: PAGE_META_DESCRIPTION.virtus });
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
    summaryElegance: any = {
        component: "app-category-summary",
        title: "Virtus Elegance",
        content: [
            {
                title: 'Giá từ',
                value: '949,000,000 VNĐ'
            },
            {
                title: 'Tiêu thụ nhiên liệu kết hợp',
                value: '6,64',
                extraText: 'lit/100km'
            },
            {
                title: 'Tiêu thụ nhiên liệu trong đô thị',
                value: '8,7',
                extraText: 'lit/100km'
            },
            {
                title: 'Tiêu thụ nhiên liệu ngoài đô thị',
                value: '5,43',
                extraText: 'lit/100km'
            }
        ]
    }

    summaryLuxury: any = {
        component: "app-category-summary",
        title: "Virtus Luxury",
        content: [
            {
                title: 'Giá từ',
                value: '1,069,000,000 VNĐ'
            },
            {
                title: 'Tiêu thụ nhiên liệu kết hợp',
                value: '7,56',
                extraText: 'lit/100km'
            },
            {
                title: 'Tiêu thụ nhiên liệu trong đô thị',
                value: '9,71',
                extraText: 'lit/100km'
            },
            {
                title: 'Tiêu thụ nhiên liệu ngoài đô thị',
                value: '6,31',
                extraText: 'lit/100km'
            }
        ]
    }

    summary: any = {
        component: "app-category-summary",
        //title: "Virtus",
        content: [
            {
                title: 'Dung tích xy lanh',
                value: '1984 cc',
                //extraText: "cm3"
            },
            {
                title: 'Loại động cơ',
                value: '2.0L TSI',
            },
            {
                title: 'Công suất cực đại',
                value: '220 / 4.900-6.700 hp/rpm',
                //extraText:'Hp @ 550 vòng/phút'
            },
            {
                title: 'Mô men xoắn cực đại',
                value: '350 / 1.600-4.300 N.m/rpm',
                //extraText:'Nm @ 1750-4500 vòng/phút'
            },
            {
                title: 'Hộp số',
                value: 'Ly hợp kép DSG 7 cấp',
            },

        ]
    }

    
    listImage: any[] = [
        {
            ImageUrl: "https://vw-image.s3.ap-southeast-1.amazonaws.com/image/3+BANNER_NHE-02.jpg"
        },
        {
            ImageUrl: "https://vw-image.s3.ap-southeast-1.amazonaws.com/image/3+BANNER_NHE-03.jpg"
        },
        {
            ImageUrl: "https://vw-image.s3.ap-southeast-1.amazonaws.com/image/3+BANNER_NHE-01.jpg"
        }
    ]

    listInfo: any[] = [
        {
            ImageUrl: "https://vw-image.s3.ap-southeast-1.amazonaws.com/image/3+BANNER_NHE-02.jpg",
            title: "Virtus Elegance",
            content: [
                'Kích thước tổng thể: 5.346 x 1.976 x 1.781 mm',
                'Khoảng cách hai cầu xe: 3.180 mm',
                'Dung tích khoang hành lý: 1.665 lít',
                'Dung tích bình nhiên liệu: 66 lít',
            ]
        },
        {
            ImageUrl: "https://vw-image.s3.ap-southeast-1.amazonaws.com/image/3+BANNER_NHE-02.jpg",
            title: "Virtus Elegance",
            content: [
                'Kích thước tổng thể: 5.346 x 1.976 x 1.781 mm',
                'Khoảng cách hai cầu xe: 3.180 mm',
                'Dung tích khoang hành lý: 1.665 lít',
                'Dung tích bình nhiên liệu: 66 lít',
            ]
        },
        {
            ImageUrl: "https://vw-image.s3.ap-southeast-1.amazonaws.com/image/3+BANNER_NHE-02.jpg",
            title: "Virtus Elegance",
            content: [
                'Kích thước tổng thể: 5.346 x 1.976 x 1.781 mm',
                'Khoảng cách hai cầu xe: 3.180 mm',
                'Dung tích khoang hành lý: 1.665 lít',
                'Dung tích bình nhiên liệu: 66 lít',
            ]
        },
        {
            ImageUrl: "https://vw-image.s3.ap-southeast-1.amazonaws.com/image/3+BANNER_NHE-02.jpg",
            title: "Virtus Elegance",
            content: [
                // 'Kích thước tổng thể: 5.346 x 1.976 x 1.781 mm',
                // 'Khoảng cách hai cầu xe: 3.180 mm',
                // 'Dung tích khoang hành lý: 1.665 lít',
                // 'Dung tích bình nhiên liệu: 66 lít',
            ]
        },

    ]

    listProductBanner = [
        {
            id: "design",
            title: "Ngoại thất",
            subtitle: "Viloran thực sự khác biệt so với những chiếc MPV đang được phân phối chính thức tại thị trường Việt Nam nhờ những thiết kế cuốn hút ngay từ ánh nhìn đầu tiên.",
            banner: "../../../../../assets/images/viloran/Viloran_Exterior_2.jpg",
            bannerMobile: "../../../../../assets/images/viloran/Viloran_Exterior_Mobile_2.jpg",
            listInfo: [
                {
                    image: "../../../../../assets/images/viloran/Viloran_exterior.jpg",
                    // title: "Dòng xe MPV với kiểu dáng tinh tế và sang trọng, có kích thước lớn nhất của thương hiệu Volkswagen và phân khúc xe MPV đang hiện hữu tại Việt Nam.",
                    content: ['Kích thước tổng thể: 5.346 x 1.976 x 1.781 mm', 'Khoảng cách hai cầu xe: 3.180 mm', 'Dung tích khoang hành lý: 463 - 2.100 L'],
                    header: "Dòng xe MPV với kiểu dáng tinh tế và sang trọng, có kích thước lớn nhất của thương hiệu Volkswagen và phân khúc xe MPV đang hiện hữu tại Việt Nam.",
                    list: ['Kích thước tổng thể: 5.346 x 1.976 x 1.781 mm', 'Khoảng cách hai cầu xe: 3.180 mm', 'Dung tích khoang hành lý: 463 - 2.100 L']

                },
                {
                    image: "../../../../../assets/images/viloran/Viloran_order.jpg",

                    header: "Phong cách thiết kế V-line mang nét đặc trưng Volkswagen được làm nổi bật với cụm lưới tản nhiệt mạ chrome, phối hợp hài hòa với cụm đèn IQ. Light thiết kế lớn và cấu hình ánh sáng mang tính nhận diện cao.",
                    list: [
                       'Phong cách thiết kế V-line mang nét đặc trưng Volkswagen của Viloran'
                    ]
                },
                {
                    image: "../../../../../assets/images/viloran/viloran_ex_door.jpg",
                    header: "Cửa trượt điều khiển điện và chống kẹt.",
                    list: [
                        'Cửa trượt điều khiển điện và chống kẹt của Volkswagen Viloran'
                    ]
                },
                {
                    image: "../../../../../assets/images/viloran/viloran_ex_light.jpg",
                    header: "Hệ thống đèn IQ. Light thích ứng thông minh hỗ trợ người lái nhờ khả năng chiếu sáng tối ưu và có tính thẩm mỹ cao.",
                    list: [
                        'Hệ thống đèn chiếu sáng thích ứng phía trước (Adaptive Front-Light System), bao gồm: Đèn hỗ trợ mở rộng góc chiếu (Static Cornering Light), Chức năng mở rộng góc chiếu khi vào cua chủ động (Dynamic Cornering Light), Chức năng tự động điều chỉnh độ cao ánh sáng (Height Automatic Adjustment Headlight), Đèn hỗ trợ chiếu sáng mọi thời tiết (All Weather Light).',
                        'Chức năng tự động bật tắt (Auto).',
                        'Chức năng điều chỉnh vùng chiếu sáng chủ động (Dynamic Light Assist).',
                        'Chức năng đèn chào mừng (Coming Home Light) và đèn chờ dẫn đường (Leaving Home Light)',
                    ]
                },
                {
                    image: "../../../../../assets/images/viloran/Viloran_Exterior_2.jpg",
                    header: "Cửa sổ trời toàn cảnh Panoramic Sunroof điều khiển cảm ứng.",
                    list: [
                       `Cửa sổ trời toàn cảnh Panoramic Sunroof điều khiển cảm ứng của Volkswagen Viloran`
                    ]
                },
                {
                    image: "../../../../../assets/images/viloran/Viloran_ex_rear.jpg",
                    header: 'Thanh mạ chrome trang trí kết nối logo và đèn xe, cản sau và cánh hướng gió sau mang đến thiết kế cân đối. ',
                    list: [
                      `Thanh mạ chrome trang trí kết nối logo và đèn xe, cản sau và cánh hướng gió phía sau mang đến thiết kế cân đối của Volkswagen Viloran`
                    ]
                },
                {
                    image: "../../../../../assets/images/viloran/viloran_ex_right_light_rear.png",
                    header: 'Cụm đèn thiết kế sắc sảo với kiểu vuốt nhọn và tạo hình ánh sáng 3D độc đáo',
                    list: [
`Cụm đèn sau thiết kế sắc sảo với kiểu vuốt nhọn và tạo hình ánh sáng 3D độc đáo của Volkswagen Viloran`
                    ]
                },
                {
                    image: "../../../../../assets/images/viloran/Viloran_thumbnail_interior.jpg",
                    header: 'Cốp xe với chức năng đóng mở thông minh (rảnh tay).',
                    list: [
`Cốp xe với chức năng đóng mở thông minh của Volkswagen Viloran`
                    ]
                },
                {
                    image: "../../../../../assets/images/viloran/Viloran_ex_hor.jpg",
                    header: 'Mâm đúc hợp kim',
                    list: ['Premium: 235/55 R19', 'Luxury: 235/50 R20']
                },
                // {
                //     image: "../../../../../assets/images/viloran/viloran_ex_color_1.jpg",
                //     header: 'Màu sác ngoại thất:',
                //     list: [
                //         'Đỏ Crimson - Mettalic',
                //         'Vàng Brisbane - Metallic',
                //         'Trắng Glacier - Pearl effect',
                //         'Đen Deep - Metallic',
                //         'Bạc Leaf - Metallic',
                //     ]
                // },
                // {
                //     image: "../../../../../assets/images/viloran/viloran_ex_color_2.jpg",
                //     header: 'Màu sắc nội thất:',
                //     list: [
                //         'Màu Be',
                //         'Màu Nâu',
                //     ]
                // },
            ]
        },
        {
            id: "interior",
            title: "Nội thất tiện nghi",
            subtitle: "Tận hưởng những giá trị cao cấp theo cách riêng của bạn.",
            banner: '../../../../../assets/images/viloran/viloran_in.jpg',
            bannerMobile: "../../../../../assets/images/viloran/viloran_in_mobile.jpg",
            listInfo: [
                {
                    image: '../../../../../assets/images/viloran/viloran_in.jpg',
                    header: 'Hàng ghế hạng thương gia (Luxury)',
                    list: [
                        'Chất liệu da ghế cao cấp mang lại trải nghiệm tương tác mềm mại và thoải mái.',
                        'Hai hàng ghế được bố trí riêng biệt, có bệ tì tay riêng, khay để ly riêng, cổng sạc USB, type C, hộc chứa đồ và có lối đi ở giữa.',
                        'Trang bị công tắc điều chỉnh ghế hành khách phía trước. ',
                        'Bố trí bệ đỡ chân điều chỉnh điện, có khả năng chỉnh góc 90 độ.',
                        'Điều chỉnh điện chức năng nghiêng lưng ghế tối đa 70 độ. ',
                        'Chức năng làm mát và sưởi ghế.',
                        'Chức năng massage 3 chế độ và 3 cường độ.',
                        'Trang bị gối tựa đầu giúp tư thế ngồi, nằm nghỉ thoải mái và thư giãn tối đa.'
                    ]
                },
                {
                    image: '../../../../../assets/images/viloran/viloran_in_seat_1.jpg',
                    header: `Vị trí ghế`,
                    list: [
                        'Ghế người lái chỉnh điện 8 hướng, 4 hướng đệm lưng, nhớ ghế 3 vị trí (Luxury).',
                        'Ghế hành khách phía trước chỉnh điện 8 hướng, 4 hướng đệm lưng'
                    ]
                },
                
                {
                    image: '../../../../../assets/images/viloran/viloran_in_screen.jpg',
                    header: 'Màn hình hiển thị đa thông tin kỹ thuật số 10.3 inch cho người lái.',
                    list: [
`Màn hình hiển thị đa thông tin kỹ thuật số 10.3 inch cho người lái của Volkswagen Viloran`
                    ]
                },
                {
                    image: '../../../../../assets/images/viloran/viloran_in_tranmission.jpg',
                    header: 'Cần chuyển số điện tử.',
                    list: [
`Cần chuyển số điện tử của Volkswagen Viloran`
                    ]
                },
                {
                    image: '../../../../../assets/images/viloran/viloran_in_light.jpg',
                    header: 'Đèn viền trang trí nội thất ambient lighting 30 màu (Luxury).',
                    list: [
`Đèn viền trang trí nội thất ambient lighting 30 màu của Volkswagen Viloran`
                    ]
                },
                {
                    image: '../../../../../assets/images/viloran/viloran_in_service.jpg',
                    header: 'Hệ thống giải trí màn hình cảm ứng 12 ich, kết nối Apple CarPlay, USB , Bluetooth.',
                    list: [
`Hệ thống giải trí màn hình cảm ứng 12 ich, kết nối Apple CarPlay, USB , Bluetooth của Volkswagen Viloran`
                    ]
                },
                {
                    image: '../../../../../assets/images/viloran/viloran_in_charge.jpg',
                    header: 'Chức năng sạc điện thoại không dây.',
                    list: [
`Chức năng sạc điện thoại không dây của Volkswagen Viloran`
                    ]
                },
                 {
                    image: '../../../../../assets/images/viloran/Viloran_thumbnail_interior.jpg',
                     header: 'Điều hòa nhiệt độ tự động, 3 vùng, lọc gió PM2.5, điều chỉnh cảm ứng',
                    list: [
`Điều hòa nhiệt độ tự động, 3 vùng, lọc gió PM2.5, điều chỉnh cảm ứng của Volkswagen Viloran`
                    ]
                },
                {
                    image: '../../../../../assets/images/viloran/viloran_in_seat_1.jpg',
                    header: 'Ốp nẹp bước chân sang trọng với tên xe "VILORAN".',
                    list: [
`Ốp nẹp bước chân sang trọng với tên xe "VILORAN" của Volkswagen Viloran`
                    ]
                },

                

            ]
        },
        {
            id: "operation",
            title: "Khả năng vận hành",
            subtitle: "Khả năng vận hành của Volkswagen Viloran",
            banner: "../../../../../assets/images/viloran/viloran_operate_thumnail_1.jpg",
            bannerMobile: "../../../../../assets/images/viloran/viloran_operate_thumnail_mobile_1.jpg",
            listInfo: [
                {
                    image: "../../../../../assets/images/viloran/viloran_operate_thumnail.jpg",
                    header: "Mạnh mẽ và êm ái",
                    list: [
                        'Loại động cơ: 2.0L TSI',
                        'Dung tích xy lanh: 1984 cc',
                        'Công suất cực đại: 220 / 4.900-6.700 hp/rpm',
                        'Mô men xoắn cực đại: 350 / 1.600-4.300 N.m/rpm',
                        'Hộp số: Ly hợp kép DSG 7 cấp'
                    ]
                },
                {
                    image: "../../../../../assets/images/viloran/viloran_operate_thumnail.jpg",
                    header: "Hệ thống trợ lực lái điện biến thiên theo tốc độ Servotronic",
                    list: [
                        `Công nghệ sử dụng motor trợ lực lái điện và điều khiển khả năng trợ lực tùy theo tốc độ xe, nhờ đó xe sẽ đánh lái nhẹ nhàng ở tốc độ thấp và chính xác ở tốc độ cao
Hệ thống cũng sử dụng thước lái có kết cấu đặt biệt với góc nghiêng răng thay đổi nhờ đó có thể giảm được góc xoay vô lăng so với các loại trợ lực lái thông thường.`
                    ]
                },
                {
                    image: "../../../../../assets/images/viloran/viloran_operate_thumnail.jpg",
                    header: "Hộp số tự động ly hợp kép DSG 7 cấp thế hệ mới",
                    list: [
                        `Hộp số tự động ly hợp kép DSG (Direct shift gearbox) thế hệ mới được trang bị trên xe Viloran mang lại khả năng truyền mô men tối ưu, giúp xe sang số mượt. Người ngồi xe sẽ hài lòng về sự êm ái, thoải mái, đồng thời nâng cao khả năng truyền lực khi leo dốc, chở tải và tăng tốc.`
                    ]
                },
                
                

            ]
        },
        {
            id: "sss",
            title: "Hệ thống an toàn và hỗ trợ",
            subtitle: "Công nghệ hàng đầu đến từ Đức",
            banner: '../../../../../assets/images/viloran/Viloran_ex_hor.jpg',
            bannerMobile: "../../../../../assets/images/viloran/Viloran_ex_hor_mobile.jpg",
            listInfo: [
                {
                    image: '../../../../../assets/images/viloran/viloran_sss_1.jpg',
                    header: `Hệ thống khung gầm có tỷ trọng thép với khả năng chịu lực cao đạt 77% đảm bảo an toàn cho hành khách.`,
                    list: [
                        `Khung gầm MQB vững chắc của Đức, mang lại sự êm ái cho hành khách.`,
                        `Khung xe cách âm tiếng ồn, không ồn ở tốc độ cao (Kính cách âm APVB 4,96mm) mang đến sự nghỉ ngơi thoải mái cho hành khách trên những chặng đường dài.`,
                    ]
                },
                {
                    image: '../../../../../assets/images/viloran/viloran_sss_2.jpg',
                    header: `Kiểm soát hành trình thích ứng ACC (+ tính năng Stop & Go)`,
                    list: [
                        `Hệ thống sẽ tự động duy trì tốc độ được thiết lập bởi người lái. Đồng thời khi xuất hiện một phương tiện phía trước, hệ thống sẽ tự động điều chỉnh tốc độ và duy trì khoảng cách được thiết lập với xe di chuyển phía trước nhằm mang lại sự thoải mái cho người điều khiển xe đặc biệt là khi lái xe đường dài.`
                    ]
                },
                {
                    image: '../../../../../assets/images/viloran/Viloran_thumbnail_sss.jpg',
                    header: `Cảnh báo tiền va chạm FCW và hỗ trợ phanh khẩn cấp AEB`,
                    list: [
                        'Hệ thống sẽ phát hiện phương tiện, người đi bộ phía trước thông qua các radar và camera.',
                        'Cảnh báo bằng âm thanh và tín hiệu trên màn hình cho người điều khiển về nguy cơ va chạm.',
                        'Tự động áp dụng lực phanh nhẹ (rà phanh) để để nhắc nhở về nguy cơ va chạm tăng lên.',
                        'Tự động phanh khẩn cấp để tránh va chạm thông qua nhiều giai đoạn với lực phanh tăng dần. ',
                        'Hệ thống có thể hoạt động (nếu được kích hoạt) ngay cả khi ACC không kích hoạt.'
                    ]
                },        
                
                {
                    image: '../../../../../assets/images/viloran/viloran_sss_3.jpg',
                    header: `9 túi khí (Luxury)`,
                    list: [
                        `Túi khí phía trước.`,
                        `Túi khí bên hông hàng ghế trước.`,
                        `Túi khí bên hông hàng ghế 2.`,
                        `Túi khí rèm.` ,
                        `Túi khí đầu gối người lái.`
                    ]
                },
                {
                    image: '../../../../../assets/images/viloran/viloran_sss_4.jpg',
                    header: `Hỗ trợ chuyển làn đường Lane Change Assist`,
                    list: [
                        `Các cảm biến radar ở phía cản sau sẽ giám sát khu vực phía sau xe. Hệ thống sẽ đo lường khoảng cách và sự khác biệt về tốc độ của các xe để đưa ra cảnh báo bằng hình ảnh trên gương chiếu hậu. Kích hoạt từ tốc độ khoảng 15km/h.`,
                    ]
                },
                {
                    video: '../../../../../assets/videos/viloran_sss_video.mp4',
                    // isVideo: true,
                    header: `Hỗ trợ đỗ xe tự động Park Assist`,
                    list: [
                        `Hệ thống sử dụng sóng âm để phát hiện vật cản ở phía trước và phía sau xe và cảnh báo người lái bằng các vạch màu trên màn hình và âm thanh.
Nếu người lái không có phản ứng, chức năng phanh hỗ trợ đỗ xe Maneuver Braking Function (nếu được trang bị) sẽ kích hoạt để ngăn xe va chạm với chướng ngại vật.
Hệ thống sẽ hỗ trợ bằng cách tự động xoay vô lăng đưa xe vào chỗ đỗ (song song hoặc vuông góc) và tiến xe ra khỏi chỗ đỗ song song. Người lái vẫn phải điều khiển chân ga, phanh, cần số theo hướng dẫn trên màn hình.
Người lái sẽ tự tin hơn khi xoay xở đỗ xe trong điều kiện chật hẹp. Đồng thời người lái sẽ hài lòng vì có thể tránh được các chướng ngại vật và an tâm hơn vì có hệ thống phanh tự động can thiệp trong quá trình xoay xở, đỗ xe hoặc ra khỏi chỗ đỗ xe.`,

                    ]
                },


            ]
        },
    ]

    preBooking = {
        component: "app-category-prebooking",
        title: "Volkswagen Viloran - Dòng MPV cao cấp hạng thương gia, đẳng cấp Đức",
        image: '../../../../../assets/images/viloran/Viloran_order.jpg',
        mt: '',
        link: {
            value: '/viloran/deposit',
            name: 'Đặt ngay'
        }
    }

    brochure = {
        component: "app-category-brochure",
        name: "Tải Brochure",
        link: 'https://vw-image.s3.ap-southeast-1.amazonaws.com/brochure/VILORAN_E-CATALOGUE.pdf'
    }

    category = {
        component: "app-category-reference",
        title: "Chi phí lăn bánh",
        mt: '0',
        description: ``,
        link: {
            value: '/product/cost',
            name: 'Tham khảo thêm'
        }
    }

    gallery = {
        mt: 'mt-5',
        component: "app-category-gallery",
        title: "Thư viện ảnh",
        content: [
            '../../../../../assets/images/viloran/Viloran_order.jpg',
            '../../../../../assets/images/viloran/gallery_2.jpg',
            '../../../../../assets/images/viloran/gallery_3.jpg',
        ]
    }

  

    listProductVersion: IProductVersion[] = [
        {
            name: "Viloran Premium",
            price: "1,989,000,000 VNĐ",
            image: '../../../../../assets/images/viloran/viloran_general.png',
            linkOrder: '/viloran/deposit',
            linkTrial: '/viloran/trial',
            listInfo: [
                {
                    name: "Công suất cực đại (hp/rpm)",
                    value: "220 / 4.900-6.700"
                },
                {
                    name: "Mômen xoắn cực đại (N.m/rpm)",
                    value: "350 / 1.600-4.300"
                },
                {
                    name: "Động cơ",
                    value: ""
                },
            ]
        },
        {
            name: "Viloran Luxury",
            price: "2,188,000,000 VNĐ",
            image: '../../../../../assets/images/viloran/viloran_general.png',
            linkOrder: '/viloran/deposit',
            linkTrial: '/viloran/trial',
            listInfo: [
                {
                    name: "Công suất cực đại (hp/rpm)",
                    value: "220 / 4.900-6.700"
                },
                {
                    name: "Mômen xoắn cực đại (N.m/rpm)",
                    value: "350 / 1.600-4.300"
                },
                {
                    name: "Động cơ",
                    value: ""
                },
            ]
        },
    ]
    // productVersion: IProductVersion = {
    //     name: "Viloran",
    //     price: "1,069,000,000 VNĐ",
    //     image:  '../../../../../assets/images/viloran/viloran_general.png',
    //     linkOrder: '/viloran/deposit',
    //     linkTrial: '/viloran/trial',
    //     listInfo:[ 
    //         {
    //             name: "Động cơ",
    //             value: "2.0L TSI"
    //         },
    //         {
    //             name: "Động cơ",
    //             value: "2.0L TSI"
    //         },
    //         {
    //             name: "Động cơ",
    //             value: "2.0L TSI"
    //         },
    //         {
    //             name: "Động cơ",
    //             value: "2.0L TSI"
    //         },
    //         {
    //             name: "Động cơ",
    //             value: "2.0L TSI"
    //         },
    //     ]
    // }

    
}