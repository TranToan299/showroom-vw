import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { CommonService } from 'src/app/services/apis/common.service';
import { DatetimeToYMD } from './../../../../lib/myLib';

@Component({
  selector: 'app-prebooking-demo',
  templateUrl: './prebooking-demo.component.html',
  styleUrls: ['./prebooking-demo.component.scss'],
})
export class PrebookingDemoComponent implements OnInit {
  constructor(
    private messageService: MessageService,
    private commonService: CommonService
  ) {}
  device: string = '';
  changeWidth() {
    var w = window.innerWidth;
    var bannerPrebooking = <HTMLImageElement>(
      document.getElementById('bannerPrebooking')
    );
    if (w <= 576) {
      if (this.device != 'mobile') {
        bannerPrebooking.src = './assets/images/bannerPrebookingMobile.png';
      }
      this.device = 'mobile';
    } else if (w <= 780) {
      if (this.device != 'tablet') {
        bannerPrebooking.src = './assets/images/bannerPrebookingTablet.png';
      }
      this.device = 'tablet';
    } else {
      if (this.device != 'pc') {
        bannerPrebooking.src = './assets/images/bannerPrebooking.jpg';
      }
      this.device = 'pc';
    }
  }
  ngOnInit(): void {
    this.changeWidth();
    window.addEventListener('resize', this.changeWidth);
    // scroll top -- khó hiểu
    window.scrollTo({ top: 0 });
    // send view
    this.commonService.getIp().subscribe((data: any) => {
      let ip = data.ip;
      this.commonService
        .putAnalyticsURL({ URL: window.location.href, Ip: ip })
        .subscribe((data: any) => {});
    });
  }
  objCustomer: any = {
    name: '',
    phone: '',
    email: '',
    time: '',
    type: '',
    checkRead: false,
    checkDepositTerms: false,
    checkOnlineTerms: false,
  };
  submit() {
    // console.log(this.objCustomer)
    let check = true;
    let { name, phone, email, time, type } = this.objCustomer;
    this.objCustomer.name = name.trim();
    this.objCustomer.phone = phone.trim();
    this.objCustomer.email = email.trim();
    // console.log(time)
    // console.log(DatetimeToYMD(time))
    if (
      name == '' ||
      phone == '' ||
      email == '' ||
      time == '' ||
      type == '' ||
      this.objCustomer.checkRead == false ||
      this.objCustomer.checkDepositTerms == false ||
      this.objCustomer.checkOnlineTerms == false
    )
      check = false;
    if (!/^.*@.*\..*$/.test(email)) check = false;
    if (check == false) {
      this.showWarn('Vui lòng nhập đúng thông tin');
      return;
    }
    let data = {
      Id: 0,
      CustomerId: 0,
      CustomerName: name,
      CustomerAddress: '',
      CustomerEmail: email,
      CustomerPhone: phone,
      CustomerNote: '',
      Status: 0,
      DealerId: 0,
      TimeReceive: DatetimeToYMD(time),
      CustomerType: type,
      Payments: '',
      CustomerIdentityNumber: '',
      Type: 'dathang',
      Deposit: 0,
      OrderDetails: [
        {
          ProductId: 40,
          Price: 0,
          Quantity: 1,
          InteriorColor: '',
          ExteriorColor: '',
        },
      ],
    };
    console.log(data);
    this.commonService.postOrder(data).subscribe((res: any) => {
      let toast: any = document.querySelector('.toast-thank');
      toast.classList.toggle('hidden');
    });
  }
  showWarn(mess: string) {
    this.messageService.add({
      severity: 'warn',
      summary: 'Thông báo',
      detail: mess,
    });
  }
}
