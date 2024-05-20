import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CommonService } from "src/app/services/apis/common.service";
import { Meta } from '@angular/platform-browser'

@Component({
    selector: 'app-owner-accessory',
    templateUrl: './owner-accessory.component.html',
    styleUrls: ['./owner-accessory.component.scss']
})
export class OwnerAccessoryComponent implements OnInit {

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private commonService: CommonService,
        private meta: Meta
    ) { }
    device: string = "";
    changeWidth() {
        var w = window.innerWidth;
        var accessoryBanner = (<HTMLImageElement>document.getElementById("accessoryBanner"));
        if (w <= 576) {
            if (this.device != "mobile") {
                accessoryBanner.src = './assets/images/owner/Accessory-mobile.webp';
            }
            this.device = "mobile";
        }
        else if (w <= 820) {
            if (this.device != "tablet") {
                accessoryBanner.src = './assets/images/owner/Accessory-tablet.webp';
            }
            this.device = "tablet";
        }
        else {
            if (this.device != "pc") {
                accessoryBanner.src = './assets/images/owner/Accessory-pc.webp';
            }
            this.device = "pc";
        }
    }

    title: any = {
        component: "owner-main-title",
        title: "Phụ kiện mang đậm tính cá nhân hóa cũng như chính những chiếc Volkswagen của bạn"
    }
    title1: any = {
        title: "Từ hệ thống dẫn đường cho đến ghế trẻ em, hệ thống giải trí: Dành cho chiếc xe của bạn – nâng cấp ngay bây giờ"
    }
    list: any = {
        items: [
            { title: "Nẹp chống trầy cốp sau:", content: `Nẹp chống trầy cốp sau hạn chế các tổn hại trong quá trình tải và dỡ hàng. Được thiết kế như một tấm bảo vệ trong suốt và bằng vật liệu thép không gỉ.` },
            { title: "Tấm chắn bùn:", content: `Với tấm chấn bùn, xe của bạn sẽ luôn sạch sẽ đồng thời bảo vệ lớp sơn xe không bị trầy xước. Gíup làm chệch hướng những viên đá nhỏ và bụi bẩn, từ đó bảo vệ xe cũng như người di chuyển phía sau có tầm nhìn tốt hơn khi tham gia giao thông.` },
            { title: "Vè che mưa:", content: `Khi hạ kính xe, việc thay đổi hướng gió giúp hạn chế bụi bẩn từ bên ngoài bay vào khoang nội thất vào những ngày nắng nóng hoặc cả khi trời mưa` },
        ],
    }
    list1: any = {
        // title:'Tối ưu hóa để phù hợp với kích thước sàn xe, thảm lót sàn của chúng tôi giúp bảo vệ nội thất xe.',
        items: [
            { content: `Vải velour chất lượng cao 800 g / m2` },
            { content: `Chống trơn trượt nhờ hệ thống buộc chặt hai điểm với các nút nhấn` },
            { content: `Lớp phủ chống mài mòn` },
            { content: `Dệt chữ trên thảm lót ở khoang lái` },
        ],
    }
    gallery: any = {
        // component: "owner-photo-gallery",
        // title: 'Phụ kiện mang đậm tính cá nhân hóa cũng như chính những chiếc Volkswagen của bạn',
        // description: 'Tra cứu thông tin phụ kiện chính hãng của chúng tôi  - cung cấp mọi thứ bạn muốn',
        // link: '/owner/phu-kien',
        total: 4,
        items: [
            'https://vw-image.s3.ap-southeast-1.amazonaws.com/video/accessory-5.webp',
            'https://vw-image.s3.ap-southeast-1.amazonaws.com/video/accessory-6.webp',
            'https://vw-image.s3.ap-southeast-1.amazonaws.com/video/accessory-7.webp',
            'https://vw-image.s3.ap-southeast-1.amazonaws.com/video/accessory-8.webp',
        ]
    }
    content: any = [
        {
            header: 'G0 Plus',
            description: 'Bảo vệ trẻ sơ sinh và trẻ nhỏ',
            items: [
                { content: `Dây đai tuỳ chỉnh` },
                { content: `Được trang bị dây đai 3 điểm` },
                { content: `Ghế tuỷ chỉnh chiều cao` },
                { content: `Chống nắng` },
                { content: `Thoải mái mang theo` },
                { content: `Giặt được ở nước có nhiệt độ 30oC` },
                { content: `Dành cho trẻ từ 15 tháng tuổi (13 kg)` },
            ],
        },
        {
            header: 'G0 Plus ISOFIX',
            description: 'Bảo vệ trẻ sơ sinh và trẻ nhỏ',
            items: [
                { content: `Dây đai tuỳ chỉnh` },
                { content: `Được trang bị dây đai 3 điểm` },
                { content: `Ghế tuỷ chỉnh chiều cao` },
                { content: `Chống nắng` },
                { content: `Thoải mái mang theo` },
                { content: `Giặt được ở nước có nhiệt độ 30oC` },
                { content: `Dành cho trẻ từ 15 tháng tuổi (13 kg)` },
            ],
        },
        {
            header: 'G1 ISOFIX DUO plus Top Tether',
            description: 'Bảo vệ trẻ sơ sinh và trẻ nhỏ',
            items: [
                { content: `Với điểm neo được kết nối với khoang hành lý` },
                { content: `Dây đai tuỳ chỉnh` },
                { content: `Ghế và dây đai có thể điều chỉnh riêng` },
                { content: `Giặt được ở nước có nhiệt độ 30oC` },
                { content: `Dành cho trẻ từ tám tháng đến bốn tuổi (9–18 kg)` },
            ],
        },
        {
            header: 'G2-3 ISOFIT',
            description: 'Bảo vệ trẻ nhỏ',
            items: [
                { content: `Tuỳ chỉnh chiều cao tựa đầu` },
                { content: `Chiều cao và độ nghiêng của ghế ngồi có thể tuỳ chỉnh` },
                { content: `Dây đai chắc chắn` },
                { content: `Giặt được ở nước có nhiệt độ 30oC` },
                { content: `Có thể dung làm ghế nâng mà không cần tựa lưng` },
                { content: `Dành cho trẻ từ ba đến mười hai tuổi (15–36 kg)` },
            ],
        },
        {
            header: 'G2-3 ISOFIT (GTI Design) ',
            description: 'Bảo vệ trẻ nhỏ',
            items: [
                { content: `Tuỳ chỉnh chiều cao tựa đầu` },
                { content: `Chiều cao và độ nghiêng của ghế ngồi có thể tuỳ chỉnh` },
                { content: `Dây đai chắc chắn` },
                { content: `Thiết kế GTI` },
                { content: `Giặt được ở nước có nhiệt độ 30oC` },
                { content: `Dành cho trẻ từ ba đến mười hai tuổi (15–36 kg)` },
            ],
        },

    ]
    reference: any = {
        component: "owner-reference",
        title: 'Bạn quan tâm?',
        description: 'Có thể đặt hàng các phụ kiện thời trang và đa dụng từ các đại lý chính hãng.',
        link: {
            name: 'Tìm đại lí ủy quyền của Volkswagen',
            value: 'https://www.vw.com.vn/vi/volkswagen-dealer-search.html'
        }
    }


    ngOnInit(): void {
        this.changeWidth();
        window.addEventListener("resize", this.changeWidth);
    }
    //   data: any
}
