import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs-detail-product',
  templateUrl: './tabs-detail-product.component.html',
  styleUrls: ['./tabs-detail-product.component.scss']
})
export class TabsDetailProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.controlTab()
  }
  controlTab() {


    const tabs: any = document.querySelectorAll(".tab-item");
    const panes: any = document.querySelectorAll(".tab-pane");

    let tabActive: any = document.querySelector(".tab-item.active");
    let line: any = document.querySelector(".tabs .line");
    tabs.forEach((tab: any, index: number) => {
      const pane = panes[index];

      tab.onclick = function () {
        // console.log([document.querySelector(".tab-item.active")])
        document.querySelector(".tab-item.active")!.classList.remove("active");
        document.querySelector(".tab-pane.active")!.classList.remove("active");
        this.classList.add("active");
        pane.classList.add("active");
      };
    });

  }
  listInfoInside: any = [
    {
      image: './assets/images/tabViewInside1.svg',
      title: 'Không gian và thiết kế',
      desMain: '3 hàng ghế, 7 ghế ngồi',
      desDetail: 'Bên trong Teramont, sự thoải mái và linh hoạt không bao giờ lấy bớt không gian của hàng ghế cuối. Hàng ghế thứ 3 dành cho người lớn, có thể ra vào dễ dàng. Chỉ cần gấp hàng ghế thứ 2 về trước với 1 thao tác kéo và đẩy.'
    },
    {
      image: './assets/images/tabViewInside1.svg',
      title: 'Không gian và thiết kế',
      desMain: '3 hàng ghế, 7 ghế ngồi',
      desDetail: 'Bên trong Teramont, sự thoải mái và linh hoạt không bao giờ lấy bớt không gian của hàng ghế cuối. Hàng ghế thứ 3 dành cho người lớn, có thể ra vào dễ dàng. Chỉ cần gấp hàng ghế thứ 2 về trước với 1 thao tác kéo và đẩy.'
    },
    {
      image: './assets/images/tabViewInside1.svg',
      title: 'Không gian và thiết kế',
      desMain: '3 hàng ghế, 7 ghế ngồi',
      desDetail: 'Bên trong Teramont, sự thoải mái và linh hoạt không bao giờ lấy bớt không gian của hàng ghế cuối. Hàng ghế thứ 3 dành cho người lớn, có thể ra vào dễ dàng. Chỉ cần gấp hàng ghế thứ 2 về trước với 1 thao tác kéo và đẩy.'
    },
    {
      image: './assets/images/tabViewInside1.svg',
      title: 'Không gian và thiết kế',
      desMain: '3 hàng ghế, 7 ghế ngồi',
      desDetail: 'Bên trong Teramont, sự thoải mái và linh hoạt không bao giờ lấy bớt không gian của hàng ghế cuối. Hàng ghế thứ 3 dành cho người lớn, có thể ra vào dễ dàng. Chỉ cần gấp hàng ghế thứ 2 về trước với 1 thao tác kéo và đẩy.'
    },
  ]
  responsiveOptions: any = [
    {
      breakpoint: '1024px',
      numVisible: 1,
      numScroll: 1
    },
    {
      breakpoint: '768px',
      numVisible: 1,
      numScroll: 1
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1
    }
  ];

}
