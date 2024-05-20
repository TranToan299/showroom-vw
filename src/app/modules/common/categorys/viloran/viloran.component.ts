import { Component, OnInit, Renderer2, Inject, Input } from '@angular/core';
import { CommonService } from "src/app/services/apis/common.service";
import { Meta, Title } from '@angular/platform-browser'
import { DOCUMENT } from '@angular/common';
import { PAGE_META_DESCRIPTION, PAGE_TITLE } from 'src/app/constants/app-constants';
@Component({
  selector: 'app-viloran',
  templateUrl: './viloran.component.html',
  styleUrls: ['./viloran.component.scss']
})
export class ViloranComponent implements OnInit {

  constructor(
    private commonService: CommonService,
    private meta: Meta,
    private _renderer2: Renderer2,
    private titleService: Title,
    @Inject(DOCUMENT) private _document: Document
) { this.titleService.setTitle(`${PAGE_TITLE.viloran} | Volkswagen Việt Nam`);  }
device: string = "pc";

@Input() isDeposit: boolean = false

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

content: any = [
    {
        component: "app-category-banner",
        image: "https://vw-image.s3.ap-southeast-1.amazonaws.com/image/Virtus-PC.webp",
        imageMobile: "https://vw-image.s3.ap-southeast-1.amazonaws.com/image/Virtus-Mobile.webp",
        imageTablet: "https://vw-image.s3.ap-southeast-1.amazonaws.com/image/Virtus-Tablet.webp",
    },
    {
        component: "app-category-main-title",
        title: "Viloran"
    },
    {
        component: "app-category-brochure",
        name: "Tải Brochure",
        link: 'https://www.fshare.vn/file/N36BROSPW4J5'
    },
    {
        component: "app-category-h1",
        name: "Ngoại thất",
        mt: '',
        description: `Viloran thực sự khác biệt những chiếc MPV đang được phân phối chính thức tại thị trường Việt Nam nhờ những thiết kế cuốn hút ngay từ ánh nhìn đầu tiên.`,
        isCenterDescription: false
    },
    {
        component: "app-category-special-features",
        title: "",
        mt: '',
        content: [
            {
                image: '../../../../../assets/images/viloran/Viloran_exterior.jpg',
                //title: 'Thiết kế trau chuốt theo tinh thần thời thượng',
                //toElement: '#exterior-tcross',
                //description: 'Kế thừa nét hấp dẫn vượt thời gian của kiểu dáng sedan thon dài sang trọng, phối cùng vẻ thể thao năng động của thiết kế đèn LED thời thượng và các đường gân 3D nổi bật tạo nên cho Virtus một diện mạo khác biệt.'
            },
            {
                //image: 'https://vw-image.s3.ap-southeast-1.amazonaws.com/image/VIRTUS_2.webp',
                //title: 'Nội thất tiện nghi và kết nối công nghệ',
                //toElement: '#interior-tcross',
                //description: 'Với chiều dài cơ sở lớn 2,651 mm, không gian nội thất của Virtus rất rộng rãi. Bố cục thiết kế gọn gàng, khoa học với các đường nét hài hoà. Kết nối công nghệ trọn vẹn mang đến một không gian mở ra thế giới bên ngoài nhưng là của riêng bạn.'
            },
            {
                //image: 'https://vw-image.s3.ap-southeast-1.amazonaws.com/image/VIRTUS_3.webp',
                //title: 'Hiệu quả vận hành tối đa với mức tiêu thụ nhiên liệu tối thiểu',
                //toElement: '#safe-system-and-support',
                //description: '"Trái tim" là cỗ máy chuẩn chất Đức, được phát triển dựa trên khung gầm MQB A0 và xây dựng với tinh thần chuẩn mực vẹn toàn, thì tạo ra sự phấn khích bùng nổ khi cầm lái là không khó.'
            }
        ]
    },
    {
        component: "app-category-prebooking",
        title: "Đặt trước sản phẩm",
        image: '../../../../../assets/images/viloran/Viloran_order.jpg',
        mt: '',
        link: {
            value: '/viloran/prebooking',
            name: 'Đặt ngay'
        }
    },
    {
        component: "app-category-viloran-special-features",
        title: "",
        mt: '',
        content: [
            {
                image: '../../../../../assets/images/viloran/Viloran_Exterior_2.jpg',
                title: 'Ngoại thất',
                toElement: '#design',
                description: 'Viloran thực sự khác biệt những chiếc MPV đang được phân phối chính thức tại thị trường Việt Nam nhờ những thiết kế cuốn hút ngay từ ánh nhìn đầu tiên.'
            },
            {
                image: '../../../../../assets/images/viloran/Viloran_interior.jpg',
                title: 'Nội thất tiện nghi',
                toElement: '#interior',
                description: 'Tận hưởng đẳng cấp Đức từ dòng MPV hạng sang'
            },
            {
                image: '../../../../../assets/images/viloran/Viloran_VWVN_2023 (10).jpg',
                title: 'Khả năng vận hành',
                toElement: '#operation',
                description: 'Mạnh mẽ và êm ái'
            },
            {
                image: '../../../../../assets/images/viloran/Viloran_VWVN_2023 (3).jpg',
                title: 'Hệ thống an toàn và hỗ trợ',
                toElement: '#sss',
                description: 'Công nghệ hàng đầu đến từ Đức'
            }
        ]
    },
    {
        component: "app-category-tab-horizontal",
        title: "Ngoại thất",
        mt: '120px',
        id: 'design',
        content: [
            {
                header: 'Dòng xe MPV có kích thước lớn nhất của thương hiệu Volkswagen.',
                image: '../../../../../assets/images/viloran/Viloran_thumbnail_design.jpg',
                title: ``,
                // description: 'Kích thước tổng thể: 5.346 x 1.976 x 1.781 mm Khoảng cách hai cầu xe: 3.180 mm Dung tích khoang hành lý: '
                list: ['Kích thước tổng thể: 5.346 x 1.976 x 1.781 mm','Khoảng cách hai cầu xe: 3.180 mm','Dung tích khoang hành lý: ']
            },
            {
                header: 'Phong cách thiết kế đặc trưng Volkswagen',
                image: '../../../../../assets/images/viloran/Viloran_thumbnail_design.jpg', 
                title: ``,
                description: `Phong cách thiết kế V-line mang nét đặc trưng Volkswagen được làm nổi bật với cụm lưới tản nhiệt mạ chrome, phối hợp hài hòa với cụm đèn IQ. Light thiết kế lớn và cấu hình ánh sáng mang tính nhận diện cao.`
            },
            {
                header: 'Cửa trượt điều khiển điện và chống kẹt.',
                image: '../../../../../assets/images/viloran/Viloran_thumbnail_design.jpg',
                title: ``,
                // description: `Cụm đèn sau LED thiết kế độc đáo và cá tính vuốt cạnh sang hai bên với màu sắc chuyển tông huyền ảo. `,
            },
            {
                header: 'Hệ thống đèn IQ. Light thích ứng thông minh',
                image: '../../../../../assets/images/viloran/Viloran_thumbnail_design.jpg',
                title: ``,
                list: [
                    'Chức năng tự động bật tắt Auto',
                    'Đèn hỗ trợ mở rộng góc chiếu (Static Cornering Light)',
                    'Chức năng mở rộng góc chiếu khi vào cua chủ động (Dynamic Cornering Light)',
                    'Chức năng tự động điều chỉnh độ cao ánh sáng  (Height Automatic Adjustment Headlight)',
                    'Đèn hỗ trợ chiếu sáng mọi thời tiết (All Weather Light)',
                    'Chức năng điều chỉnh Front-Light System vùng chiếu sáng chủ động (Dynamic light assist)',
                    'Chức năng Hỗ trợ chiếu xa chủ động (High beam control)',
                    'Chức năng đèn chờ dẫn đường (coming home)/ Đèn chào mừng (leaving home)'
                ]
            },
            {
                header: 'Cửa sổ trời toàn cảnh panoramic sunroof điều khiển cảm ứng',
                image: '../../../../../assets/images/viloran/Viloran_thumbnail_design.jpg',
                title: ``,
                description: ``,
            },
            {
                header: 'Thanh mạ chrome trang trí kết nối logo và đèn xe, cản sau và cánh hướng gió sau mang đến thiết kế cân đối. ',
                image: '../../../../../assets/images/viloran/Viloran_thumbnail_design.jpg',
                title: ``,
                description: ``,
            },
            {
                header: 'Cụm đèn thiết kế sắc sảo với kiểu vuốt nhọn và tạo hình ánh sáng 3D độc đáo',
                image: '../../../../../assets/images/viloran/Viloran_thumbnail_design.jpg',
                title: ``,
                description: ``,
            },
            {
                header: 'Cốp xe đóng mở rảnh tay (đá cốp)',
                image: '../../../../../assets/images/viloran/Viloran_thumbnail_design.jpg',
                title: ``,
                description: ``,
            },
            {
                header: 'Mâm đúc hợp kim  ',
                image: '../../../../../assets/images/viloran/Viloran_thumbnail_design.jpg',
                title: ``,
                // description: 'Kích thước tổng thể: 5.346 x 1.976 x 1.781 mm Khoảng cách hai cầu xe: 3.180 mm Dung tích khoang hành lý: '
                list: ['Comfort Line: 235/55 R19', 'High Line: 235/50 R20']
            },
            {
                header: 'Màu sắc',
                image: '../../../../../assets/images/viloran/Viloran_thumbnail_design.jpg',
                title: ``,
                // description: 'Kích thước tổng thể: 5.346 x 1.976 x 1.781 mm Khoảng cách hai cầu xe: 3.180 mm Dung tích khoang hành lý: '
                list: [
                'Crimson Red - Mettalic',
                'Brisbane Gold - Metallic',
                'Glacier White - Pearl effect',
                'Deep Black - Metallic',
                'Sliver Leaf - Metallic']
            },
        ]
    },
    {
        component: "app-category-tab-horizontal",
        title: "Nội thất và Tiện nghi",
        mt: '120px',
        id: 'interior',
        content: [
            {
                header: 'Hàng ghế 2 kiểu thương gia, với gói trang bị cao cấp',
                image: '../../../../../assets/images/viloran/Viloran_thumbnail_interior.jpg',
                title: ``,
                // description: 'Kích thước tổng thể: 5.346 x 1.976 x 1.781 mm Khoảng cách hai cầu xe: 3.180 mm Dung tích khoang hành lý: '
                list: [
                    'Hai hàng ghế bố trí riêng biệt, có bệ tì tay riêng, khay để ly riêng, cổng sạc, hộc chứa đồ, cụm công tắc điều khiển riêng và có lối đi ở giữa.',
                    'Trang bị công tắc điều chỉnh ghế hành khách phía trước.',
                    'Bố trí bệ đỡ chân điều chỉnh điện, có khả năng chỉnh góc 90 độ.',
                    'Điều chỉnh điện chức năng nghiêng lưng ghế tối đa 70 độ.',
                    'Chức năng làm mát hoặc sấy ghế.',
                    'Chức năng massage 3 chế độ và 3 cường độ.',
                    'Có gối tự đầu tạo nên thư thế ngồi, nằm nghỉ thoải mái và thư giãn tối đa.'
                ]
            },
            {
                header: `Ghế người lái chỉnh điện 8 hướng, 4 hướng đệm lưng, nhớ ghế 3 vị trí (High Line)
Ghế hành khách phía trước chỉnh điện 8 hướng, 4 hướng đệm lưng`,
                image: '../../../../../assets/images/viloran/Viloran_thumbnail_interior.jpg',
                title: ``,
                description: ``
            },
            {
                header: `Màn hình hiển thị đa thông tin kỹ thuật số 10.3 inch cho người lái`,
                image: '../../../../../assets/images/viloran/Viloran_thumbnail_interior.jpg',
                title: ``,
                description: ``
            },
            {
                header: `Cần số điện tử`,
                image: '../../../../../assets/images/viloran/Viloran_thumbnail_interior.jpg',
                title: ``,
                description: ``
            },
            {
                header: `Đèn viền trang trí nội thất 30 màu (High Line)`,
                image: '../../../../../assets/images/viloran/Viloran_thumbnail_interior.jpg',
                title: ``,
                description: ``
            },
            {
                header: `Hệ thống giải trí màn hình cảm ứng 12 ich, kết nối Apple CarPlay, USB , Bluetooth`,
                image: '../../../../../assets/images/viloran/Viloran_thumbnail_interior.jpg',
                title: ``,
                description: ``
            },
            {
                header: `Sạc không dây`,
                image: '../../../../../assets/images/viloran/Viloran_thumbnail_interior.jpg',
                title: ``,
                description: ``
            },
            {
                header: `Điều hòa nhiệt độ tự động, 3 vùng, lọc gió PM2.5, điều chỉnh cảm ứng`,
                image: '../../../../../assets/images/viloran/Viloran_thumbnail_interior.jpg',
                title: ``,
                description: ``
            },
            {
                header: `Ốp nẹp bước chân`,
                image: '../../../../../assets/images/viloran/Viloran_thumbnail_interior.jpg',
                title: ``,
                description: ``
            },

           
        ]
    },
    {
        component: "app-category-tab-horizontal",
        title: "Khả năng vận hành",
        mt: '120px',
        id: 'operation',
        content: [
            {
                header: `Mạnh mẽ và êm ái`,
                image: '../../../../../assets/images/viloran/Viloran_thumbnail_operation.jpg',
                title: ``,
                description: ``,
                list: [
                    'Loại động cơ: 2.0L TSI',
                    'Dung tích xy lanh: 1984 cc',
                    'Công suất cực đại: 220 / 4.900-6.700 hp/rpm',
                    'Mô men xoắn cực đại: 350 / 1.600-4.300 N.m/rpm',
                    'Hộp số: Ly hợp kép DSG 7 cấp'
                ]
            },
            {
                header: `Hệ thống trợ lực lái điện biến thiên theo tốc độ Servotronic`,
                image: '../../../../../assets/images/viloran/Viloran_thumbnail_operation.jpg',
                title: ``,
                description: `Công nghệ sử dụng motor trợ lực lái điện và điều khiển khả năng trợ lực tùy theo tốc độ xe, nhờ đó xe sẽ đánh lái nhẹ nhàng ở tốc độ thấp và chính xác ở tốc độ cao
Hệ thống cũng sử dụng thước lái có kết cấu đặt biệt với góc nghiêng răng thay đổi nhờ đó có thể giảm được góc xoay vô lăng so với các loại trợ lực lái thông thường.`,
            },
            {
                header: `Hộp số tự động ly hợp kép DSG 7 cấp thế hệ mới`,
                image: '../../../../../assets/images/viloran/Viloran_thumbnail_operation.jpg',
                title: ``,
                description: `Hộp số tự động ly hợp kép DSG (Direct shift gearbox) thế hệ mới được trang bị trên xe Viloran mang lại khả năng truyền mô men tối ưu, giúp xe sang số mượt, người ngồi xe sẽ hài lòng về sự êm ái, thoải mái, đồng thời nâng cao khả năng truyền lực khi leo dốc, chở tải và tăng tốc.`,
            },
        ]
    },
    {
        component: "app-category-tab-horizontal",
        title: "Hệ thống an toàn và hỗ trợ",
        mt: '120px',
        id: 'sss',
        content: [
            {
                header: `Kiểm soát hành trình thích ứng ACC (+ tính năng Stop & Go)`,
                image: '../../../../../assets/images/viloran/Viloran_thumbnail_sss.jpg',
                title: ``,
                description: `Hệ thống sẽ tự động duy trì tốc độ được thiết lập bởi người lái. Đồng thời khi xuất hiện một phương tiện phía trước, hệ thống sẽ tự động điều chỉnh tốc độ và duy trì khoảng cách được thiết lập với xe di chuyển phía trước nhằm mang lại sự thoải mái cho người điều khiển xe đặc biệt là khi lái xe đường dài.`
            },
            {
                header: `Cảnh báo tiền va chạm FCW và hỗ trợ phanh khẩn cấp AEB`,
                image: '../../../../../assets/images/viloran/Viloran_thumbnail_sss.jpg',
                title: ``,
                list: [
                    'Hệ thống sẽ phát hiện phương tiện, người đi bộ phía trước thông qua các radar và camera.',
                    'Cảnh báo bằng âm thanh và tín hiệu trên màn hình cho người điều khiển về nguy cơ va chạm.',
                    'Tự động áp dụng lực phanh nhẹ (rà phanh) để để nhắc nhở về nguy cơ va chạm tăng lên.',
                    'Tự động phanh khẩn cấp để tránh va chạm thông qua nhiều giai đoạn với lực phanh tăng dần. ',
                    'Hệ thống có thể hoạt động (nếu được kích hoạt) ngay cả khi ACC không kích hoạt.'
                ]
            },
            {
                header: `Camera 360`,
                image: '../../../../../assets/images/viloran/Viloran_thumbnail_sss.jpg',
                title: ``,
                description: `Hệ thống 2 camera trên gương chiếu hậu kết hợp với camera trước và sau giúp quan sát toàn cảnh xung quanh xe, có thể phát hiện chướng ngại vật. Quan sát được cả những vật cản thấp xung quanh xe khi lái xe tiến hoặc lùi.`
            },
            {
                header: `9 túi khí (High Line)`,
                image: '../../../../../assets/images/viloran/Viloran_thumbnail_sss.jpg',
                title: ``,
                description: `Túi khí phía trước. Túi khí bên hông hàng ghế trước. Túi khí bên hông hàng ghế 2. Túi khí rèm. Túi khí đầu gối người lái.`
            },
            

        ]
    },

    
]

}
