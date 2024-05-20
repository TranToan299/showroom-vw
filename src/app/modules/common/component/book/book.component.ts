import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { formatMoney } from 'src/app/lib/myLib';
import { additionalInformationProduct } from 'src/app/mocks/listProduct';
import { CommonService } from 'src/app/services/apis/common.service';
import { LocalStorageService } from './../../../../services/app-services/local-storage-service';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {
  constructor(
    private messageService: MessageService,
    private commonService: CommonService,
    private changeDetectorRef: ChangeDetectorRef,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
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
    // get data province
    this.commonService.getAllDealer().subscribe((data: any) => {
      //console.log(data);
      let provinces: string[] = [];
      data.forEach((item: any, index: number) => {
        let { name, city } = item;
        if (provinces.includes(city)) {
          this.objDealer.dealers[city].push(item);
        } else {
          provinces.push(city);
          this.objDealer.dealers[city] = [item];
        }
      });
      provinces.sort();
      this.objDealer.provinces = [];
      provinces.forEach((item: string, index: number) => {
        this.objDealer.provinces.push({ name: item, code: item });
      });
    });
    // get cate
    this.commonService.getCategory().subscribe((data: any) => {
      this.listCate = data.filter((item: any) => item.IsActive);
      console.log('this.listCate', this.listCate);
      // get product
      this.commonService.getProduct().subscribe((data: any) => {
        data = data.Items;
        data.forEach((item: any) => {
          this.listProduct.push({
            ...item,
            ...additionalInformationProduct[item.Id],
          });
        });
        console.log(this.listProduct)

        let productsInFirstCate = this.listProduct.filter(
          (item: any) => item.CategoryId == this.listCate[0].Id
        );
        this.objProduct = {
          cate: this.listCate[0],
          products: productsInFirstCate,
          product: productsInFirstCate[0],
          IndexInColorsExterior: 0,
        };
        console.log('this.objProduct', this.objProduct);
      });
    });
    // scroll top -- khó hiểu
    window.scrollTo({ top: 0 });

    let cart_text = window.localStorage.getItem('cart-item');

    if (cart_text != null) {
      this.cartCount = JSON.parse(cart_text).length;
      this.cartLength = JSON.parse(cart_text).length;
    }
  }

  OrderDetails: any = [];
  cartLength: any = 0;
  cartCount: any = 0;
  cartBook: any = 0;
  listCate: any[] = [];
  listProduct: any[] = [];
  formatMoney: any = formatMoney;
  objProduct: any = {
    cate: {},
    products: [],
    product: {},
    IndexInColorsExterior: 0,
  };
  objDealer: any = {
    provinces: [{ name: '', code: '' }],
    province: '',
    dealers: {},
    dealer: '',
    phone: '',
    email: '',
    name: '',
  };

  objCustomer: any = {
    typeCustomer: '',
    name: '',
    identityCard: '',
    phone: '',
    email: '',
    typeCustomers: [
      { name: 'Cá nhân', code: 'cá nhân' },
      { name: 'Doanh nghiệp', code: 'doanh nghiệp' },
    ],
  };

  bankAccountInfo: any = [
    {
      name: 'CONG TY TNHH TREND MOTOR VIET NAM',
      bank: 'Seabank-CN.HCM',
      accNum: '10100014483242',
    },
    {
      name: 'CONG TY TNHH TREND MOTOR VIET NAM',
      bank: 'VPBank-CN Sài Gòn',
      accNum: '126304595',
    },
  ];

  cartInfo: any = [];

  checkboxs: any = [];
  pay: string = '';
  display: boolean = false;

  displayBook: boolean = false;

  handleBook() {
    let { typeCustomer, name, identityCard, phone, email } = this.objCustomer;
    let { dealer } = this.objDealer;
    this.objCustomer.name = name.trim();
    this.objCustomer.phone = phone.trim();
    this.objCustomer.email = email.trim();
    this.objCustomer.identityCard = identityCard.trim();
    this.objCustomer.typeCustomer = typeCustomer.trim();
    let check = true;
    if (this.checkboxs.length != 3) check = false;
    if (check == false) {
      this.showWarn('Vui lòng nhập đầy đủ thông tin');
      return;
    }
    this.submit();
  }
  hideDialog() {
    this.display = false;
  }

  hideBookDialog() {
    this.displayBook = false;
  }

  showBookDialog() {
    this.displayBook = false;
    this.cartBook = 1;
  }

  showWarn(mess: string) {
    this.messageService.add({
      severity: 'warn',
      summary: 'Thông báo',
      detail: mess,
    });
  }
  clickCate(e: any) {
    let arr = document.querySelectorAll('.list-image-item');
    arr.forEach((item: any) => {
      item.classList.remove('active');
    });
    let t: any = e.target.closest('.list-image-item');
    let index = parseInt(t.dataset.index);
    t.classList.add('active');
    this.objProduct.cate = this.listCate[index];

    const cateId = this.listCate[index].Id

    this.objProduct.products = this.listProduct.filter(
      (item: any) => item.CategoryId == cateId
    );
    this.objProduct.product = this.objProduct.products[0];
    this.objProduct.IndexInColorsExterior = 0;

    //console.log(this.objProduct);
  }
  clickVersion(e: any) {
    let arr = document.querySelectorAll('.version-item');
    arr.forEach((item: any) => {
      item.classList.remove('active');
    });
    let t: any = e.target;
    let index = parseInt(t.dataset.index);
    t.classList.add('active');
    this.objProduct.product = this.objProduct.products[index];
    this.objProduct.IndexInColorsExterior = 0;
  }
  clickExterior(e: any) {
    let active: any = document.querySelector('.exterior-color.active');
    if (active) active.classList.remove('active');
    let t: any = e.target;
    let index = parseInt(t.dataset.index);
    t.classList.add('active');
    this.objProduct.IndexInColorsExterior = index;
  }

  changeDropdownDeader(e: any) {
    //console.log(e.value);
    let item: any = this.objDealer.dealers[this.objDealer.province].find(
      (item: any) => item.Id == e.value
    );
    this.objDealer.name = item.name;
    this.objDealer.phone = item.phone;
    this.objDealer.email = item.email;
  }
  submit() {
    let { typeCustomer, name, identityCard, phone, email } = this.objCustomer;
    let { dealer } = this.objDealer;
    this.objCustomer.name = name.trim();
    this.objCustomer.phone = phone.trim();
    this.objCustomer.email = email.trim();
    this.objCustomer.identityCard = identityCard.trim();
    // let data = {
    //     Id: 0,
    //     CustomerId: 0,
    //     CustomerName: name,
    //     CustomerAddress: '',
    //     CustomerEmail: email,
    //     CustomerPhone: phone,
    //     CustomerNote: '',
    //     Status: 0,
    //     DealerId: dealer,
    //     CustomerType: typeCustomer,
    //     Payments: this.pay,
    //     CustomerIdentityNumber: identityCard,
    //     Type: 'datcoc',
    //     Deposit: this.objProduct.product.Deposit,
    //     OrderDetails: [
    //         {
    //             ProductId: this.objProduct.product.Id,
    //             ProductName: this.objProduct.product.Name,
    //             Price: this.objProduct.product.Price,
    //             Version: this.objProduct.product.Version,
    //             Deposit: this.objProduct.product.Deposit,
    //             Quantity: 1,
    //             InteriorColor: '',
    //             ExteriorColor:
    //                 this.objProduct.product.colorsExterior[
    //                     this.objProduct.IndexInColorsExterior
    //                 ].name,
    //         },
    //     ],
    // };
    let data: any = {
      ProductId: this.objProduct.product.Id,
      ProductName: this.objProduct.product.Name,
      Price: this.objProduct.product.Price,
      Version: this.objProduct.product.Version,
      Deposit: this.objProduct.product.Deposit,
      Quantity: 1,
      Dealer: this.objDealer,
      InteriorColor: '',
      ExteriorColor:
        this.objProduct.product.colorsExterior[
          this.objProduct.IndexInColorsExterior
        ].name,
    };
    let cart_text = window.localStorage.getItem('cart-item');

    if (cart_text == '[]') {
      let cart_json = JSON.parse(cart_text);
      localStorage.removeItem('cart-item');
      this.cartBook = 0;
      cart_json.push(data);
      localStorage.setItem('cart-item', JSON.stringify(cart_json));
      this.localStorageService.cardChange.next(true);
      this.cartCount = cart_json ? cart_json.length : 0;
      //console.log(this.cartCount);
      this.displayBook = true;
      this.showSuccess('Thêm vào giỏ hàng thành công');
      this.changeDetectorRef.markForCheck();

      return;
    } else if (cart_text != null) {
      let cart_json = JSON.parse(cart_text);
      this.cartCount++;
      for (var i = 0; i < cart_json.length; i++) {
        cart_json.push(data);
        localStorage.setItem('cart-item', JSON.stringify(cart_json));
        this.localStorageService.cardChange.next(true);
        this.showSuccess('Thêm vào giỏ hàng thành công');
        return;
      }
    } else {
      this.cartCount++;
      const cart_json = [data];
      window.localStorage.setItem('cart-item', JSON.stringify(cart_json));
      this.localStorageService.cardChange.next(true);
      this.showSuccess('Thêm vào giỏ hàng thành công');
      this.displayBook = true;
    }
  }

  showSuccess(mess: string) {
    this.messageService.add({
      severity: 'success',
      summary: 'Thông báo',
      detail: mess,
    });
  }
}
