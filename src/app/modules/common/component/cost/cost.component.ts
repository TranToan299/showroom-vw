import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/apis/common.service';
import { MessageService } from 'primeng/api';
import { listProduct, additionalInformationProduct, additionalInformationCategory } from 'src/app/mocks/listProduct';

import { formatMoney } from 'src/app/lib/myLib';
@Component({
  selector: 'app-cost',
  templateUrl: './cost.component.html',
  styleUrls: ['./cost.component.scss']
})
export class CostComponent implements OnInit {

  constructor(
    private commonService: CommonService,
    private messageService: MessageService,

  ) { }

  ngOnInit(): void {
    // send view
    this.commonService.getIp().subscribe((data: any) => {
      let ip = data.ip
      this.commonService.putAnalyticsURL({ URL: window.location.href, Ip: ip }).subscribe((data: any) => {
      })
    })
    // get  cate
    this.commonService.getCategory().subscribe((cates: any) => {
      cates = cates.filter((item: any) => item.IsActive)

      this.cates = cates.map((item: any) => (
        { ...item, ...additionalInformationCategory[item.Id] }
      ))
      // get product
      this.commonService.getProduct().subscribe((products: any) => {
        products = products.Items
        this.products = products
        this.objProduct.cate = this.cates[0]
        this.objProduct.products = this.products.filter((item: any) => item.CategoryId == this.cates[0].Id)
        this.objProduct.product = this.objProduct.products[0]
        // get  province
        this.commonService.getCity().subscribe((citys: any) => {
          this.citys = citys
          this.objProduct.city = citys[0]
          this.getFeeByCity()
        })
      })
    })

  }
  objProduct: any = {
    city: {},
    cate: {},
    products: [],
    product: {}
  }
  objCustomer: any = {
    name: '',
    phone: '',
    city: ''
  }
  products: any[] = []
  citys: any[] = []
  fee: any[] = []
  cates: any[] = []

  feeReal: number = 0
  showModalFormAdvise: boolean = false

  formatMoney = formatMoney
  costIcon: any = {
    '2': 'fa-solid fa-barcode',// fa-solid fa-file-invoice
    '3': 'fa-solid fa-key',
    '4': 'fa-solid fa-user-shield',
    '5': 'fa-solid fa-marker',
    '6': 'fa-solid fa-road',
    '7': 'fa-solid fa-truck-fast',
    '8': 'fa-solid fa-file-invoice'
  }
  getFeeByCity() {
    this.commonService.getFeeByCity(this.objProduct.city.Id).subscribe((data: any) => {
      this.fee = data;
      // console.log(this.fee)
      this.findFeeReal()
    })
  }

  changeDropdownCate(e: any) {
    console.log(e.value)
    this.objProduct.cate = e.value
    this.objProduct.products = this.products.filter((item: any) => item.CategoryId == e.value.Id)
    this.objProduct.product = this.objProduct.products[0]

    this.getFeeByCity()

  }
  changeDropdownCity(e: any) {
    console.log(e.value)
    this.objProduct.city = e.value
    this.getFeeByCity()


  }
  changeDropdownCityAdvise(e: any) {
    this.objCustomer.city = e.value
  }
  changeDropdownProduct(e: any) {
    console.log(e.value)
    this.objProduct.product = e.value

    this.getFeeByCity()

  }
  findFeeReal() {
    let total = this.objProduct.product.PriceTax
    this.fee.forEach((item: any) => {
      if (item.Formula == 'plus') total += item.Value
      else if (item.Formula == 'plusPercent') total += (item.Value * this.objProduct.product.PriceTax / 100)
    })
    this.feeReal = total
  }

  openModalFormAdvise() {
    this.showModalFormAdvise = true
  }
  showWarn(mess: string) {
    this.messageService.add({ severity: 'warn', summary: 'Thông báo', detail: mess });
  }
  showSuccess(mess: string) {
    this.messageService.add({ severity: 'success', summary: 'Thông báo', detail: mess });
  }
  submitFormAdvise() {
    this.objCustomer.name = this.objCustomer.name.trim()
    let { name, phone, city } = this.objCustomer
    if (name == '' || phone == '' || city == '') {
      this.showWarn('Vui long nhập đầy đủ thông tin')
      return
    }
    console.log(this.objCustomer)
    let data = {
      "CustomerName": name,
      "CustomerAddress": city,
      "CustomerPhone": phone,
      "Type": "tuvan"

    }
    this.commonService.postOrder(data).subscribe((res: any) => {
      // console.log('res', res)
      this.showModalFormAdvise = false
      this.showSuccess('Gửi yêu cầu tư vấn thành công')
    })
  }
}
