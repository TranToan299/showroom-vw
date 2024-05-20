import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CommonService } from "src/app/services/apis/common.service";
import { Meta } from '@angular/platform-browser'

@Component({
    selector: 'app-owner-wheel',
    templateUrl: './owner-wheel.component.html',
    styleUrls: ['./owner-wheel.component.scss']
})
export class OwnerWheelComponent implements OnInit {

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private commonService: CommonService,
        private meta: Meta
    ) { }
    content: any = [
        {
            component: "owner-banner",
            video: "https://vw-image.s3.ap-southeast-1.amazonaws.com/video/ST_16-9_Loop_Wheels-and-tyres-0x540-2000k-1.mp4"
        },
        {
            component: "owner-main-title",
            title: "Mâm và lốp cho xe của bạn",
            description: "Dù cho mùa hè, mùa đông hay bất kỳ thời tiết nào."
        },
        {
            component: "owner-list",
            //   title: 'Độ an toàn của bánh xe đã được kiểm chứng thông qua:',
            subTitle: 'Lợi ích',
            description: 'Bánh xe của chúng tôi được thiết kế với đặc trưng riêng, mâm và lốp xe hoàn toàn tương thích với xe cả về mặt trực quan và kỹ thuật. Chúng tôi hợp tác với các nhà sản xuất lốp xe hàng đầu thế giới để luôn đảm bảo chất lượng mâm và bánh xe hoàn hảo.',
            items: [
                { title: "Tăng tính an toàn:", content: "Các quy trình thử nghiệm đặc biệt cho mâm hợp kim để xác nhận mức độ an toàn cao." },
                { title: "Thiết kế hiện đại:", content: "Cho dù là phong cách thể thao hay thanh lịch: Bạn có thể tùy chọn màu sắc và thiết kế từ bộ sưu tập phụ kiện mâm xe của chúng tôi." },
                { title: "Kiểm tra:", content: "Mỗi bánh xe sẽ được kiểm tra độ mòn, độ vênh, cũng như cân bằng động." },
                { title: "Độ bền:", content: "Khả năng chịu lực tốt." },
            ]
        },
        {
            component: "owner-list",
            subTitle: 'Độ an toàn của bánh xe đã được kiểm chứng thông qua:',
            items: [
                { content: "Kiểm tra sức mạnh toàn diện" },
                { content: "Kiểm tra độ bền toàn diện" },
                { content: "Kiểm tra sức chịu đựng" },
                { content: "Kiểm tra vật liệu và bề mặt" },
            ]
        },
        // {
        //   component: "owner-main-title",
        //   title: "Mọi điều bạn cần biết về chiếc xe",
        //   description: 'Dù cho mùa hè, mùa đông hay bất kỳ thời tiết nào.'
        // },
        // {
        //   component: "owner-p",
        //   content: 'Bánh xe của chúng tôi được thiết kế với đặc trưng riêng, mâm và lốp xe hoàn toàn tương thích với xe cả về mặt trực quan và kỹ thuật. Chúng tôi hợp tác với các nhà sản xuất lốp xe hàng đầu thế giới để luôn đảm bảo chất lượng mâm và bánh xe hoàn hảo.Bánh xe của chúng tôi được thiết kế với đặc trưng riêng, mâm và lốp xe hoàn toàn tương thích với xe cả về mặt trực quan và kỹ thuật. Chúng tôi hợp tác với các nhà sản xuất lốp xe hàng đầu thế giới để luôn đảm bảo chất lượng mâm và bánh xe hoàn hảo.'
        // },
        // {
        //   component: "owner-image",
        //   title: 'Bánh xe của chúng tôi',
        //   image: 'https://assets.volkswagen.com/is/image/volkswagenag/4-3_Silencer-3?Zml0PWNyb3AsMSZmbXQ9d2VicCZxbHQ9Nzkmd2lkPTk2MCZoZWk9NzIwJmFsaWduPTAuMDAsMC4wMCZiZmM9b2ZmJjBhMDQ='
        // },
        // {
        //   component: "owner-accordion",
        //   isHasImage: true,
        //   title: 'Nội thất rộng rãi và tiện nghi',
        //   items: [
        //     {
        //       tabHeader: 'Nội thất sang trộng',
        //       title: 'Hài hòa và tinh tế trong từng chi tiết',
        //       description: 'Tay lái bọc da 3 chấu phẳng đáy, kết hợp với các chi tiết trang trí mạ bạc',
        //       image: 'https://assets.volkswagen.com/is/image/volkswagenag/4-3_Accessories-Gallery-3-4?Zml0PWNyb3AsMSZmbXQ9d2VicCZxbHQ9Nzkmd2lkPTY4MCZoZWk9NTEwJmFsaWduPTAuMDAsMC4wMCZiZmM9b2ZmJjdjN2E=',
        //       items: [
        //         'Nội thất phối hợp hài hòa giữa màu sắc và chất liệu cao cấp cùng với các đường nét thiết kế sắc nét và tinh tế.',
        //         'Hỗ trợ vào xe thông minh',
        //         'Hỗ trợ vào xe thông minh',
        //         'Hỗ trợ vào xe thông min'
        //       ]
        //     },
        //     {
        //       tabHeader: 'Nội thất sang trộng2',
        //       title: 'Hài hòa và tinh tế trong từng chi tiết',
        //       description: 'Tay lái bọc da 3 chấu phẳng đáy, kết hợp với các chi tiết trang trí mạ bạc',
        //       image: 'https://assets.volkswagen.com/is/image/volkswagenag/2-1_Accessories-Gallery-4-4?Zml0PWNyb3AsMSZmbXQ9d2VicCZxbHQ9Nzkmd2lkPTY4MCZoZWk9MzQwJmFsaWduPTAuMDAsMC4wMCZiZmM9b2ZmJmU0MTE=',
        //       items: [
        //         'Nội thất phối hợp hài hòa giữa màu sắc và chất liệu cao cấp cùng với các đường nét thiết kế sắc nét và tinh tế.',
        //         'Hỗ trợ vào xe thông minh',
        //         'Hỗ trợ vào xe thông minh',
        //         'Hỗ trợ vào xe thông min'
        //       ]
        //     },
        //     {
        //       tabHeader: 'Nội thất sang trộng3',
        //       title: 'Hài hòa và tinh tế trong từng chi tiết',
        //       description: 'Tay lái bọc da 3 chấu phẳng đáy, kết hợp với các chi tiết trang trí mạ bạc',
        //       image: 'https://assets.volkswagen.com/is/image/volkswagenag/2-1_Accessories-Gallery-4-4?Zml0PWNyb3AsMSZmbXQ9d2VicCZxbHQ9Nzkmd2lkPTY4MCZoZWk9MzQwJmFsaWduPTAuMDAsMC4wMCZiZmM9b2ZmJmU0MTE=',
        //       items: [
        //         'Nội thất phối hợp hài hòa giữa màu sắc và chất liệu cao cấp cùng với các đường nét thiết kế sắc nét và tinh tế.',
        //         'Hỗ trợ vào xe thông minh',
        //         'Hỗ trợ vào xe thông minh',
        //         'Hỗ trợ vào xe thông min'
        //       ]
        //     }
        //   ]
        // },
        // {
        //   component: "owner-accordion",
        //   isHasImage: false,
        //   title: 'Nội thất rộng rãi và tiện nghi',
        //   items: [
        //     {
        //       tabHeader: 'Nội thất sang trộng',
        //       title: 'Hài hòa và tinh tế trong từng chi tiết',
        //       description: 'Tay lái bọc da 3 chấu phẳng đáy, kết hợp với các chi tiết trang trí mạ bạc',
        //       items: [
        //         'Nội thất phối hợp hài hòa giữa màu sắc và chất liệu cao cấp cùng với các đường nét thiết kế sắc nét và tinh tế.',
        //         'Hỗ trợ vào xe thông minh',
        //         'Hỗ trợ vào xe thông minh',
        //         'Hỗ trợ vào xe thông min'
        //       ]
        //     },
        //     {
        //       tabHeader: 'Nội thất sang trộng2',
        //       title: 'Hài hòa và tinh tế trong từng chi tiết',
        //       description: 'Tay lái bọc da 3 chấu phẳng đáy, kết hợp với các chi tiết trang trí mạ bạc',
        //       items: [
        //         'Nội thất phối hợp hài hòa giữa màu sắc và chất liệu cao cấp cùng với các đường nét thiết kế sắc nét và tinh tế.',
        //         'Hỗ trợ vào xe thông minh',
        //         'Hỗ trợ vào xe thông minh',
        //         'Hỗ trợ vào xe thông min'
        //       ]
        //     },
        //     {
        //       tabHeader: 'Nội thất sang trộng3',
        //       title: 'Hài hòa và tinh tế trong từng chi tiết',
        //       description: 'Tay lái bọc da 3 chấu phẳng đáy, kết hợp với các chi tiết trang trí mạ bạc',
        //       items: [
        //         'Nội thất phối hợp hài hòa giữa màu sắc và chất liệu cao cấp cùng với các đường nét thiết kế sắc nét và tinh tế.',
        //         'Hỗ trợ vào xe thông minh',
        //         'Hỗ trợ vào xe thông minh',
        //         'Hỗ trợ vào xe thông min'
        //       ]
        //     }
        //   ]
        // },
        // {
        //   component: "owner-link-list",
        //   items: [
        //     {
        //       image: 'https://assets.volkswagen.com/is/image/volkswagenag/my_car-warning_lights-adblue-1_1-2500x2500?Zml0PWNyb3AsMSZmbXQ9anBnJnFsdD03OSZ3aWQ9MTkyMCZoZWk9MTA4MCZhbGlnbj0wLjAwLDAuMDAmYmZjPW9mZiZlNTg4',
        //       link: {
        //         name: 'Bổ xung  dung dịch AdBlue',
        //         value: '/owner/123'
        //       }
        //     },
        //     {
        //       image: 'https://assets.volkswagen.com/is/image/volkswagenag/my_car-warning_lights-adblue-1_1-2500x2500?Zml0PWNyb3AsMSZmbXQ9anBnJnFsdD03OSZ3aWQ9MTkyMCZoZWk9MTA4MCZhbGlnbj0wLjAwLDAuMDAmYmZjPW9mZiZlNTg4',
        //       link: {
        //         name: 'Bổ xung  dung dịch AdBlue',
        //         value: '/owner/123'
        //       }
        //     },
        //     {
        //       image: 'https://assets.volkswagen.com/is/image/volkswagenag/my_car-warning_lights-adblue-1_1-2500x2500?Zml0PWNyb3AsMSZmbXQ9anBnJnFsdD03OSZ3aWQ9MTkyMCZoZWk9MTA4MCZhbGlnbj0wLjAwLDAuMDAmYmZjPW9mZiZlNTg4',
        //       link: {
        //         name: 'Bổ xung  dung dịch AdBlue',
        //         value: '/owner/123'
        //       }
        //     },
        //     {
        //       image: 'https://assets.volkswagen.com/is/image/volkswagenag/my_car-warning_lights-bonnet-1_1-2500x2500?Zml0PWNyb3AsMSZmbXQ9anBnJnFsdD03OSZ3aWQ9MTkyMCZoZWk9MTA4MCZhbGlnbj0wLjAwLDAuMDAmYmZjPW9mZiZlNTg4',
        //       link: {
        //         name: 'Bổ xung  dung dịch AdBlue4',
        //         value: 'https://www.youtube.com/watch?v=9bZkp7q19f0&list=PL9dppUWWRkOeuqupkr7m2kVdF_9fqgvql&index=5'
        //       }
        //     }

        //   ]
        // },
        // {
        //   component: "owner-detail-vertical",
        //   total: 1,
        //   items: [
        //     {
        //       //image: 'https://assets.volkswagen.com/is/image/volkswagenag/16-9_Repair-Service?Zml0PWNyb3AsMSZmbXQ9d2VicCZxbHQ9Nzkmd2lkPTEyODAmaGVpPTcyMCZhbGlnbj0wLjAwLDAuMDAmYmZjPW9mZiY5ZjIy',
        //       title: 'Các hạng mục sửa chữa và dịch vụ dành cho xe của bạn',
        //       description: 'Sự quan tâm đúng đắn và dịch vụ thích hợp sẽ cho bạn cảm giác an toàn trên từng chặng đường. Tham khảo nhiều hơn về các dịch vụ phù hợp cho xe của bạn.',
        //       link: '/owner/123'
        //     }
        //   ]
        // },
        // {
        //   component: "owner-text-info",
        //   title: 'Công tắc khóa điện',
        //   items: [
        //     'Sự quan tâm đúng đắn và dịch vụ thích hợp sẽ cho bạn cảm giác an toàn trên từng chặng đường. Tham khảo nhiều hơn về các dịch vụ phù hợp cho xe của bạn.Sự quan tâm đúng đắn và dịch vụ thích hợp sẽ cho bạn cảm giác an toàn trên từng chặng đường. Tham khảo nhiều hơn về các dịch vụ phù hợp cho xe của bạn.',
        //     'Sự quan tâm đúng đắn và dịch vụ thích hợp sẽ cho bạn cảm giác an toàn trên từng chặng đường. Tham khảo nhiều hơn về các dịch vụ phù hợp cho xe của bạn.Sự quan tâm đúng đắn và dịch vụ thích hợp sẽ cho bạn cảm giác an toàn trên từng chặng đường. Tham khảo nhiều hơn về các dịch vụ phù hợp cho xe của bạn.'
        //   ]
        // },

    ]
    ngOnInit(): void {
    }
    //   data: any
}
