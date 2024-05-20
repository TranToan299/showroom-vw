import { Component, OnInit, Renderer2, Inject, Input } from '@angular/core';
import { CommonService } from "src/app/services/apis/common.service";
import { Meta } from '@angular/platform-browser'
import { DOCUMENT } from '@angular/common';
import { Title } from "@angular/platform-browser";
import { PAGE_META_DESCRIPTION, PAGE_TITLE } from 'src/app/constants/app-constants';
@Component({
    selector: 'app-virtus',
    templateUrl: './virtus.component.html',
    styleUrls: ['./virtus.component.scss']
})
export class VirtusComponent implements OnInit {

    constructor(
        private commonService: CommonService,
        private meta: Meta,
        private _renderer2: Renderer2,
        private titleService: Title,
        @Inject(DOCUMENT) private _document: Document
    ) { this.titleService.setTitle(`${PAGE_TITLE.virtus} | Volkswagen Việt Nam`);  }
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
                value: '999 cm3',
                //extraText: "cm3"
            },
            {
                title: 'Loại động cơ',
                value: '1.0 TSI, 3 xy lanh, tăng áp',
            },
            {
                title: 'Công suất tối đa',
                value: '115 Hp @ 5500 vòng/phút',
                //extraText:'Hp @ 550 vòng/phút'
            },
            {
                title: 'Hộp số',
                value: 'Tự động 6 cấp (6AT)',
            },
            {
                title: 'Mô men tối đa',
                value: '178 Nm @ 1750-4500 vòng/phút',
                //extraText:'Nm @ 1750-4500 vòng/phút'
            }
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
            title: "Virtus"
        },
        {
            component: "app-category-brochure",
            name: "Tải Brochure",
            link: 'https://www.fshare.vn/file/N36BROSPW4J5'
        },
        {
            component: "app-category-h1",
            name: "Chuẩn mực thời thượng",
            mt: '',
            description: `Virtus được xây dựng theo chuẩn mực cân bằng và trọn vẹn trong mọi phương diện: lối thiết kế trau chuốt ở từng chi tiết của kiểu dáng sedan thời thượng, “trái tim” là cỗ máy TSI vận hành hiệu quả tối ưu với mức nhiên liệu tối thiểu, tiện nghi được chú trọng bởi hệ thống kết nối không dây và quan trọng nhất là nền tảng an toàn hàng đầu đang chảy trong DNA.`,
            isCenterDescription: false
        },
        {
            component: "app-category-special-features",
            title: "",
            mt: '',
            content: [
                {
                    image: 'https://vw-image.s3.ap-southeast-1.amazonaws.com/image/VIRTUS_19.webp',
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
            image: 'https://vw-image.s3.ap-southeast-1.amazonaws.com/image/VIRTUS_20.webp',
            mt: '',
            link: {
                value: '/virtus/deposit',
                name: 'Đặt ngay'
            }
        },
        {
            component: "app-category-special-features",
            title: "",
            mt: '',
            content: [
                {
                    image: 'https://vw-image.s3.ap-southeast-1.amazonaws.com/image/VIRTUS_1.webp',
                    title: 'Thiết kế trau chuốt theo tinh thần thời thượng',
                    toElement: '#design',
                    description: 'Kế thừa nét hấp dẫn vượt thời gian của kiểu dáng sedan thon dài sang trọng, phối cùng vẻ thể thao năng động của thiết kế đèn LED thời thượng và các đường gân 3D nổi bật tạo nên cho Virtus một diện mạo khác biệt.'
                },
                {
                    image: 'https://vw-image.s3.ap-southeast-1.amazonaws.com/image/VIRTUS_2.webp',
                    title: 'Nội thất tiện nghi và kết nối công nghệ',
                    toElement: '#interior',
                    description: 'Với chiều dài cơ sở lớn 2,651 mm, không gian nội thất của Virtus rất rộng rãi. Bố cục thiết kế gọn gàng, khoa học với các đường nét hài hoà. Kết nối công nghệ trọn vẹn mang đến một không gian mở ra thế giới bên ngoài nhưng là của riêng bạn.'
                },
                {
                    image: 'https://vw-image.s3.ap-southeast-1.amazonaws.com/image/VIRTUS_3.webp',
                    title: 'Hiệu quả vận hành tối đa với mức tiêu thụ nhiên liệu tối thiểu',
                    toElement: '#operation',
                    description: '"Trái tim" là cỗ máy chuẩn chất Đức, được phát triển dựa trên khung gầm MQB A0 và xây dựng với tinh thần chuẩn mực vẹn toàn, thì tạo ra sự phấn khích bùng nổ khi cầm lái là không khó.'
                }
            ]
        },
        {
            component: "app-category-tab-horizontal",
            title: "Thiết kế trau chuốt theo tinh thần thời thượng",
            mt: '120px',
            id: 'design',
            content: [
                {
                    header: 'Đường viền mạ chrome nổi bật',
                    image: 'https://vw-image.s3.ap-southeast-1.amazonaws.com/image/VIRTUS_4.webp',
                    title: ``,
                    description: 'Các đường viền mạ chrome sắc nét vươn ngang một cách mạnh mẽ tạo sự kết nối các chi tiết ở phần đầu xe, mang đến cho Virtus một diện mạo táo bạo và khác biệt.'
                },
                {
                    header: 'Đèn pha và đèn ban ngày LED',
                    image: 'https://vw-image.s3.ap-southeast-1.amazonaws.com/image/VIRTUS_5.webp',
                    title: ``,
                    description: `Chính giữa lưới tản nhiệt là logo VW ấn tượng nối dài với đèn pha và đèn ban ngày LED có chức năng tự động bật tắt, điều chỉnh khoảng sáng, coming home/leaving home (phiên bản Luxury).`
                },
                {
                    header: 'Đèn sau LED ấn tượng',
                    image: 'https://vw-image.s3.ap-southeast-1.amazonaws.com/image/VIRTUS_6.webp',
                    title: ``,
                    description: `Cụm đèn sau LED thiết kế độc đáo và cá tính vuốt cạnh sang hai bên với màu sắc chuyển tông huyền ảo. `,
                },
                {
                    header: 'Khoảng sáng gầm 179mm',
                    image: 'https://vw-image.s3.ap-southeast-1.amazonaws.com/image/VIRTUS_7.webp',
                    title: ``,
                    description: `Khoảng sáng gầm lớn trong phân khúc, mang lại lợi thế vận hành.`,
                },
                {
                    header: 'Mâm 16 inch',
                    image: 'https://vw-image.s3.ap-southeast-1.amazonaws.com/image/VIRTUS_8.webp',
                    title: ``,
                    description: ``,
                },
                {
                    header: '5 màu sắc cá tính',
                    video: 'https://vw-image.s3.ap-southeast-1.amazonaws.com/image/Virtus-Colours-0x360-730k.mp4',
                    title: ``,
                    description: `Đỏ Wild Chery Metallic, Vàng Curcuma Metallic, Xanh Rising Metallic, Trắng Candy, Bạc Reflex Metallic.`,
                }
            ]
        },
        {
            component: "app-category-tab-horizontal",
            title: "Nội thất tiện nghi và kết nối công nghệ",
            mt: '120px',
            id: 'interior',
            content: [
                {
                    header: 'Kết nối không dây được chú trọng',
                    image: 'https://vw-image.s3.ap-southeast-1.amazonaws.com/image/VIRTUS_9.webp',
                    title: ``,
                    description: 'Kết nối không dây được chú trọng trong hệ thống tiện nghi của Virtus: App-connect không dây, Bluetooth, sạc điện thoại không dây.'
                },
                {
                    header: 'Màn hình giải trí cảm ứng MIB Regio',
                    image: 'https://vw-image.s3.ap-southeast-1.amazonaws.com/image/VIRTUS_10.webp',
                    title: ``,
                    description: `Kích thước lớn 10 inch sắc nét.`
                },
                {
                    header: 'Đồng hồ trung tâm Digital Cockpit (phiên bản Luxury)',
                    image: 'https://vw-image.s3.ap-southeast-1.amazonaws.com/image/VIRTUS_11.webp',
                    title: ``,
                    description: `Kích thước 8 inch có thể điều chỉnh, thay đổi giao diện.`,
                },
                {
                    header: 'Vô lăng',
                    image: 'https://vw-image.s3.ap-southeast-1.amazonaws.com/image/VIRTUS_12.webp',
                    title: ``,
                    description: `Vô lăng thể thao bọc da, thiết kế D-Cut tích hợp nhiều nút điều khiển và lẫy sang số.`,
                },
                {
                    header: 'Cruise Control',
                    image: 'https://vw-image.s3.ap-southeast-1.amazonaws.com/image/VIRTUS_13.webp',
                    title: ``,
                    description: `Hỗ trợ người lái ở cung đường dài cũng như lên dốc.`,
                },
                {
                    header: 'Điều hoà tự động Climatronic',
                    image: 'https://vw-image.s3.ap-southeast-1.amazonaws.com/image/VIRTUS_14.webp',
                    title: ``,
                    description: `Điều khiển cảm ứng có bộ lọc không khí.`,
                },
                {
                    header: 'Cửa sổ trời (phiên bản Luxury) ',
                    image: 'https://vw-image.s3.ap-southeast-1.amazonaws.com/image/VIRTUS_15.webp',
                    title: ``,
                    description: `Chỉnh điện tiện nghi mang đến không gian thoải mái.`,
                },
                {
                    header: 'Khoang hành lý rộng rãi 521 lít',
                    image: 'https://vw-image.s3.ap-southeast-1.amazonaws.com/image/VIRTUS_25.webp',
                    title: ``,
                    description: `Phù hợp cho mọi chuyến hành trình.`,
                }
            ]
        },
        {
            component: "app-category-tab-horizontal",
            title: "Hiệu quả vận hành tối đa với mức tiêu thụ nhiên liệu tối thiểu",
            mt: '120px',
            id: 'operation',
            content: [
                {
                    header: `Động cơ 1.0 TSI Turbo tăng áp. 
                        Công suất 115Hp tại 5500 vòng/phút.
                        Mô-men xoắn 178 Nm tại 1750- 4500vòng/phút.`,
                    image: 'https://vw-image.s3.ap-southeast-1.amazonaws.com/image/VIRTUS_17.webp',
                    title: ``,
                    description: 'Động cơ 1.0 TSI của Virtus được trang bị Turbo tăng áp, phun nhiên liệu trực tiếp, biến thiên trục cam nạp và xả. Điều này tối ưu hóa lượng khí nạp và xả, tối ưu hoá khả năng vận hành và tiết kiệm nhiên liệu.'
                },
                // {
                //     header: 'Mức tiêu thụ nhiêu liệu chỉ ở mức 6,64 lít/ 100km. (phiên bản Elegance - hỗn hợp)',
                //     image: 'https://vw-image.s3.ap-southeast-1.amazonaws.com/image/VIRTUS_17.webp',
                //     title: ``,
                //     description: `Kích thước 8 inch có thể điều chỉnh, thay đổi giao diện.`,
                // },
                {
                    header: 'Hộp số tự động 6 cấp cho khả năng truyền động hiệu quả',
                    image: 'https://vw-image.s3.ap-southeast-1.amazonaws.com/image/VIRTUS_18.webp',
                    title: ``,
                    description: ``
                }
            ]
        },

        {
            component: "app-category-tab-horizontal",
            title: "An toàn nằm trong DNA",
            mt: '120px',
            id: 'operation',
            content: [
                {
                    header: `Cân bằng điện tử ESC `,
                    image: 'https://vw-image.s3.ap-southeast-1.amazonaws.com/image/VIRTUS_24.webp',
                    title: ``,
                    description: 'Đối với các tình huống xe bị mất ổn định quỹ đạo khi di chuyển, thì hệ thống sẽ kích hoạt cân bằng điện tử ESC phanh các bánh xe riêng rẽ và có thể giảm mô-men xoắn, đưa xe trở về quỹ đạo cân bằng'
                },
                {
                    header: 'Chống trượt khi tăng tốc ASR',
                    image: 'https://vw-image.s3.ap-southeast-1.amazonaws.com/image/VIRTUS_22.webp',
                    title: ``,
                    description: `Ngăn ngừa hiện tượng các bánh dẫn động bị quay trơn khi khởi hành hoặc tăng tốc bằng cách kích hoạt phanh ở các bánh dẫn động và giảm mô-men xoắn.`
                },
                {
                    header: 'Hỗ trợ trả lái thông minh DSR',
                    image: 'https://vw-image.s3.ap-southeast-1.amazonaws.com/image/VIRTUS_26.webp',
                    title: ``,
                    description: `Hệ thống sẽ tác động vào motor trợ lực lái trong một số trường hợp khẩn cấp. Ví dụ khi lái xe trong trên địa hình có độ bám bên trái và phải khác nhau. Thông thường điều đó dễ làm cho đầu xe bị lệch qua một phía. Khi đó hệ thống sẽ áp dụng trợ lực phù hợp để giúp xe ổn định lại quỹ đạo. `
                },

                {
                    header: 'Kiểm soát lực kéo EDTC. ',
                    image: 'https://vw-image.s3.ap-southeast-1.amazonaws.com/image/VIRTUS_27.webp',
                    title: ``,
                    description: `Trong trường hợp đột ngột nhả chân ga hoặc sang số thấp khi đang điều khiển xe. Bướm ga đóng, công suất động cơ giảm. Lực ma sát gây nên hiện tượng phanh động cơ, chống lại tác dụng của lực kéo. Khi đó bánh xe sẽ bị khoá cứng và không điều khiển được. Hệ thống sẽ can thiệp bằng cách mở bướm ga trong khoảng nhất định để duy trì lực kéo, giúp bánh xe quay tối ưu với tốc độ xe. Và nhờ đó có thể đánh lái và điều khiển xe ổn định.  `
                },


                {
                    header: 'Hệ thống kiểm soát cự ly đỗ xe PDC ',
                    image: 'https://vw-image.s3.ap-southeast-1.amazonaws.com/image/VIRTUS_29.webp',
                    title: ``,
                    description: `Hệ thống kết hợp với camera lùi sẽ giúp lùi đỗ xe dễ dàng với hình ảnh và âm thanh cảnh báo.`
                },

                {
                    header: 'Khoá vi sai điện tử EDL ',
                    image: 'https://vw-image.s3.ap-southeast-1.amazonaws.com/image/VIRTUS_28.webp',
                    title: ``,
                    description: `Giúp xe có thể duy trì độ bám đường bằng cách phanh các bánh xe bị quay trơn và truyền lực kéo qua bánh còn lại.`
                },


                {
                    header: 'Một số tính năng an toàn tiêu chuẩn khác: ',
                    video: 'https://vw-image.s3.ap-southeast-1.amazonaws.com/image/VIRTUS_21.mp4',
                    title: ``,
                    description: `Cảnh báo áp suất lốp TPMS, 6 túi khí (phiên bản Luxury), chống bó cứng phanh ABS, hỗ trợ phanh gấp BA, 2 ISOFIX, dây đai an toàn 3 điểm 5 ghế, hỗ trợ khởi hành ngang dốc HAS, chống trộm Immobilizer, kính chắn gió nhiều lớp, thiết kế ghế an toàn…`
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
