import { templateJitUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { PAGE_META_DESCRIPTION, PAGE_TITLE } from 'src/app/constants/app-constants';
import { CommonService } from "src/app/services/apis/common.service";

@Component({
    selector: 'app-tcross-v2',
    templateUrl: './tcross-v2.component.html',
    styleUrls: ['./tcross-v2.component.scss']
})
export class TcrossV2Component implements OnInit {

    constructor(
        private commonService: CommonService,
        private titleService:Title,
        private meta: Meta,
    ) { this.titleService.setTitle(`${PAGE_TITLE.tcross} | Volkswagen Việt Nam`);  }
    device: string = "pc";


    ngOnInit(): void {
        this.changeWidth();
        window.addEventListener("resize", this.changeWidth);
        this.meta.updateTag({ name: 'description', content: PAGE_META_DESCRIPTION.tcross });
        // scroll top -- khó hiểu 
        window.scrollTo({ top: 0, })
        // send view
        this.commonService.getIp().subscribe((data: any) => {
            let ip = data.ip
            console.log({ URL: window.location.href, Ip: ip })
            this.commonService.putAnalyticsURL({ URL: window.location.href, Ip: ip }).subscribe((data: any) => {
                console.log('putAnalyticsURL')
                console.log({ URL: window.location.href, Ip: ip })
            })
        })
    }


    changeWidth() {
        var w = window.innerWidth;
        var tcrossBanner = (<HTMLImageElement>document.getElementById("tcrossBanner"));
        if (w <= 576) {
            if (this.device != "mobile") {
                tcrossBanner.src = './assets/images/cate/tcross/bannerMobile.jpg';
            }
            this.device = "mobile";
        }
        else if (w <= 820) {
            if (this.device != "tablet") {
                tcrossBanner.src = './assets/images/cate/tcross/banner.jpg';
            }
            this.device = "tablet";
        }
        else {
            if (this.device != "pc") {
                tcrossBanner.src = './assets/images/cate/tcross/banner.jpg';
            }
            this.device = "pc";
        }
    }

    downloadBrochure(e:any) {
        e.preventDefault();
        var link=document.createElement('a');
        document.body.appendChild(link);
        link.download = "tcross-brochure_"+new Date().toISOString();
        link.href='./assets/images/cate/tcross/brochure.pdf';
        link.click();
    }


    content: any = [
        {
            component: "app-category-banner",
            image: "./assets/images/cate/tcross/banner.jpg",
            imageMobile: "./assets/images/cate/tcross/bannerMobile.jpg",
            imageTablet: "./assets/images/cate/tcross/banner.jpg",
        },
        {
            component: "app-category-main-title",
            title: "T-Cross"
        },
        {
            component: "app-category-summary",
            content: [
                {
                    title: 'Giá từ (VNĐ)',
                    value: '1.099.000.000'
                }, 
                
                // {
                //     title: 'T-Cross Luxury',
                //     value: '1,299,000,000 VNĐ'
                // },
                {
                    title: 'Dung tích xy lanh cm3',
                    value: '999'
                },
                {
                    title: 'Loại động cơ',
                    value: '1.0 TSI, 3 xy lanh (3 cylinders)'
                },
                {
                    title: 'Công suất cực đại Hp/(vòng/phút)',
                    value: '115 Hp/ 5.000-5.500'
                },
                {
                    title: 'Mô men xoắn cực đại (Nm)',
                    value: '178 Nm/ 1.750- 4.500'
                },
                {
                    title: 'Hộp số',
                    value: 'Tự động 6 cấp (6AT)'
                },
                {
                    title: 'Tiêu thụ nhiên liệu kết hợp',
                    value: '7.22 / 6.1 lit/100km'
                },
                {
                    title: 'Tiêu thụ nhiên liệu trong đô thị',
                    value: '9.46 / 9.3 lit/100km'
                },
                {
                    title: 'Tiêu thụ nhiên liệu ngoài đô thị',
                    value: '5.92 / 7.4 lit/100km'
                }
            ]
        },
        {
            component: "app-category-brochure",
            name: "Tải Brochure",
            link: 'https://www.fshare.vn/file/LODI4TGJ2CCC'
        },
        {
            component: "app-category-h1",
            name: "Sắc màu độc bản",
            mt: '',
            description: `Hãy là chính mình và không ngại thử thách. Đó là cách mà chúng tôi tạo ra T-Cross, chiếc SUV đô thị của thế hệ tân tiến nhờ công nghệ và ngôn ngữ thiết kế đầy chất riêng, kết hợp với Volkswagen DNA trứ danh và sự cải tiến táo bạo để tạo ra xu hướng.`,
            isCenterDescription: false
        },
        // {
        //     component: "app-category-prebooking",
        //     title: "Đặt hàng sản phẩm T-Cross",
        //     image: './assets/images/cate/tcross/prebooking.jpg',
        //     mt: '',
        //     link: {
        //         value: '/prod/booking',
        //         name: 'Đặt ngay'
        //     }
        // },
        {
            component: "app-category-special-features",
            title: "",
            mt: '',
            content: [
                {
                    image: './assets/images/cate/tcross/goToExterior.jpg',
                    title: 'Tuyên ngôn cá tính',
                    toElement: '#exterior-tcross',
                    description: 'Thiết kế táo bạo của T-Cross dành cho những người khao khát để lại dấu ấn và tận hưởng cuộc sống muôn màu. Hiệu suất mạnh mẽ của khối động cơ thúc đẩy khát vọng chiến thắng của họ. Và độ chính xác do người Đức chế tạo cho phép họ chuyển động hết mình. Một mẫu xe dành cho những người có cái tôi kiên cường. Những người trẻ nắm quyền vận mệnh của mình.'
                },
                {
                    image: './assets/images/cate/tcross/goToInterior.jpg',
                    title: 'Nội thất kết hợp hai tông màu',
                    toElement: '#interior-tcross',
                    description: 'Sự trẻ trung và cá tính thể hiện ở thiết kế nội thất 2 tone màu trắng và đen ở cả ghế ngồi và các chi tiết taplo, trần xe, sàn xe.'
                },
                {
                    image: './assets/images/cate/tcross/goToSafesystem.jpg',
                    title: 'Hệ thống an toàn và hỗ trợ',
                    toElement: '#safe-system-and-support',
                    description: 'Sở hữu lên hơn 20 tính năng an toàn tiêu chuẩn toàn cầu.'
                }
            ]
        },
        {
            component: "app-category-special-features",
            title: "Ngoại thất",
            mt: '',
            id: 'exterior-tcross',
            content: [
                {
                    image: './assets/images/cate/tcross/exteriorLuxury.jpg',
                    title: 'Ngoại thất thời thượng và năng động',
                    description: 'Ngay từ cái nhìn đầu tiên có thể nhận biết được ngay cá tính của T-Cross. Trẻ trung, năng động, đột phá, T-Cross có thể khiến nhiều người phải ngoái nhìn, tự tin làm bừng sáng con đường của riêng.'
                },
                {
                    image: './assets/images/cate/tcross/lightBehind.jpg',
                    title: 'Đèn hậu LED vô cực chính là tuyên ngôn cá tính của T-Cross với thế giới.',
                    description: 'Thời thượng và duy nhất trong phân khúc với thiết kế liền mạch từ cạnh này sang cạnh khác, tạo ấn tượng về một chùm ánh sáng bất tận.'
                },
                {
                    image: './assets/images/cate/tcross/lightFront.jpg',
                    title: 'Cụm đèn trước thiết kế lớn',
                    description: 'Phiên bản Luxury trang bị đèn LED với các chức năng tự động bật tắt, chức năng cân bằng đèn pha để không làm chói mắt xe đi ngược chiều. Chức năng coming home và leaving home giúp chiếu sáng khi về nhà cũng như khi khởi hành'
                }
            ]
        },
        {
            component: "app-category-tab-horizontal",
            title: "",
            mt: '',
            content: [
                {
                    header: 'Lưới tản nhiệt "lượn sóng"',
                    image: './assets/images/cate/tcross/exterior0.jpg',
                    title: ``,
                    description: 'T-Cross có thể tạo ra những chuyển động mạnh mẽ ngay cả khi nó đứng yên bởi thiết kế lượn sóng của lưới tản nhiệt kiểu bậc thang 3D mạ chrome táo bạo.'
                },
                {
                    header: 'Cánh nhận diện Chrome',
                    image: './assets/images/cate/tcross/exterior1.jpg',
                    title: ``,
                    description: `Cánh nhận diện Chrome cong vút táo bạo đánh dấu sự hiện diện đặc biệt của T-Cross trong bất cứ khung cảnh nào`
                },
                {
                    header: 'Khoảng sáng gầm xe lớn 188 mm',
                    image: './assets/images/cate/tcross/exterior2.jpg',
                    title: ``,
                    description: `Khoảng sáng gầm xe lớn 188 mm của Volkswagen T-Cross mang lại lợi thế vận hành`,
                },
                {
                    header: 'Đỏ - Xanh - Vàng - Xám - Trắng - Bạc',
                    image: './assets/images/cate/tcross/exterior3.gif',
                    title: ``,
                    description: `Tự do lựa chọn T-CROSS với 6 màu sắc trẻ trung và cá tính`,
                },
                {
                    header: 'Mâm xe 16-17 inch',
                    image: './assets/images/cate/tcross/exterior4.gif',
                    title: ``,
                    description: `Mâm xe T-Cross với nhiều sự lựa chọn, thiết kế thể thao và gọn gàng`,
                },
            ]
        },
        {
            component: "app-category-tab-horizontal",
            title: "Nội thất và các tiện nghi",
            mt: '120px',
            id: 'interior-tcross',
            content: [
                {
                    header: 'Nội thất kết hợp hai tông màu',
                    image: './assets/images/cate/tcross/interior0.jpg',
                    title: ``,
                    description: 'Sự trẻ trung và cá tính thể hiện ở thiết kế nội thất 2 tone màu trắng và đen ở cả ghế ngồi và các chi tiết taplo, trần xe, sàn xe.'
                },
                {
                    header: 'Vô lăng đa chức năng',
                    image: './assets/images/cate/tcross/interior1.jpg',
                    title: ``,
                    description: `Vô lăng thể thao bọc da, thiết kế D-Cut tích hợp nhiều nút điều khiển, cùng với lẫy số
          và chức năng Cruise Control hỗ trợ người lái đam mê tự khám phá các cung đường.`
                },
                {
                    header: 'Vị trí ngồi rộng rãi',
                    image: './assets/images/cate/tcross/interior2.jpg',
                    title: ``,
                    description: `Sự thoải mái được ưu tiên cho cả hàng ghế trước và hàng ghế sau với chiều dài để chân,
          khoảng trần xe và bề rộng nội thất lớn. Đồng thời chất liệu ghế bọc da có lỗ thông khí sẽ đảm bảo sự thông
          thoáng giúp hành khách thoải mái hơn trong các chuyến hành trình dài.`,
                },
                {
                    header: 'Điều hòa cảm ứng tự động',
                    image: './assets/images/cate/tcross/interior3.jpg',
                    title: ``,
                    description: `Điều hoà tự động có chức năng lọc không khí, với điều khiển cảm ứng tăng thêm sự thoải
          mái và thú vị cho người dùng.`,
                },
                {
                    header: 'Hệ thống giải trí',
                    image: './assets/images/cate/tcross/interior4.jpg',
                    title: ``,
                    description: `Màn hình giải trí cảm ứng 10 inch với kết nối App-Connect không dây`,
                },
                {
                    header: 'Đồng hồ trung tâm Digital Cockpit',
                    image: './assets/images/cate/tcross/interior5.jpg',
                    title: ``,
                    description: `Đồng hồ trung tâm kỹ thuật số Digital Cockpit lựa chọn được nhiều giao diện hiển thị
          sinh động`,
                },
                {
                    header: 'Sạc điện thoại không dây',
                    image: './assets/images/cate/tcross/interior6.jpg',
                    title: ``,
                    description: `Sạc điện thoại không dây tiện lợi giúp bạn luôn kết nối với cuộc sống hiện đại.`,
                },
                {
                    header: 'Cửa sổ trời',
                    image: './assets/images/cate/tcross/interior7.jpg',
                    title: ``,
                    description: `Cửa sổ trời mang đến những trải nghiệm thú vị với thiên nhiên.`,
                },
                {
                    header: 'Thể tích khoang hành lý  (lít)',
                    image: './assets/images/cate/tcross/interior8.jpg',
                    title: ``,
                    description: `Khoang hành lí rộng rãi:`,
                    list: [
                        'Sau hàng ghế thứ 2: 385',
                        'Sau hàng ghế thứ 1: 1.405'
                    ]
                },
            ]
        },
        {
            component: "app-category-detail-element",
            title: "Hệ thống An toàn và hỗ trợ",
            id: 'safe-system-and-support',
            description: 'Để chống lại những nguy cơ tiềm ẩn khi lái xe hàng ngày',
            image: './assets/images/cate/tcross/safe.jpg',
            mt: '',
            infos: [
                {
                    title: 'T-Cross sẽ luôn là người bạn đồng hành mang đến sự tự tin và an tâm.',
                    description: 'Các hệ thống này sẽ phối hợp hoạt động để đảm bảo rút ngắn quãng đường phanh cũng như hỗ trợ vào cua, đánh lái tránh chướng ngại vật ổn định cũng như hỗ trợ xe vận hành ổn định ngay cả khi đường trơn.',
                    list: [
                        'Cấu trúc thân xe an toàn',
                        'Phanh đĩa phía trước với đầy đủ các tính năng an toàn nâng cao.',
                        'Hệ thống khóa vi sai điện tử.',
                        'Hệ thống hỗ trợ trả lái thông minh DSR',
                        'Camera lùi',
                        'Hệ thống 6 túi khí',
                    ]
                }
            ],
        },
        {
            component: "app-category-detail-element",
            title: "Khả năng vận hành",
            description: 'Thú vị khi cầm lái ở cả điều kiện đô thị và ngoài đô thị',
            image: './assets/images/cate/tcross/operate.jpg',
            mt: '120px',
            infos: [
                {
                    title: 'Động cơ tăng áp 1.0 TSI',
                    description: 'Động cơ tăng áp 1.0 TSI và hệ thống phun nhiên liệu trực tiếp sẽ mang đến trải nghiệm vận hành rất khác biệt.',
                },
                {
                    title: 'Công suất 115Ps, mô men xoắn tối đa 178Nm',
                    description: 'Công suất tối ưu trong phân khúc: 115Ps cùng với mô men xoắn tối đa 178Nm ở vòng tua máy thấp và rộng mang lại sức mạnh vận hành tương đương với nhiều mẫu xe SUV cỡ trung tại VN.',
                },
                {
                    title: 'Hộp số tự động 6 cấp',
                    description: 'Vận hành linh hoạt trong đô thị và mạnh mẽ, tăng tốc tốt khi đi đường ngoài đô thị.',
                },
                {
                    title: 'Mức tiêu thụ nhiên liệu hợp lý với 6l/100km',
                    description: '',
                }
            ],
        },
        {
            component: "app-category-detail-versions",
            title: "Chi tiết các phiên bản",
            mt: '120px',
            content: [
                {
                    name: 'Phiên bản T-Cross Elegance (CW14NY)',
                    price: '1,099,000,000 VND',
                    image: './assets/images/cate/tcross/iconElegance.png',
                    infos: [
                        '1.0 TSI (Turbo tăng áp và phun nhiên liệu trực tiếp)',
                        'Hộp số tự động 6 cấp',
                        'Đèn Halogen tiêu chuẩn',
                        'Hệ thống 2 túi khí',
                        'Đồng hồ trung tâm Analog với màn hình hiển thị đa thông tin',
                        'Mâm xe 16 inch ',
                        'Cụm đèn sau LED vô cực',
                        'Cánh nhận diện Chrome trước/sau',
                        'Giá nóc xe',
                        'Điều hoà tự động, điều khiển cảm ứng',
                        'Màn hình giải trí đa chức năng 10 inch ',
                        'Kết nối App-Connect',
                        'Sạc điện thoại không dây',
                        'Đèn Ambient light trắng',
                        'Cân bằng điện tử ESC',
                        'Chống trượt khi tăng tốc ASR',
                        'Khoá vi sai điện tử EDL',
                        'Hỗ trợ khởi hành ngang dốc HAS',
                        'Cruise Control',
                        'Lẫy số trên vô lăng',
                    ]
                },
                {
                    name: 'Phiên bản T-Cross Luxury (CW15NY)',
                    price: '1,299,000,000 VND',
                    image: './assets/images/cate/tcross/iconLuxury.png',
                    infos: [
                        '1.0 TSI (Turbo tăng áp và phun nhiên liệu trực tiếp)',
                        'Hộp số tự động 6 cấp',
                        'Cụm đèn LED phía trước ',
                        'Hệ thống mở khoá và khởi động thông minh',
                        'Hệ thống 6 túi khí',
                        'Cửa sổ trời ',
                        'Cảnh báo áp suất lốp TPMS',
                        'Đồng hồ hiển thị thông tin kỹ thuật số đa sắc“Digital Cockpit” ',
                        'Ghế bọc da cao cấp 2 tông màu với chức năng thông hơi ',
                        'Mâm xe 17 inch',
                        'Cụm đèn sau LED vô cực',
                        'Cánh nhận diện Chrome trước/sau',
                        'Giá nóc xe',
                        'Điều hoà tự động điều khiển cảm ứng',
                        'Màn hình giải trí đa chức năng 10 inch',
                        'Kết nối App-Connect',
                        'Sạc điện thoại không dây',
                        'Đèn Ambient light trắng',
                        'Cân bằng điện tử ESC',
                        'Chống trượt khi tăng tốc ASR',
                        'Khoá vi sai điện tử EDL',
                        'Hỗ trợ khởi hành ngang dốc HAS',
                        'Cruise Control',
                        'Lẫy số trên vô lăng',
                    ]
                }
            ],
        },

    ]
}
