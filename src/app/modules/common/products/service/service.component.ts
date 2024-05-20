import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/apis/common.service';
import { MessageService } from 'primeng/api';
import { DatetimeToYMDHM, DatetimeToHMDMY, YMDHMToHMDMY, DatetimeToYMDHM00, DatetimeToYMDHMnotS } from 'src/app/lib/myLib';
import { listProduct, additionalInformationProduct, additionalInformationCategory } from 'src/app/mocks/listProduct';
import { Meta, Title } from '@angular/platform-browser';
import { PAGE_META_DESCRIPTION, PAGE_TITLE } from 'src/app/constants/app-constants';
declare let google: any;
@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {

  constructor(
    private commonService: CommonService,
    private messageService: MessageService,
    private titleService:Title,
    private meta: Meta
  ) { this.titleService.setTitle(`${PAGE_TITLE.bookingService} | Volkswagen Việt Nam`);  }

  ngOnInit(): void {
    // send view
    this.meta.updateTag({ name: 'description', content: PAGE_META_DESCRIPTION.bookingService });
    this.commonService.getIp().subscribe((data: any) => {
      let ip = data.ip
      this.commonService.putAnalyticsURL({ URL: window.location.href, Ip: ip }).subscribe((data: any) => {
      })
    })
    // get product
    this.commonService.getProduct().subscribe((products: any) => {
      this.products = products.Items
    })
    // get dealer
    this.commonService.getAllDealer().subscribe((dealers: any) => {
      this.dealers = dealers
      dealers.forEach((dealer: any) => {
        if (!this.citys.find((city: any) => city.city == dealer.city)) this.citys.push(dealer)
        this.overlays.push(new google.maps.Marker({ position: { lat: dealer.latitude, lng: dealer.longitude }, title: dealer.name }))
      })
      this.options = {
        center: { lat: dealers[0].latitude, lng: dealers[0].longitude },
        zoom: 18
      };
    })
    // get service
    this.commonService.getService().subscribe((services: any) => {
      this.services = services.filter((item: any) => item.IsActive)
    })


    this.infoWindow = new google.maps.InfoWindow();
  }
  products: any[] = []
  dealers: any[] = []
  citys: any[] = []
  contactBy: any[] = [{ name: 'Email', value: 'email' }, { name: 'Điện thoại', value: 'điện thoại' }]
  listDatetime: any = []

  objProduct: any = {
    indexDealer: -1,
    city: '',
    datetimeFrom: '',
    datetimeTo: '',
    name: '',
    phone: '',
    email: '',
    contactBy: '',
    kilometer: 0,
    plateNumber: '',
    note: '',
    service: '',
    time: ''
  }
  objSummary: any = {

    dealer: false,
    form: false,
    time: false,
    isValidDealer: false,
    isValidForm: false,
    isValidTime: false

  }
  services: any[] = []
  DatetimeToYMDHM00 = DatetimeToYMDHM00
  DatetimeToYMDHMnotS = DatetimeToYMDHMnotS
  YMDHMToHMDMY = YMDHMToHMDMY
  options: any = {
    // center: { lat: 10.808895, lng: 106.63471 },
    // zoom: 12
  };
  overlays: any = [
  ];
  infoWindow: any;
  onTabClose(event: any) {
    let index = event.index
    if (index == 0) {
      this.objSummary.dealer = true
      this.objSummary.isValidDealer = this.objProduct.indexDealer != -1
    } else if (index == 1) {
      this.objSummary.datetime = true
      this.objSummary.isValidDatetime = !!this.objProduct.datetime
    }
    console.log(this.objSummary)

  }
  clickDatetime(value: any, type: string) {
    // if (type == 'from') {
    //   console.log(value)
    //   // this.objProduct.datetime = DatetimeToYMDHM00(value)
    //   this.listDatetime.push(DatetimeToYMDHM00(value))
    //   this.objSummary.datetime = true
    //   this.objSummary.isValidDatetime = true

    // }else 

  }
  addTime() {
    console.log(this.objProduct.datetimeFrom, this.objProduct.datetimeTo)
    if (this.objProduct.datetimeFrom && this.objProduct.datetimeTo) {
      let t1 = this.objProduct.datetimeFrom.getTime()
      let t2 = this.objProduct.datetimeTo.getTime()
      if (t1 >= t2) {
        this.showWarn('Ngày giờ không hợp lệ')
        return
      }
      this.objSummary.datetime = true
      this.objSummary.isValidDatetime = true
      this.listDatetime.push({ 'from': this.objProduct.datetimeFrom, to: this.objProduct.datetimeTo })
      this.objProduct.datetimeFrom = null
      this.objProduct.datetimeTo = null
    } else {
      this.showWarn('Vui lòng chọn ngày giờ')
    }
  }
  removeTime(e: any) {
    let index = parseInt(e.target.dataset.index)
    this.listDatetime.splice(index, 1)
    if (this.listDatetime.length == 0) {
      this.objSummary.datetime = false
      this.objSummary.isValidDatetime = false
    }
  }
  onTabOpen(event: any) {
    let index = event.index
  }
  handleMapClick(event: any) {
    //event: MouseEvent of Google Maps api
  }

  handleOverlayClick(event: any) {
    let isMarker = event.overlay.getTitle != undefined;

    if (isMarker && this.objProduct.indexDealer != -1) {
      let title = event.overlay.getTitle();
      this.infoWindow.setContent(this.dealers[this.objProduct.indexDealer].name);
      this.infoWindow.open(event.map, event.overlay);
      event.map.setCenter(event.overlay.getPosition());
    }
  }
  clickRadioButtonDealer(e: any, map: any) {
    console.log(this.objProduct.indexDealer)
    map.setCenter({ lat: this.dealers[this.objProduct.indexDealer].latitude, lng: this.dealers[this.objProduct.indexDealer].longitude })
    this.objSummary.dealer = true
    this.objSummary.isValidDealer = true
  }

  showWarn(mess: string) {
    this.messageService.add({ severity: 'warn', summary: 'Thông báo', detail: mess });
  }
  showSuccess(mess: string) {
    this.messageService.add({ severity: 'success', summary: 'Thông báo', detail: mess });
  }
  submit() {
    let t = this.listDatetime.reduce((a: any, b: any) => {
      return `${a} ${DatetimeToYMDHM00(b.from)} ,${DatetimeToYMDHM00(b.to)};`
    }, '')

    this.objProduct.name = this.objProduct.name.trim()
    this.objProduct.note = this.objProduct.note.trim()
    // this.objProduct.kilometer = this.objProduct.kilometer.trim()
    this.objProduct.plateNumber = this.objProduct.plateNumber.trim()
    this.objProduct.email = this.objProduct.email.trim()

    let { indexDealer, city, datetime, name, phone, email, contactBy, kilometer, plateNumber, note, service } = this.objProduct
    console.log('this.objProduct', this.objProduct)
    if (name == '' || phone == '' || email == '' || !contactBy || service == '') {
      this.showWarn('Vui lòng nhập đầy đủ thông tin')
      return
    }
    if (!/^.*@.*\..*$/.test(email)) {
      this.showWarn('Vui lòng nhập đúng thông tin')
      return
    }
    let data = {
      "Id": 0,
      "CustomerId": 0,
      "CustomerName": name,
      "CustomerAddress": "",
      "CustomerEmail": email,
      "CustomerPhone": phone,
      "CustomerNote": note,
      "Status": 0,
      "DealerId": this.dealers[this.objProduct.indexDealer].Id,
      "CustomerType": '',
      "Payments": "",
      "CustomerIdentityNumber": "",
      "Type": "dichvu",
      "Deposit": 0,
      "ContactBy": contactBy,
      "OrderDetails": [
        {
          "ProductId": 0,
          "Price": 0,
          "Quantity": 0,
          "VersionId": "",
          "InteriorColor": "",
          "ExteriorColor": "",
          "ServiceId": service,
          "PlateNumber": plateNumber,
          "TimeService": t,
          "Kilometer": kilometer
        }
      ]
    }
    console.log('data', data)
    this.commonService.postOrder(data).subscribe((res: any) => {
      this.showSuccess('Gửi yêu sử dụng dịch vụ thành công')
    })

  }

}
