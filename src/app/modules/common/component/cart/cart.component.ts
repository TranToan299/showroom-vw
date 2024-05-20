import { Component, Input, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { formatMoney } from 'src/app/lib/myLib';
import { CommonService } from 'src/app/services/apis/common.service';
import { LocalStorageService } from './../../../../services/app-services/local-storage-service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartCount!: number;
  @Input() cartBook!: any;
  @Input() cartData!: any;

  constructor(
    private messageService: MessageService,
    private commonService: CommonService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    let cart_text = window.localStorage.getItem('cart-item');

    if (cart_text != null) {
      this.cartLength = JSON.parse(cart_text).length;
    }

    this.localStorageService.cardChange.subscribe((res) => {
      let cart_text = window.localStorage.getItem('cart-item');
      if (cart_text) {
        this.cartInfo = JSON.parse(cart_text);
        this.cartLength = this.cartInfo.length;
      }
    });
  }

  ngOnChanges() {
    if (this.cartBook == 1) {
      let cart_text = window.localStorage.getItem('cart-item');
      if (cart_text == '[]') {
        this.display = true;
        this.cartInfo = JSON.parse(cart_text);
        this.OrderDetails = this.cartInfo;
      } else if (cart_text != null) {
        this.display = true;
        this.cartInfo = JSON.parse(cart_text);
        this.OrderDetails = this.cartInfo;
      }
    }
  }

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
    province: '',
    dealerId: '',
    phone: '',
    email: '',
    name: '',
  };

  OrderDetails: any = [];

  objCustomer: any = {
    typeCustomer: '',
    name: '',
    identityCard: '',
    phone: '',
    email: '',
    note: '',
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
  cartLength: any = 0;

  checkboxs: any = [];
  checkArr: any = [];

  pay: string = '';
  display: boolean = false;
  display2: boolean = false;
  display3: boolean = false;
  qrUrl: string = '';
  accountNumber: string = '';

  totalPrice: number = 0;

  showDialog() {
    this.display = true;
    this.display2 = false;
    let cart_text = window.localStorage.getItem('cart-item');

    this.OrderDetails = [];
    if (cart_text) {
      this.cartInfo = JSON.parse(cart_text);
      this.OrderDetails = this.cartInfo;
      //console.log(this.OrderDetails);
    }
  }
  hideDialog() {
    this.display = false;
    this.cartBook = 0;
  }

  showDialog2() {
    this.display3 = false;
    this.cartBook = 0;
    // console.log('checkArr.length', this.checkArr.length);
    // if (!this.checkArr.length) {
    //     this.showWarn('Vui lòng chọn sản phẩm');
    //     return;
    // } else {
    // let cart_text = window.localStorage.getItem('cart-item');

    if (this.OrderDetails) {
      let data = this.OrderDetails;

      if (data.length > 0) {
        this.totalPrice = 0;
        for (var i = 0; i < data.length - 1; i++) {
          if (data[i].Dealer.dealer !== data[i + 1].Dealer.dealer) {
            this.showWarn('Không thể đặt cùng lúc sản phẩm khác đại lý');
            return;
          }
        }
        this.OrderDetails.forEach((x: any) => {
          this.totalPrice += x.Deposit * x.Quantity;
        });
        this.objDealer = data[0].Dealer;
        this.display = false;
        this.display2 = true;
      }
      // else {
      //     this.OrderDetails = data;
      // }
    }

    // this.OrderDetails = [];
    // this.OrderDetails = this.cartInfo;

    // const dealer = this.checkArr[0].Dealer.dealer;
    // const sameDealer = this.checkArr?.filter(
    //     (item: any) => item.Dealer.dealer === dealer
    // );
    // const beforeFilterLength = this.checkArr.length;
    // const afterFilterLength = sameDealer.length;

    // if (beforeFilterLength === afterFilterLength) {
    //     this.display = false;
    //     this.display = true;
    //     this.objDealer.name = this.checkArr[0].Dealer.name;
    //     this.objDealer.email = this.checkArr[0].Dealer.email;
    //     this.objDealer.phone = this.checkArr[0].Dealer.phone;
    //     this.objDealer.province = this.checkArr[0].Dealer.province;
    //     this.objDealer.dealerId = this.checkArr[0].Dealer.dealer;

    //     this.totalPrice = 0;
    //     this.checkArr.forEach((x: any) => {
    //         this.totalPrice += x.Deposit * x.Quantity;
    //     });
    // } else {
    //     this.showWarn('Vui lòng chọn sản phẩm cùng đại lí');
    //     return;
    // }
    // }
  }
  hideDialog2() {
    this.display2 = false;
  }

  showSuccess(mess: string) {
    this.messageService.add({
      severity: 'success',
      summary: 'Thông báo',
      detail: mess,
    });
  }

  showWarn(mess: string) {
    this.messageService.add({
      severity: 'warn',
      summary: 'Thông báo',
      detail: mess,
    });
  }

  submitOrder() {
    let { typeCustomer, name, identityCard, phone, email, note } =
      this.objCustomer;
    let { dealer } = this.objDealer;
    this.objCustomer.name = name.trim();
    this.objCustomer.phone = phone.trim();
    this.objCustomer.email = email.trim();
    this.objCustomer.note = note.trim();
    this.objCustomer.identityCard = identityCard.trim();
    let check = true;
    if (
      name == '' ||
      phone == '' ||
      email == '' ||
      identityCard == '' ||
      dealer == ''
    )
      check = false;
    if (this.pay == '') check = false;
    if (check == false) {
      this.showWarn('Vui lòng nhập đầy đủ thông tin');
      return;
    }
    if (!/^.*@.*\..*$/.test(email)) check = false;
    if (!/^\d{9,20}$/.test(identityCard)) check = false;
    if (check == false) {
      this.showWarn('Vui lòng nhập đúng thông tin');
      return;
    }

    //console.log(this.objProduct.product);

    let arrProduct: any = [];

    this.OrderDetails.forEach((x: any) => {
      let product = arrProduct.find(
        (y: any) =>
          y.ProductId === x.ProductId &&
          y.ExteriorColor === x.ExteriorColor &&
          y.InteriorColor === x.InteriorColor &&
          y.Dealer.dealer === x.Dealer.dealer
      );

      if (!product) {
        arrProduct.push(x);
      } else {
        product.Quantity++;
      }
    });

    let data = {
      Id: 0,
      CustomerId: 0,
      CustomerName: name,
      CustomerAddress: '',
      CustomerEmail: email,
      CustomerPhone: phone,
      CustomerNote: note,
      Status: 0,
      DealerId: dealer,
      CustomerType: typeCustomer,
      Payments: this.pay,
      CustomerIdentityNumber: identityCard,
      Type: 'datcoc',
      Deposit: this.totalPrice, //this.objProduct.product.Deposit,
      OrderDetails: arrProduct,
    };

    // const sumOrder = {
    //   ...order,
    //   Quantity: arrProduct.length,
    // };

    // let submitData = {
    //   ...data,
    //   OrderDetails: [sumOrder],
    // };

    this.commonService.postOrder(data).subscribe((res: any) => {
      if (res.QRUrl) {
        this.qrUrl = res.QRUrl;
        this.accountNumber = res.VirtualAccountNumber;
        this.display3 = true;
      }

      this.showSuccess('Đặt cọc thành công');
      localStorage.setItem('cart-item', '[]');
      this.cartInfo = [];
      this.cartLength = 0;
      this.cartCount = 0;
      this.pay = '';
      this.OrderDetails = [];
      this.totalPrice = 0;
      this.objProduct = {};
      this.objDealer = {};
      this.display = false;
      this.display2 = false;
      //   this.display3 = false;
      this.localStorageService.cardChange.next(true);
    });
  }

  handleDelete(e: any) {
    let data = e;
    let cart_text = window.localStorage.getItem('cart-item');

    if (cart_text != null) {
      let cart_json = JSON.parse(cart_text);

      for (var i = 0; i < cart_json.length; i++) {
        if (
          data.ProductId === cart_json[i].ProductId &&
          data.ExteriorColor === cart_json[i].ExteriorColor &&
          data.InteriorColor === cart_json[i].InteriorColor &&
          data.Dealer.dealer === cart_json[i].Dealer.dealer
        ) {
          const index = cart_json.indexOf(cart_json[i]);
          if (index > -1) {
            cart_json.splice(index, 1);
            this.checkArr = cart_json;
          }
          this.cartCount--;

          localStorage.setItem('cart-item', JSON.stringify(cart_json));
          this.localStorageService.cardChange.next(true);
          this.showDialog();
        }
      }
    }
  }

  handleCheck(e: any) {
    let data: any = {
      ProductId: e.ProductId,
      ProductName: e.ProductName,
      Price: e.Price,
      Version: e.Version,
      Deposit: e.Deposit,
      Quantity: 1,
      Dealer: e.Dealer,
      InteriorColor: e.InteriorColor,
      ExteriorColor: e.ExteriorColor,
    };

    if (this.checkArr.length > 0) {
      let cart_json = this.checkArr;

      for (var i = 0; i < cart_json.length; i++) {
        if (
          data.ProductId === cart_json[i].ProductId &&
          data.ExteriorColor === cart_json[i].ExteriorColor &&
          data.InteriorColor === cart_json[i].InteriorColor &&
          data.Dealer.dealer === cart_json[i].Dealer.dealer
        ) {
          const index = cart_json.indexOf(cart_json[i]);
          if (index > -1) {
            cart_json.splice(index, 1);
            this.checkArr = cart_json;
          }
        } else if (i == cart_json.length - 1) {
          cart_json.push(data);
          this.checkArr = cart_json;

          return;
        }
      }
    } else {
      const cart_json = [data];
      this.checkArr = cart_json;
    }
  }
}
