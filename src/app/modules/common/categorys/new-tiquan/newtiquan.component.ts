import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { PAGE_META_DESCRIPTION, PAGE_TITLE } from 'src/app/constants/app-constants';
import { CommonService } from 'src/app/services/apis/common.service';

@Component({
  selector: 'app-tiguan',
  templateUrl: './newtiquan.component.html',
  styleUrls: ['./newtiquan.component.scss'],
})
export class NewTiguanComponent implements OnInit {
  constructor(
    private commonService: CommonService,
    private meta: Meta,
    private _renderer2: Renderer2,
    private titleService: Title,
    @Inject(DOCUMENT) private _document: Document
  ) {
    this.titleService.setTitle(`${PAGE_TITLE.newTiguan} | Volkswagen Việt Nam`);
  }

  ngOnInit(): void {
    this.changeWidth();
    window.addEventListener('resize', this.changeWidth);
    // scroll top -- khó hiểu
    window.scrollTo({ top: 0 });
    // update meta
    this.commonService.getCategoryById(4).subscribe((data: any) => {
      //console.log(data);
      this.meta.updateTag({
        name: 'description',
        content: PAGE_META_DESCRIPTION.newTiguan,
      });
      this.meta.updateTag({ name: 'keywords', content: data.SeoKeyword });
    });
    // send view
    this.commonService.getIp().subscribe((data: any) => {
      let ip = data.ip;
      //console.log({ URL: window.location.href, Ip: ip });
      this.commonService
        .putAnalyticsURL({ URL: window.location.href, Ip: ip })
        .subscribe((data: any) => {
          //console.log('putAnalyticsURL');
          //console.log({ URL: window.location.href, Ip: ip });
        });
    });
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
    }, 1000);
  }

  content: any = [
    {
      component: 'category-tab-horizontal-gallery',
      title: 'Ngoại thất',
      mt: '',
      content: [
        {
          header: 'Ngoại thất',
          image: ['../../../../../assets/images/cate/tiguan/newtiguan2.jpg'],
          title: '',
          description: 'Ngoại thất bừng khí chất thời thượng',
          listItem: [],
        },
        {
          header: 'Dấu ấn đổi mới khơi nguồn từ logo thiết kế mới.',
          image: [
            '../../../../../assets/images/cate/tiguan/newtiguan5.jpg',
            '../../../../../assets/images/cate/tiguan/newtiguan6.jpg',
          ],
          description: '',
          listItem: [
            {
              list: [
                `Những đường nét thiết kế đổi mới của Tiguan cho thấy định nghĩa chính xác của việc tái tạo lại bản thân một cách thành công rực rỡ.`,
                `Dấu ấn đổi mới khơi nguồn từ logo thiết kế mới.`,
                'Diện mạo SUV linh hoạt và mạnh mẽ.',
                'Đèn IQ.LIGHT với 2 thấu kính Projector và đèn ban ngày viền phía dưới.',
                'Mở rộng góc chiếu khi vào cua với góc mở lớn',
                'Điều chỉnh khoảng chiếu sáng.',
                'Đèn hỗ trợ thời tiết xấu.',
              ],
            },
          ],
        },
        {
          header: 'Biểu tượng chữ C',
          image: ['../../../../../assets/images/cate/tiguan/newtiguan7.jpg'],
          title: '',
          description: 'Biểu tượng chữ C viền đen mạnh mẽ tại cản trước',
          listItem: [],
        },
        {
          header: 'Mâm xe',
          image: ['../../../../../assets/images/cate/tiguan/newtiguan8.jpg'],
          title: '',
          description:
            'Mâm xe 18 inch đi cùng với Lốp xe tự vá Pirelli phù hợp với đa dạng địa hình.',
          listItem: [],
        },
        {
          header: 'Đèn sau LED',
          image: ['../../../../../assets/images/cate/tiguan/newtiguan9.jpg'],
          title: '',
          description:
            'Đèn sau LED với thiết kế mới sinh động. Cái tên TIGUAN ở vị trí trung tâm nổi bật.',
          listItem: [],
        },
      ],
    },
  ];

  content2: any = [
    {
      component: 'category-tab-horizontal-gallery',
      title: 'Nội thất',
      mt: '',
      content: [
        {
          header: 'Không gian nội thất',
          image: ['../../../../../assets/images/cate/tiguan/newtiguan3.jpg'],
          title: '',
          description: '',
          listItem: [
            {
              list: [
                'Không gian nội thất với các đường nét thiết kế gọn gàng, sắc sảo. Màu sắc trang nhã, kết hợp Ambient Light 30 màu mang lại không gian tiện nghi, sang trọng và thoải mái cho người sử dụng.',
                'Khả năng vận hành được định hình bằng động cơ tiên tiến 2.0TSI với turbo tăng áp kết hợp với hộp số tự động ly hợp kép DSG 7 cấp và hệ thống dẫn động 4 bánh toàn thời gian biến thiên 4MOTION',
              ],
            },
          ],
        },

        {
          header: 'Nâng tầm vận hành',
          image: ['../../../../../assets/images/cate/tiguan/newtiguan4.jpg'],
          title: '',
          description:
            'Khả năng vận hành được định hình bằng động cơ tiên tiến 2.0TSI với turbo tăng áp kết hợp với hộp số tự động ly hợp kép DSG 7 cấp và hệ thống dẫn động 4 bánh toàn thời gian biến thiên 4MOTION',
          listItem: [],
        },

        {
          header: 'Vô lăng',
          image: ['../../../../../assets/images/cate/tiguan/newtiguan10.jpg'],
          title: '',
          description:
            'Vô lăng thiết kế mới của Tiguan Bảng điều khiển điều hoà cảm ứng. Cần số thiết kế mới hiển thị bằng đèn LED sang trọng và tinh tế.',
          listItem: [],
        },

        {
          header: 'Ghế da Vienna',
          image: ['../../../../../assets/images/cate/tiguan/newtiguan11.jpg'],
          title: '',
          description: 'Ghế da Vienna có lỗ thông hơi.',
          listItem: [],
        },

        {
          header: 'Khoang hành lý',
          image: ['../../../../../assets/images/cate/tiguan/newtiguan12.jpg'],
          title: '',
          description:
            'Khoang hành lý có không gian linh hoạt từ 230 lít và có thể mở rộng lên đến 1775 lít cung cấp khả năng đủ lớn cho mọi chuyến hành trình.',
          listItem: [],
        },
      ],
    },
  ];

  content3: any = [
    {
      component: 'category-tab-horizontal-gallery',
      title: 'Công nghệ',
      mt: '',
      content: [
        {
          header: 'Sự đa năng',
          image: ['../../../../../assets/images/cate/tiguan/newtiguan15.jpg'],
          title: '',
          description:
            'Tiguan là chiếc SUV 7 chỗ đa năng nhất của thương hiệu Volkswagen – mang lại sự nâng tầm cho cuộc sống đa nhiệm. Như một “người anh em” kề vai sát cánh, Tiguan luôn song hành từ công việc đến cuộc sống, từ lúc bận rộn cho đến phút nghỉ ngơi thảnh thơi. Và khi vẻ thời thượng, tính linh hoạt và sức mạnh đi cùng nhau. Tiguan luôn sẵn sàng vượt qua bất cứ thử thách nào!',
          listItem: [],
        },
        {
          header: 'Công nghệ tiên tiến',
          image: [
            '../../../../../assets/images/cate/tiguan/newtiguan16.jpg',
            '../../../../../assets/images/cate/tiguan/newtiguan17.jpg',
            '../../../../../assets/images/cate/tiguan/newtiguan18.jpg',
          ],
          title: '',
          description: '',
          listItem: [
            {
              list: [
                'Hệ thống an toàn & hỗ trợ người lái',
                `Hệ thống kiểm soát cự ly đỗ xe PDC. Sử dụng hệ thống camera lùi, các cảm biến, hệ thống màn hình và các vạch dẫn hướng, các âm thanh cảnh báo và hệ thống phanh hạn chế va chạm để hỗ trợ người lái ra, vào chỗ đỗ dễ dàng.`,
                'Hệ thống cân bằng điện tử ESC sẽ kích hoạt phanh các bánh xe riêng rẽ và có thể giảm mô men xoắn trong trường hợp xảy ra hiện tượng xe vào cua xỉa đầu hoặc rê đuôi để đưa xe quay về đúng quỹ đạo.',
                'Hỗ trợ trả lái thông minh DSR. Hệ thống sẽ tác động vào motor trợ trực lái trong một số trường hợp khẩn cấp.',
                'Cảnh báo áp suất lốp TPMS. Hiển thị tình trạng áp suất bánh xe.',
                'Hệ thống cảnh báo mất tập trung. Phát hiện người lái mệt mỏi và cảnh báo bằng âm thanh, và hình ảnh.',
                'Khoá vi sai điện tử EDL. Giúp xe có thể duy trì độ bám đường bằng cách phanh các bánh xe bị quay trơn và truyền lực kéo qua bánh còn lại & đồng thời hỗ trợ vào cua ổn định.',
                'Hệ thống kiểm soát hành trình Cruise Control giúp duy trì tốc độ xe khi lưu thông, nhằm mang lại sự thoải mái khi người lái không cần sử dụng bàn đạp ga để duy trì tốc độ. Đặc biệt có thể hoạt động ở tốc độ thấp 20 km/h.',
                'Chức năng giới hạn tốc độ Speed limiter cho phép cài đặt giới hạn tốc độ của xe phù hợp với điều kiện giao thông.',
              ],
            },
          ],
        },

        {
          header: 'Hệ thống an toàn',
          image: ['../../../../../assets/images/cate/tiguan/newtiguan19.png'],
          title: '',
          description:
            'Thân xe Volkswagen với cấu trúc hấp thụ xung va chạm và khoang hành khách sử dụng thép có độ cứng và chịu lực cao. Kết hợp với khả năng gia công kim loại tiên tiến.',
          listItem: [
            {
              list: [
                'Hệ thống cảnh báo chống trộm.',
                'Chức năng Immobilizer nhằm ngăn chặn việc khởi động xe với 1 chìa khoá không chính thức.',
                'Chức năng cảnh báo trong xe sẽ kích hoạt khi có chuyển động trong xe đã lock cửa.',
                'Chức năng cảnh báo kéo xe sẽ kích hoạt khi bị nâng lên.',
              ],
            },
          ],
        },
      ],
    },
  ];

  // design
  imageDesign: string = './assets/images/cate/tiguan/design0.jfif';
  onDesignTabOpen(e: any) {
    let index = e.index;
    this.imageDesign = `./assets/images/cate/tiguan/design${index}.jfif`;
  }
  // support
  imageSupport: string = './assets/images/cate/tiguan/support0.jfif';
  onSupportTabOpen(e: any) {
    let index = e.index;
    this.imageSupport = `./assets/images/cate/tiguan/support${index}.jfif`;
  }

  featuresv2: any = {
    component: 'app-category-special-features',
    title: 'Ngoại thất bừng khí chất thời thượng',
    mt: '',
    content: [
      {
        image: './assets/images/cate/passat/feature0.webp',
        title:
          'Những đường nét thiết kế đổi mới của Tiguan cho thấy định nghĩa chính xác của việc tái tạo lại bản thân một cách thành công rực rỡ.',
        description:
          'Những đường nét thiết kế đổi mới của Tiguan cho thấy định nghĩa chính xác của việc tái tạo lại bản thân một cách thành công rực rỡ. .',
      },
      {
        image: './assets/images/cate/passat/feature1.webp',
        title: 'Ghế Ergo Comfort',
        description:
          'Ghế Ergo Comfort với chức năng chỉnh điện 14 hướng, bơm hơi tựa lưng, chức năng nhớ ghế và Massage ghế lái.',
      },
      {
        image: './assets/images/cate/passat/feature2.webp',
        title: 'Thiết kế tinh tế',
        description:
          'Khoác trên mình dáng dấp doanh nhân. Passat mang lại cho chủ sở hữu hình ảnh lịch lãm và thành đạt.',
      },
    ],
  };
  goToElement(q: string) {
    let elemnet: any = document.getElementById(q);
    elemnet.scrollIntoView({ behavior: 'smooth' });
  }

  device: string = 'pc';
  changeWidth() {
    var w = window.innerWidth;
    var tiguanBanner = <HTMLImageElement>(
      document.getElementById('tiguanBanner')
    );
    if (w <= 576) {
      if (this.device != 'mobile') {
        tiguanBanner.src =
          './assets/images/cate/tiguan/newbanner.jpg';
      }
      this.device = 'mobile';
    } else if (w <= 820) {
      if (this.device != 'tablet') {
        tiguanBanner.src =
          './assets/images/cate/tiguan/newbanner.jpg';
      }
      this.device = 'tablet';
    } else {
      if (this.device != 'pc') {
        tiguanBanner.src =
          './assets/images/cate/tiguan/newbanner.jpg';
      }
      this.device = 'pc';
    }
  }
}
