import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'product-detail',
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
    ngOnInit(): void {
    }
    index=0
    listInfoInside:any=[
        {
            image:'./assets/images/tabViewInside1.svg',
            title:'Không gian và thiết kế',
            desMain:'3 hàng ghế, 7 ghế ngồi',
            desDetail:'Bên trong Teramont, sự thoải mái và linh hoạt không bao giờ lấy bớt không gian của hàng ghế cuối. Hàng ghế thứ 3 dành cho người lớn, có thể ra vào dễ dàng. Chỉ cần gấp hàng ghế thứ 2 về trước với 1 thao tác kéo và đẩy.'
        },
        {
            image:'./assets/images/tabViewInside1.svg',
            title:'Không gian và thiết kế',
            desMain:'3 hàng ghế, 7 ghế ngồi',
            desDetail:'Bên trong Teramont, sự thoải mái và linh hoạt không bao giờ lấy bớt không gian của hàng ghế cuối. Hàng ghế thứ 3 dành cho người lớn, có thể ra vào dễ dàng. Chỉ cần gấp hàng ghế thứ 2 về trước với 1 thao tác kéo và đẩy.'
        },
        {
            image:'./assets/images/tabViewInside1.svg',
            title:'Không gian và thiết kế',
            desMain:'3 hàng ghế, 7 ghế ngồi',
            desDetail:'Bên trong Teramont, sự thoải mái và linh hoạt không bao giờ lấy bớt không gian của hàng ghế cuối. Hàng ghế thứ 3 dành cho người lớn, có thể ra vào dễ dàng. Chỉ cần gấp hàng ghế thứ 2 về trước với 1 thao tác kéo và đẩy.'
        },
        {
            image:'./assets/images/tabViewInside1.svg',
            title:'Không gian và thiết kế',
            desMain:'3 hàng ghế, 7 ghế ngồi',
            desDetail:'Bên trong Teramont, sự thoải mái và linh hoạt không bao giờ lấy bớt không gian của hàng ghế cuối. Hàng ghế thứ 3 dành cho người lớn, có thể ra vào dễ dàng. Chỉ cần gấp hàng ghế thứ 2 về trước với 1 thao tác kéo và đẩy.'
        },
    ]
    responsiveOptions:any = [
        {
            breakpoint: '1024px',
            numVisible: 3,
            numScroll: 3
        },
        {
            breakpoint: '768px',
            numVisible: 2,
            numScroll: 2
        },
        {
            breakpoint: '560px',
            numVisible: 1,
            numScroll: 1
        }
    ];
}