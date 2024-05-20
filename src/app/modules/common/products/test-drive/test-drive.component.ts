import { Component, OnInit, Renderer2, Inject } from '@angular/core';
import { CommonService } from 'src/app/services/apis/common.service';
import { MessageService } from 'primeng/api';
import { DOCUMENT } from '@angular/common';
import { CookieService } from 'src/app/services/cookie.service';
import { listProduct, additionalInformationProduct, additionalInformationCategory } from 'src/app/mocks/listProduct';
import { PAGE_META_DESCRIPTION, PAGE_TITLE } from 'src/app/constants/app-constants';
import { Meta, Title } from '@angular/platform-browser';
declare let google: any;
@Component({
  selector: 'app-test-drive',
  templateUrl: './test-drive.component.html',
  styleUrls: ['./test-drive.component.scss']
})
export class TestDriveComponent implements OnInit {

  constructor(
    private commonService: CommonService,
    private messageService: MessageService,
    private _renderer2: Renderer2,
    private cookie: CookieService,
    private meta: Meta,
    private titleService:Title,
    @Inject(DOCUMENT) private _document: Document
  ) { this.titleService.setTitle(`${PAGE_TITLE.try} | Volkswagen Việt Nam`);  }

  ngOnInit(): void {
    // send view
    this.meta.updateTag({ name: 'description', content: PAGE_META_DESCRIPTION.try });
    this.commonService.getIp().subscribe((data: any) => {
      let ip = data.ip
      this.commonService.putAnalyticsURL({ URL: window.location.href, Ip: ip }).subscribe((data: any) => {
      })
    })
    // get product
    this.commonService.getProduct().subscribe((products: any) => {
      this.products = products.Items
      console.log(this.products)
    })
    // get dealer
    this.commonService.getAllDealer().subscribe((dealers: any) => {
      this.dealers = dealers
      console.log('dealers', dealers)
      dealers.forEach((dealer: any) => {
        if (!this.citys.find((city: any) => city.city == dealer.city)) this.citys.push(dealer)
        this.overlays.push(new google.maps.Marker({ position: { lat: dealer.latitude, lng: dealer.longitude }, title: dealer.name }))
      })
      this.options = {
        center: { lat: dealers[0].latitude, lng: dealers[0].longitude },
        zoom: 18
      };
    })

    this.infoWindow = new google.maps.InfoWindow();

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
    setTimeout(() => {
      let utm_source = this.cookie.getCookie('_aff_network')
      let aff_sid = this.cookie.getCookie('_aff_sid')
      console.log({ utm_source, aff_sid })
    }, 2000)
  }
  products: any[] = []
  dealers: any[] = []
  citys: any[] = []
  contactBy: any[] = [{ name: 'Email', value: 'email' }, { name: 'Điện thoại', value: 'điện thoại' }]
  objProduct: any = {
    product: {},
    indexDealer: -1,
    city: '',
    name: '',
    phone: '',
    email: '',
    contactBy: '',
    note: '',
    checkOnlineTerms:false,
  }
  objSummary: any = {
    car: false,
    dealer: false,
    form: false,
    isValidCar: false,
    isValidDealer: false,
    isValidForm: false
  }

  options: any = {
    // center: { lat: 10.808895, lng: 106.63471 },
    // zoom: 12
  };
  overlays: any = [
  ];
  infoWindow: any;
  chooseProduct(e: any) {
    let target = e.target.closest('.car')
    console.log(target)
    let index = parseInt(target.dataset.index)
    this.objProduct.product = this.products[index]

    this.objSummary.car = true
    this.objSummary.isValidCar = true
  }
  onTabClose(event: any) {
    let index = event.index
    if (index == 0) {
      this.objSummary.car = true
      this.objSummary.isValidCar = !!this.objProduct.product.Name
    } else if (index == 1) {
      this.objSummary.dealer = true
      this.objSummary.isValidDealer = this.objProduct.indexDealer != -1
    }
    console.log(this.objSummary)

  }

  onTabOpen(event: any) {
    let index = event.index
    if (index == 0) {
      // this.objSummary.car = false
    } else if (index == 1) {
      // this.objSummary.car = true
    }
    // console.log(this.objSummary)

  }
  clickRadioButtonDealer(e: any, map: any) {
    console.log(this.objProduct.indexDealer)
    this.objSummary.dealer = true
    this.objSummary.isValidDealer = true
    console.log({ lat: this.dealers[this.objProduct.indexDealer].latitude, lng: this.dealers[this.objProduct.indexDealer].longitude })
    console.log(map)
    map.setCenter({ lat: this.dealers[this.objProduct.indexDealer].latitude, lng: this.dealers[this.objProduct.indexDealer].longitude })
    this.objSummary.dealer = true
    this.objSummary.isValidDealer = true
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
  showWarn(mess: string) {
    this.messageService.add({ severity: 'warn', summary: 'Thông báo', detail: mess });
  }
  showSuccess(mess: string) {
    this.messageService.add({ severity: 'success', summary: 'Thông báo', detail: mess });
  }
  submit() {
    this.objProduct.name = this.objProduct.name.trim()
    this.objProduct.email = this.objProduct.email.trim()

    let { name, phone, email, product, indexDealer, contactBy, note, checkOnlineTerms } = this.objProduct
    console.log({ name, phone, email, product, indexDealer, contactBy, note })
    if (name == '' || phone == '' || email == '' || !contactBy || !checkOnlineTerms) {
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
      "DealerId": this.dealers[indexDealer].Id,
      "CustomerType": '',
      "Payments": '',
      "CustomerIdentityNumber": '',
      "Type": 'laithu',
      "Deposit": 0,
      "ContactBy": contactBy,
      "OrderDetails": [
        {
          "ProductId": product.Id,
          "Price": 0,
          "Quantity": 1,
          "InteriorColor": '',
          "ExteriorColor": ''
        }
      ]
    }
    console.log('data', data)
    let utm_source = this.cookie.getCookie('_aff_network')
    let aff_sid = this.cookie.getCookie('_aff_sid')
    this.commonService.postOrderHasParameters(data, utm_source, aff_sid).subscribe((res: any) => {
      this.showSuccess('Gửi yêu cầu lái thử thành công')
    })

  }
}
