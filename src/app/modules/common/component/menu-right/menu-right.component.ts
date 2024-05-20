import { Component, Input, OnInit } from '@angular/core';
import { MenuItem, MessageService, PrimeNGConfig } from 'primeng/api';
import { FacebookService, InitParams } from 'ngx-facebook';
import { CommonService } from 'src/app/services/apis/common.service';
@Component({
  selector: 'app-menu-right',
  templateUrl: './menu-right.component.html',
  styleUrls: ['./menu-right.component.scss'],
})
export class MenuRightComponent implements OnInit {

  constructor(
    private facebookService: FacebookService,
    private messageService: MessageService,
    private commonService: CommonService
  ) {}

  items: MenuItem[] = [];
  isShow: boolean = false

  async ngOnInit() {
    this.items = [
      {
        label: '',
        icon: 'fa-solid fa-dharmachakra',
        routerLink: '/product/test-drive',
      },
      { label: '', icon: 'fa-solid fa-gears', routerLink: '/product/service' },
      {
        label: '',
        icon: 'fa-solid fa-scale-balanced',
        routerLink: '/product/compare',
      },
      {
        label: '',
        icon: 'fa-solid fa-money-bill',
        routerLink: '/product/cost',
      },
      // { label: '', icon: 'fa-solid fa-cart-shopping', routerLink: '/product/cost', }
    ];
    // var menuList: any = document.getElementById('menuList');
    // this.icon = 'pi pi-plus';
    // menuList.classList.add('hideToRight');
  }

  showWarn(mess: string) {
    this.messageService.add({
      severity: 'warn',
      summary: 'Thông báo',
      detail: mess,
    });
  }

 async clickIcon() {
    this.items = [
      {
        label: 'Đăng ký lái thử',
        icon: 'fa-solid fa-dharmachakra',
        routerLink: '/product/test-drive',
      },
      {
        label: 'Đặt hẹn dịch vụ',
        icon: 'fa-solid fa-gears',
        routerLink: '/product/service',
      },
      {
        label: 'So sánh sản phẩm',
        icon: 'fa-solid fa-scale-balanced',
        routerLink: '/product/compare',
      },
      {
        label: 'Chi phí lăn bánh',
        icon: 'fa-solid fa-money-bill',
        routerLink: '/product/cost',
      },
      // { label: 'Giỏ hàng', icon: 'fa-solid fa-cart-shopping', routerLink: '/product/cost', }
    ];
    this.isShow = !this.isShow
  }

}
