import { DOCUMENT } from '@angular/common';
import { Component, Inject, Input, OnInit, Renderer2 } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import {
  IProductVersion,
  PAGE_META_DESCRIPTION,
  PAGE_TITLE,
} from 'src/app/constants/app-constants';
import { CommonService } from 'src/app/services/apis/common.service';

@Component({
  selector: 'app-teramont-x',
  templateUrl: './teramont-x.component.html',
  styleUrls: ['./teramont-x.component.scss'],
})
export class TeramontXComponent implements OnInit {
  isExpanded: boolean = false;
  isExpandedExterior: boolean = false;
  constructor(
    private commonService: CommonService,
    private meta: Meta,
    private _renderer2: Renderer2,
    private titleService: Title,
    @Inject(DOCUMENT) private _document: Document
  ) {
    this.titleService.setTitle(`${PAGE_TITLE.teramontX} | Volkswagen Việt Nam`);
  }
  device: string = 'pc';
  @Input() isDeposit: boolean = false;
  togglePanel() {
    this.isExpanded = !this.isExpanded;
  }
  goToElement(q: string) {
    let elemnet: any = document.querySelector(q);
    elemnet.scrollIntoView({ behavior: 'smooth' });
  }
  togglePanelExterior() {
    this.isExpandedExterior = !this.isExpandedExterior;
  }
  changeWidth() {
    var w = window.innerWidth;
    var touaregBanner = <HTMLImageElement>(
      document.getElementById('virtusBanner')
    );
    if (w <= 576) {
      if (this.device != 'mobile') {
        touaregBanner.src =
          'https://vw-image.s3.ap-southeast-1.amazonaws.com/image/Virtus-Mobile.webp';
      }
      this.device = 'mobile';
    } else if (w <= 820) {
      if (this.device != 'tablet') {
        touaregBanner.src =
          'https://vw-image.s3.ap-southeast-1.amazonaws.com/image/Virtus-Tablet.webp';
      }
      this.device = 'tablet';
    } else {
      if (this.device != 'pc') {
        touaregBanner.src =
          'https://vw-image.s3.ap-southeast-1.amazonaws.com/image/Virtus-PC.webp';
      }
      this.device = 'pc';
    }
  }

