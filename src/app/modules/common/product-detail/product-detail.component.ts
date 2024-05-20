import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
    // chõ này khó hiểu :(
    let iframe: any = document.querySelector('.iframe')
    if (iframe) iframe.scrollIntoView();
    // --------------- 


    window.addEventListener('scroll', this.onScroll)
    // console.log(window.innerHeight)
  }
  ngOnDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  }
  // OnDestroy(): void {
  //   window.removeEventListener("scroll", this.onScroll);
  // }
  tabs: string[] = ['Tổng quan', 'View 3D', 'Bộ sưu tập', 'Thiết kế', 'Công nghệ', 'Hiệu suất', 'Độ an toàn', 'Lái thử', 'Đặt cọc', 'Đánh giá']
  visibleSidebar: boolean = false

  onclickTab(e: any) {
    let tabActive: any = document.querySelector('.tab-item.active')
    if (e.target.dataset.index != tabActive.dataset.index && tabActive) tabActive.classList.remove("active");
    // e.target.classList.add("active");
    let index = parseInt(e.target.dataset.index)
    console.log('index', index)
    let views = document.querySelectorAll('.view-item')
    // console.log(views)
    // console.log(views[index])
    views[index].scrollIntoView({ behavior: 'smooth' });

  }
  onScroll() {
    let y = document.documentElement.scrollTop
    // console.log(y)

    let iframe: any = document.querySelector('.iframe')
    let tab: any = document.querySelector('.tab')

    if (y >= iframe.offsetHeight) {
      tab.style.display = 'flex'
    }
    else tab.style.display = 'none'

    let views = document.querySelectorAll('.view-item')
    let tabs = document.querySelectorAll('.tab-item')
    views.forEach((item: any, index: number) => {
      let yItem = item.offsetTop
      // console.log('yItem', yItem)
      if (y + 100 >= yItem) {
        let tabActive: any = document.querySelector('.tab-item.active')
        if (tabActive) tabActive.classList.remove("active");
        tabs[index].classList.add("active");
      }
    })


  }
  onClickMenuMobile() {
    this.visibleSidebar = true
  }
  onclickTabMoblie(e: any) {
    this.visibleSidebar = false
    let index = parseInt(e.target.dataset.index)
    let views = document.querySelectorAll('.view-item')
    // console.log(views)
    // console.log(views[index])
    views[index].scrollIntoView({ behavior: 'smooth' });

  }

}
