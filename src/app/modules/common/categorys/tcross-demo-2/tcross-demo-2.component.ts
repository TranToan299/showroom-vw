import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/apis/common.service';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-demo-tcross2',
  templateUrl: './tcross-demo-2.component.html',
  styleUrls: ['./tcross-demo-2.component.scss'],
})
export class TcrossDemo2Component implements OnInit {
  constructor(
    private commonService: CommonService,
    private titleService: Title
  ) {
    this.titleService.setTitle('T-Cross | Volkswagen Việt Nam');
  }

  ngOnInit(): void {
    // scroll top -- khó hiểu
    window.scrollTo({ top: 0 });
    // send view
    this.commonService.getIp().subscribe((data: any) => {
      let ip = data.ip;
      console.log({ URL: window.location.href, Ip: ip });
      this.commonService
        .putAnalyticsURL({ URL: window.location.href, Ip: ip })
        .subscribe((data: any) => {
          console.log('putAnalyticsURL');
          console.log({ URL: window.location.href, Ip: ip });
        });
    });
  }
  // Tuyên ngôn cá tính
  imageCuteSay: string = './assets/images/cate/tcross/cuteSay0.jpg';
  onImageCuteSayTabOpen(e: any) {
    let index = e.index;
    this.imageCuteSay = `./assets/images/cate/passat/interior${index}.jfif`;
  }
  // Nội thất
  imageInterior: string = './assets/images/cate/tcross/interior0.jpg';
  onTabOpenInterior(e: any) {
    let index = e.index;
    this.imageInterior = `./assets/images/cate/tcross/interior${index}.jpg`;
  }
  // Ngoại thất
  imageExterior: string = './assets/images/cate/tcross/exterior0.jpg';
  onTabOpenExterior(e: any) {
    let index = e.index;
    if (index == 0) {
      this.imageExterior = './assets/images/cate/tcross/exterior0.jpg';
    } else if (index == 1) {
      this.imageExterior = './assets/images/cate/tcross/exterior1.jpg';
    } else if (index == 2) {
      this.imageExterior = './assets/images/cate/tcross/exterior2.jpg';
    } else if (index == 3) {
      this.imageExterior = './assets/images/cate/tcross/exterior3.gif';
    } else if (index == 4) {
      this.imageExterior = './assets/images/cate/tcross/exterior4.gif';
    }
  }
  goToId(id: string) {
    console.log(id);
    let elemnet: any = document.querySelector(id);
    elemnet.scrollIntoView({ behavior: 'smooth' });
  }
  // compare version
  versions: any = [
    {
      name: 'Phiên bản T-Cross Elegance',
      price: '1,099,000,000 VND',
      image: './assets/images/cate/tcross/iconElegance.png',
      features: [
        '1.0 TSI (Turbo tăng áp và phun nhiên liệu trực tiếp)',
        'Hộp số tự động 6 cấp',
        'Đèn Halogen tiêu chuẩn',
        'Hệ thống 2 túi khí',
        'Đồng hồ trung tâm Analog với màn hình hiển thị đa thông tin',
        'Ghế bọc da màu đen ',
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
      ],
    },
    {
      name: 'Phiên bản T-Cross Luxury',
      price: '1,299,000,000 VND',
      image: './assets/images/cate/tcross/iconLuxury.png',
      features: [
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
      ],
    },
  ];
}