  ngOnInit(): void {
    this.changeWidth();
    window.addEventListener('resize', this.changeWidth);
    // scroll top -- khó hiểu
    window.scrollTo({ top: 0 });
    // update meta
    this.commonService.getCategoryById(4).subscribe((data: any) => {
      this.meta.updateTag({
        name: 'description',
        content: PAGE_META_DESCRIPTION.teramont,
      });
      this.meta.updateTag({ name: 'keywords', content: data.SeoKeyword });
    });
    // send view
    this.commonService.getIp().subscribe((data: any) => {
      let ip = data.ip;
      this.commonService
        .putAnalyticsURL({ URL: window.location.href, Ip: ip })
        .subscribe((data: any) => {});
    });
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
    }, 1000);
  }

  listImage: any[] = [
    {
      ImageUrl: '../../../../../assets/images/teramont-x/banner-general-1.jpg',
    },
    {
      ImageUrl: '../../../../../assets/images/teramont-x/banner-general-2.jpg',
    },
    {
      ImageUrl: '../../../../../assets/images/teramont-x/banner-general-3.jpg',
    },
  ];

  brochure = {
    component: 'app-category-brochure',
    name: 'Tải Brochure',
    // Cần change link tải brochure
    link: '../../../../../assets/images/teramont-x/TERAMONT_X.pdf',
  };

  preBooking = {
    component: 'app-category-prebooking',
    title: "Volkswagen Teramont X",
    titleBreak:"Dòng xe SUV thể thao đa dụng",
    image: '../../../../../assets/images/teramont-x/prebooking.jpg',
    mt: '',
    link: {
      value: '/teramont_x/deposit',
      name: 'Đặt ngay',
    },
  };

  listProductBanner = [
    {
      id: 'design',
      title: 'Ngoại thất',
      subtitle: 'Thiết kế hiện đại và độc đáo.',
      banner: '../../../../../assets/images/teramont-x/TeramontXExterior.jpg',
      //  Cần thay đổi nội dung
      listInfo: [
        {
          image:
            '../../../../../assets/images/teramont-x/TeramontXExterior1.jpg',
          content: [
            'Kích thước tổng thể: 4915 x 1990 x 1720 mm',
            'Khoảng cách hai cầu xe: 2980 mm',
            'Dung tích khoang hành lý: 540 - 1719 L',
            'Khoảng sáng gầm 205 mm',
          ],
          header:
            'Dòng SUV cỡ lớn cung cấp không gian rộng rãi và khả năng vận hành linh hoạt.',
          list: [
            'Kích thước tổng thể: 4915 x 1990 x 1720 mm',
            'Khoảng cách hai cầu xe: 2980 mm',
            'Dung tích khoang hành lý: 540 - 1719 L',
            'Khoảng sáng gầm 205 mm',
          ],
        },
        {
          image:
            '../../../../../assets/images/teramont-x/TeramontXExterior2.jpg',
          header:
            'Hệ thống đèn IQ. Light LED Matrix với cấu trúc 2 tầng - công nghệ mang lại vượt ngưỡng mong đợi với 4 chế độ chiếu sáng thích ứng, có thể tự động chuyển đổi, hỗ trợ điểm mù ánh sáng, giúp người lái tự tin lái xe vào ban đêm hoặc thời tiết xấu.',
          list: [
            'Đèn mở rộng góc chiếu gồm 6 đèn LED nhỏ của cụm đèn chiếu sáng phía trước. Đèn tự động kích hoạt khi đánh lái rẽ ở tốc độ < 40km/h.',
            'Hỗ trợ mở rộng tầm quan sát theo hướng rẽ. Tăng khả năng nhận diện người, vật hoặc phương tiện ở góc khúc cua gắt.',
            'Đèn này cũng đồng thời là đèn hỗ trợ thời tiết xấu khi được bật công tác kích hoạt.',
            'Khi tốc độ xe > 40km/h và người lái xoay vô lăng để rẽ hoặc chuyển hướng, chức năng mở rộng góc chiếu chủ động AFS sẽ kích hoạt và mở rộng góc chiếu sáng theo hướng đánh lái. Tầm quan sát của người lái sẽ lớn hơn khi rẽ.',
            'Xe sẽ tự điều chỉnh góc chiếu của hệ thống đèn theo điều kiện tải trọng trên xe, số người ngồi trên xe và điều kiện vận hành (ví dụ khi tăng tốc, giảm tốc, lên xuống dốc).',
            'Cải thiện tầm nhìn và không làm chói mắt người lái phương tiện ngược chiều, nâng cao tính an toàn.',
            'Hệ thống đèn phát hiện xe ngược chiều hoặc xe phía trước sẽ tự động tắt một phần đèn chiếu xa ở phía tương ứng hoặc tắt chế độ chiếu xa/chuyển sang chiếu gần để giảm chói mắt cho người lái xe ngược chiều hoặc xe đi phía trước.',
            'Hệ thống cũng có thể tắt đèn chiếu xa khi đi qua các khu vực được chiếu sáng tốt như các khu vực đô thị.',
          ],
        },
        {
          image:
            '../../../../../assets/images/teramont-x/TeramontXExterior3.jpg',
          header:
            'Cửa sổ trời toàn cảnh Panoramic Sunroof cho mỗi chuyến hành trình thêm trọn vẹn hứng khởi.',
          list: [
            'Sử dụng kính cách nhiệt, cách âm APVB, với độ dày lên tới 4.96mm. Điều khiển kiểu cảm ứng tiện lợi.',
          ],
        },
        {
          image:
            '../../../../../assets/images/teramont-x/TeramontXExterior4.jpg',
          header: 'Cụm đèn sau ấn tượng.',
          list: [
            'Thiết kế cụm đèn sau hình khối 3D sắc sảo, mang tính nhận diện cao và hiệu ứng đèn sinh động với logo phát sáng độc đáo lần đầu tiên xuất hiện. Hiệu ứng 3D rõ nét được kéo dài qua đến bên hông xe.',
          ],
        },
        {
          image: '../../../../../assets/images/teramont-x/banner-general-3.jpg',
          header: 'Khoang hành lý.',
          list: [
            `Khoang hành lý tiêu chuẩn có kích thước lên đến 540 lít mang lại khả năng chứa hành lý hoàn hảo trong các chuyến đi dài ngày. Ngoài ra, khả năng gập phẳng hàng ghế thứ 2 giúp mở rộng không gian lên đến 1719 lít và gia tăng tính linh hoạt khi cần chuyên chở các hàng hóa cồng kềnh.`,
          ],
        },
        {
          image:
            '../../../../../assets/images/teramont-x/TeramontXExterior5.jpg',
          header:
            'Điều khiển cửa cốp tiện lợi và linh hoạt bằng 4 cách và 3 chức năng.',
          list: [
            `Đóng mở cốp thông minh (rảnh tay), bằng công tắc điện trong xe, bằng công tắc trên cửa cốp xe và bằng chìa khóa.`,
            'Chức năng chống kẹt, cài đặt chiều cao và bảo vệ motor mở đóng cửa cốp sau.',
          ],
        },
        {
          image: '../../../../../assets/images/teramont-x/Gallery2.jpg',
          header: 'Mâm đúc hợp kim của Volkswagen Teramont X.',
          list: [`Luxury: 255/50 R20`, `Platinum: 265/45 R21`],
        },
      ],
    },
    {
      id: 'interior',
      title: 'Nội thất và Tiện nghi',
      subtitle:
        'Trang bị nhiều tiện nghi và tính năng cao cấp.',
      banner: '../../../../../assets/images/teramont-x/InteriorBanner.jpg',
      listInfo: [
        {
          image:
            '../../../../../assets/images/teramont-x/TeramontXInterior.jpg',
          header: 'Đồng hồ kỹ thuật số 10.3 inch đa sắc màu.',
          list: [
            'Lựa chọn 3 giao diện khác nhau, 30 màu nền. Hiển thị đầy đủ thông số lái xe, đèn cảnh báo, đồng hồ tốc độ, tua máy.',
          ],
        },
        {
          image:
            '../../../../../assets/images/teramont-x/TeramontXInterior_1.jpg',
          header: `Đèn viền trang trí nội thất Ambient Light.`,
          list: [
            'Lựa chọn 30 màu sắc mang lại trải nghiệm thư thái và góp phần tăng thêm sự sang trọng cho không gian nội thất.',
          ],
        },

        {
          image:
            '../../../../../assets/images/teramont-x/TeramontXInterior_2.jpg',
          header: 'Công tắc chuyển số điện tử.',
          list: [
            `Khu vực điều khiển trung tâm thiết kế lớn với công tắc chuyển số điện tử nhỏ gọn và sang trọng, nút khởi động start/stop thiết kế thuận tiện trong tầm tay.`,
          ],
        },
        {
          image:
            '../../../../../assets/images/teramont-x/1.jpg',
          header: 'Vô lăng thể thao R-line.',
          list: [
            `Vô lăng thể thao R-line 3 chấu bọc da, viền trang trí màu đỏ, tích hợp các phím điều khiển đa chức năng thuận tiện.`,
          ],
        },
        {
          image:
            '../../../../../assets/images/teramont-x/TeramontXInterior_4.jpg',
          header:
            'Điểm nhấn trang trí kiểu tia lazer ấn tượng với tên xe “TERAMONT X”.',
          list: [`Trang trí kiểu tia lazer ấn tượng với tên xe “TERAMONT X”.`],
        },
        {
          image:
            '../../../../../assets/images/teramont-x/TeramontXInterior_5.jpg',
          header: 'Màn hình giải trí đa chức năng.',
          list: [
            `Màn hình đa chức năng 12 inch, kết hợp các chức năng giải trí và điều kiển cài đặt các hệ thống trên xe. Điều khiển bẳng cảm ứng hoặc cử chỉ Gesture Control với độ nhạy cao và mượt mà. Kết nối App-Connect không dây, Bluetooth, USB.`,
          ],
        },
        {
          image:
            '../../../../../assets/images/teramont-x/TeramontXInterior_6.jpg',
          header:
            'Hệ thống âm thanh cao cấp Harman Kardon (Phiên bản Platinum).',
          list: [
            `Hệ thống âm thanh cao cấp Harman Kardon 12 loa mang lại trải nghiệm thưởng thức âm nhạc vượt trội. Hệ thống được trang bị 11 loa và 1 subwoofer, hệ thống âm thanh vòm Dolby 7.1, với công suất 700 watt.`,
          ],
        },
        {
          image:
            '../../../../../assets/images/teramont-x/TeramontXInterior_7.jpg',
          header: 'Hệ thống điều hòa.',
          list: [
            `Hệ thống điều hòa nhiệt độ tự động 3 vùng Climatronic với chức năng lọc bụi mịn PM 2.5 đảm bảo chất lượng không khí trong xe luôn trong tình trạng tốt nhất.`,
          ],
        },
        {
          image:
            '../../../../../assets/images/teramont-x/TeramontXInterior_8.jpg',
          header: 'Hàng ghế trước tiện nghi.',
          list: [
            `Ghế trước chỉnh điện 8 hướng.`,
            'Đệm hơi tựa lưng chỉnh điện 4 hướng.',
            'Nhớ 3 vị trí ghế lái.',
            'Làm mát và sưởi ấm ghế trước.',
            'Gối tựa đầu chỉnh 6 vị trí.',
          ],
        },
        {
          image: '../../../../../assets/images/teramont-x/banner-general-2.jpg',
          header: 'Hàng ghế sau.',
          list: [
            `Tiện nghi với điều hòa có cửa gió trung tâm, cửa gió dưới sàn xe, chức năng sưởi ấm và cổng sạc riêng.`,
            'Chiều dài để chân lớn kết hợp chiều rộng nội thất mang lại không gian ngồi thoải mái cho cả 3 hành khách.',
          ],
        },
      ],
    },
    {
      id: 'operation',
      title: 'Khả năng vận hành',
      subtitle: 'Khả năng vận hành của Volkswagen Teramont X',
      banner:
        '../../../../../assets/images/teramont-x/TeramontXOperate_thumnail.jpg',
      listInfo: [
        {
          image:
            '../../../../../assets/images/teramont-x/TeramontXOperate_thumnail.jpg',
          header: 'Mạnh mẽ và êm ái',
          list: [
            'Động cơ 2.0 TSI Turbo tăng áp và phun nhiên liệu trực tiếp. Công suất tối đa 220 Hp/ 4900-6700 rpm, Mô men xoắn tối đa 350 Nm/ 1600-4300 rpm, tốc độ tối đa 200 Km/h.',
          ],
        },
        {
          image:
            '../../../../../assets/images/teramont-x/TeramontXOperate_thumnail.jpg',
          header: 'Hộp số tự động ly hợp kép DSG 7 cấp thế hệ mới.',
          list: [
            `Hộp số tự động ly hợp kép DSG 7 cấp thế hệ mới. Hộp số có khả năng sang số cực nhanh, cơ cấu cần số thông minh và hợp lý, chuyển số mượt mà.`,
          ],
        },
        {
          image:
            '../../../../../assets/images/teramont-x/TeramontXOperate_thumnail.jpg',
          header:
            'Hệ thống dẫn động 4MOTION thế hệ mới mang đến khả năng phân phối lực truyền đến cầu trước, sau thông minh và chính xác với tốc độ mili giây.',
          list: [
            `Khi tăng tốc, khởi hành hoặc leo dốc thì lực kéo sẽ phân bổ phần lớn lên cầu sau.
            `,
            'Khi các bánh xe cầu trước bị trượt, lực kéo sẽ chuyển sang cầu sau và ngược lại.',
            'Khi chạy ổn định trên mặt đường tốt lực kéo sẽ phân bố phần lớn ở cầu trước, nhờ đó tối ưu khả năng tiêu thụ nhiên liệu.',
            'Khi bánh trước 1 bên bị trượt, khoá vi sai sẽ phanh bánh bị trượt và chuyển lực kéo qua bánh còn lại và qua cầu sau.',
          ],
        },
        {
          image:
            '../../../../../assets/images/teramont-x/TeramontXOperate_thumnail.jpg',
          header: 'Khung gầm MQB evo thế hệ mới.',
          list: [
            `Cải thiện 1.3 lần vận tốc cài đặt của hệ thống ACC.`,
            'Cải thiện 2.2 lần tốc độ dừng xe của hệ thống AEB.',
            'Cải thiện 5 lần tốc độ Stop & Go.',
            'Bổ sung 2MB tốc độ băng thông.',
            'Tăng 2.3 lần vùng phát hiện phương tiện trong khu vực điểm mù của hệ thống Hỗ trợ chuyển làn đường.',
            'Tốc độ giao tiếp tăng gấp 4 lần.',
          ],
        },
      ],
    },
    {
      id: 'sss',
      title: 'Hệ thống an toàn và hỗ trợ',
      subtitle: 'Công nghệ hàng đầu đến từ Đức',
      banner: '../../../../../assets/images/teramont-x/Gallery10.jpg', 
      listInfo: [
        {
          image: '../../../../../assets/images/teramont-x/teramont-x_sss_1.jpg',
          header: `Hệ thống an toàn chủ động.`,
          list: [
            `Hệ thống phanh đĩa trước, sau trang bị đĩa tản nhiệt.`,
            `Chức năng ABS/EBD/BA.`,
            'Cân bằng điện tử ESC.',
            'Chống trượt khi tăng tốc ASR.',
            'Khóa vi sai điện tử EDS.',
            'Cảnh báo áp suất lốp TPMS.',
            'Camera 360.',
            'Kiểm soát cự li đỗ xe PDC/ Maneuver Brake.',
          ],
        },
        {
          image: '../../../../../assets/images/teramont-x/teramont-x_sss_2.jpg',
          header: `Hệ thống an toàn bị động.`,
          list: [
           '9 túi khí.',
           'Dây đai an toàn 3 điểm tất cả các ghế.',
           'Bộ căng đai khẩn cấp và hạn chế lực ở hàng ghế trước.',
           'Kính cách nhiệt nhiều lớp/an toàn.',
           'Khung gầm xe an toàn. Thép có độ bền và khả năng chịu lực cao được áp dụng cho thân xe với tỷ lệ lớn lên đến 82%, trong đó thép tạo hình nóng chiếm 24%. Điều này không chỉ làm tăng độ cứng vững và độ bền của thân xe, mà còn nâng cao cảm giác lái và tiết kiệm nhiên liệu. Công nghệ hàn Laser tiên tiến và công nghệ sơn tĩnh điện đảm bảo khả năng chống ăn mòn lên đến 12 năm.',
          ],
        },
        {
          image: '../../../../../assets/images/teramont-x/teramont-x_sss_1.jpg',
          header: `Kiểm soát hành trình thích ứng ACC.`,
          list: [
            'Tự động duy trì tốc độ được thiết lập. Tự động điều chỉnh tăng và giảm tốc để duy trì khoảng cách khi có xe phía trước xuất hiện.',
            'Việc giảm tốc phương tiện có thể được thực hiện qua việc can thiệp điều khiển động cơ, nếu vẫn chưa đạt hiệu quả, hệ thống sẽ tự động phanh cho đến khi xe dừng hẳn.',
          ],
        },

        {
          image: '../../../../../assets/images/teramont-x/teramont-x_sss_3.jpg',
          header: `Cảnh báo tiền va chạm FCW và hỗ trợ phanh khẩn cấp AEB. `,
          list: [
            `Cảnh báo bằng âm thanh và tín hiệu trên màn hình cho người điều khiển về nguy cơ va chạm.
            `,
            'Tự động áp dụng lực phanh nhẹ (rà phanh) để để nhắc nhở về nguy cơ va chạm tăng lên.',
            'Tự động phanh khẩn cấp để tránh va chạm thông qua nhiều giai đoạn với lực phanh tăng dần.',
            'Hệ thống có thể hoạt động (nếu được kích hoạt) ngay cả khi ACC không kích hoạt.',
          ],
        },
        {
          image: '../../../../../assets/images/teramont-x/teramont-x_sss_4.jpg',
          header: `Hỗ trợ chuyển làn đường`,
          list: [
            `Hệ thống sẽ cảnh báo sự nguy hiểm khi chuyển làn đường, biểu tượng cảnh báo sẽ xuất hiện trên gương chiếu hậu nếu có phương tiện xuất hiện trong khu vực điểm mù của xe.`,
          ],
        },
        {
          image:
            '../../../../../assets/images/teramont-x/TeramontXExterior1.jpg',
          header: `Hệ thống cảnh báo phương tiện cắt ngang khi lùi`,
          list: [
            `Hệ thống hỗ trợ phát hiện các phương tiện cắt ngang phía sau khi lùi xe ra khỏi chỗ đỗ vuông góc và cảnh báo bằng âm thanh hoặc hình ảnh. Trong trường hợp va chạm với xe phía sau có thể xảy ra, nếu người lái không có phản ứng thì hệ thống phanh hỗ trợ đỗ xe Maneuver Braking Function sẽ kích hoạt với lực phanh tối đa để dừng xe.`,
          ],
        },
      ],
    },
  ];

  listProductVersion: IProductVersion[] = [
    {
      name: 'Teramont X Luxury',
      price: '1,998,000,000 VNĐ',
      image: '../../../../../assets/images/teramont-x/RED_Luxury.png',
      linkOrder: '/teramont_x/deposit',
      linkTrial: '/teramont-x/trial',
      listInfo: [
        {
          name: 'Công suất cực đại (hp/rpm)',
          value: '220 / 4.900-6.700',
        },
        {
          name: 'Mômen xoắn cực đại (N.m/rpm)',
          value: '350 / 1.600-4.300',
        },
        {
          name: 'Động cơ',
          value: '',
        },
      ],
    },
    {
      name: 'Teramont X Platinum',
      price: '2,168,000,000 VNĐ',
      image: '../../../../../assets/images/teramont-x/platinum.png',
      linkOrder: '/teramont_x/deposit',
      linkTrial: '/teramont-x/trial',
      listInfo: [
        {
          name: 'Công suất cực đại (hp/rpm)',
          value: '220 / 4.900-6.700',
        },
        {
          name: 'Mômen xoắn cực đại (N.m/rpm)',
          value: '350 / 1.600-4.300',
        },
        {
          name: 'Động cơ',
          value: '',
        },
      ],
    },
  ];

  category = {
    component: 'app-category-reference',
    title: 'Chi phí lăn bánh',
    mt: '0',
    description: ``,
    link: {
      value: '/product/cost',
      name: 'Tham khảo thêm',
    },
  };

  gallery = {
    mt: 'mt-5',
    component: "app-category-gallery",
    title: "Thư viện ảnh",
    content: [
        '../../../../../assets/images/teramont-x/Gallery.jpg',
        '../../../../../assets/images/teramont-x/Gallery2.jpg',
        '../../../../../assets/images/teramont-x/Gallery3.jpg',
        '../../../../../assets/images/teramont-x/Gallery4.jpg',
    ]
}
}
