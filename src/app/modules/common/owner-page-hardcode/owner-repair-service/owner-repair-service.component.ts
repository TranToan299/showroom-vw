import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CommonService } from "src/app/services/apis/common.service";
import { Meta, Title } from '@angular/platform-browser'
import { PAGE_META_DESCRIPTION, PAGE_TITLE } from 'src/app/constants/app-constants';

@Component({
    selector: 'app-owner-repair-service',
    templateUrl: './owner-repair-service.component.html',
    styleUrls: ['./owner-repair-service.component.scss']
})
export class OwnerRepairServiceComponent implements OnInit {

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private commonService: CommonService,
        private meta: Meta,
        private titleService:Title
    ) { this.titleService.setTitle(`${PAGE_TITLE.repairAndService} | Volkswagen Việt Nam`);  }
    content: any = [
        {
            component: "owner-banner",
            video: "https://vw-image.s3.ap-southeast-1.amazonaws.com/video/ST_16-9_Loop_Repair-and-service-0x540-2000k.mp4"
        },
        {
            component: "owner-main-title",
            title: "Sự hài lòng của khách hàng và chất lượng dịch vụ"
        },
        {
            component: "owner-title",
            title: "Với dịch vụ của chúng tôi, bạn có thể chinh phục mọi chặng đường mà chẳng cần lo nghĩ. Ngay khi tiếp nhận, xe sẽ được kiểm tra toàn diện và bạn sẽ là người quyết định các hạng mục nào cần được thực hiện"
        },
        {
            component: "owner-detail-vertical",
            total: 1,
            items: [
                {
                    image: 'https://assets.volkswagen.com/is/imaghttps://vw-image.s3.ap-southeast-1.amazonaws.com/video/service-1.webp',
                    title: 'Dịch vụ chính hãng',
                    description: 'Dịch vụ chính hãng của chúng tôi cung cấp các hạng mục dịch vụ được thiết kế dành riêng cho chiếc Volkswagen của bạn. Đối với việc sửa chữa, chúng tôi chỉ sử dụng phụ tùng chính hãng Volkswagen®: Chất lượng cao, an toàn và phù hợp. Tận hưởng chuyến hành trình của bạn một cách thoải mái, không lo âu.',
                    //   link: '/owner/123'
                }
            ]
        },
        {
            component: "owner-reference",
            title: 'Bạn muốn đặt hẹn dịch vụ?',
            description: 'Liên hệ đại lý ủy quền gần nhất và đặt lịch hẹn ngay',
            link: {
                name: 'Tìm đại lí ủy quyền của Volkswagen',
                value: 'https://www.vw.com.vn/vi/volkswagen-dealer-search.html'
            }
        },
        {
            component: "owner-title",
            title: "Thời gian bảo dưỡng và phạm vi kiểm tra"
        },
        {
            component: "owner-detail-horizontal",
            title: '“Đến lịch bảo dưỡng?”',
            description: 'Tùy thuộc vào thiết bị xe và điều kiện vận hành, việc kiểm tra xe sẽ là dịch vụ định kỳ hoặc dịch vụ linh hoạt. Cho dù bạn có một chiếc Polo, Golf, Passat, Tiguan hay một chiếc Volkswagen khác - tất cả các khía cạnh liên quan đến an toàn của chiếc xe sẽ được kiểm tra và bảo dưỡng bởi các chuyên gia tại xưởng dịch vụ. Chẩn đoán xe giúp phát hiện bất kỳ khiếm khuyết nào trong hệ thống điện tử của xe.',
            image: 'https://vw-image.s3.ap-southeast-1.amazonaws.com/video/service-2.webp',

        },
        // {
        //     component: "owner-detail-horizontal",
        //     title: 'Chúng tôi luôn mong muốn bạn có được những trải nghiệm tốt nhất phía sau tay lái mà chẳng cần lo nghĩ nhiều.',
        //     description: 'Volkswagen Việt Nam áp dụng chính sách bảo hành đối với:',
        //     image: 'https://assets.volkswagen.com/is/image/volkswagenag/Service-Workshop-Motifs-Campaign-Stay-Original---Dialogue-Reception-Running-gear-Service-mechanic---JPG?Zml0PWNyb3AsMSZmbXQ9d2VicCZxbHQ9Nzkmd2lkPTk2MCZoZWk9NjQwJmFsaWduPTAuMDAsMC4wMCZiZmM9b2ZmJjUxNjE=',
        //     items: [
        //         'Xe mới do Volkswagen Việt Nam phân phối',
        //         'Phụ tùng chính hãng do Volkswagen Việt Nam phân phối',
        //         'Phụ kiện chính hãng do Volkswagen Việt Nam phân phối'
        //     ],
        //     link: '/owner/123'
        // },
        // {
        //     component: "owner-detail-vertical",
        //     total: 1,
        //     items: [
        //         {
        //             image: 'https://assets.volkswagen.com/is/image/volkswagenag/16-9_Wheels-tyres-4?Zml0PWNyb3AsMSZmbXQ9d2VicCZxbHQ9Nzkmd2lkPTEyODAmaGVpPTcyMCZhbGlnbj0wLjAwLDAuMDAmYmZjPW9mZiY5ZjIy',
        //             title: 'Mâm xe và lốp',
        //             description: 'Bộ phận quan trọng của xe, tiếp xúc trực tiếp với mặt đường: tìm thông tin về lốp xe ngay tại đây',
        //             link: '/owner/123'
        //         }
        //     ]
        // },
        // {
        //     component: "owner-detail-vertical",
        //     total: 2,
        //     items: [
        //         {
        //             image: 'https://assets.volkswagen.com/is/image/volkswagenag/16-9_Parts-4?Zml0PWNyb3AsMSZmbXQ9d2VicCZxbHQ9Nzkmd2lkPTk2MCZoZWk9NTQwJmFsaWduPTAuMDAsMC4wMCZiZmM9b2ZmJjRhNzg=',
        //             title: 'Phụ tùng chính hãng – 100% từ Volkswagen',
        //             description: 'Sự lựa chọn hoàn hảo cho chiếc xe của bạn: Với phụ tùng chính hãng của chúng tôi, giá trị và an toàn của xe luôn được đảm bảo. Tham khảo thêm các sản phẩm của chúng tôi',
        //             link: '/owner/123'
        //         },
        //         {
        //             image: 'https://assets.volkswagen.com/is/image/volkswagenag/16-9_Engine-oil-fluids-4?Zml0PWNyb3AsMSZmbXQ9d2VicCZxbHQ9Nzkmd2lkPTk2MCZoZWk9NTQwJmFsaWduPTAuMDAsMC4wMCZiZmM9b2ZmJjRhNzg=',
        //             title: 'Dầu nhớt động cơ và các chất lưu giúp bảo vệ và bổ sung cho hệ thống',
        //             description: 'Sử dụng dầu chất lượng sẽ giúp xe vận hành tốt hơn: Với các chất lưu chính hãng của chúng tôi, như keo AdBlue®, nước rửa kính, dung dịch làm mát, dầu phanh và dầu động cơ, chiếc Volkswagen của bạn sẽ luôn vận hành tốt',
        //             link: '/owner/123'
        //         }
        //     ]
        // },
        // {
        //     component: "owner-photo-gallery",
        //     title: 'Phụ kiện mang đậm tính cá nhân hóa cũng như chính những chiếc Volkswagen của bạn',
        //     description: 'Tra cứu thông tin phụ kiện chính hãng của chúng tôi  - cung cấp mọi thứ bạn muốn',
        //     link: '/owner/123',
        //     total: 5,
        //     items: [
        //         'https://assets.volkswagen.com/is/image/volkswagenag/2-1_Accessories-Gallery-4-4?Zml0PWNyb3AsMSZmbXQ9d2VicCZxbHQ9Nzkmd2lkPTY4MCZoZWk9MzQwJmFsaWduPTAuMDAsMC4wMCZiZmM9b2ZmJmU0MTE=',
        //         'https://assets.volkswagen.com/is/image/volkswagenag/2-1_Accessories-Gallery-2-4?Zml0PWNyb3AsMSZmbXQ9d2VicCZxbHQ9Nzkmd2lkPTEyODAmaGVpPTY0MCZhbGlnbj0wLjAwLDAuMDAmYmZjPW9mZiZlNjdm',
        //         'https://assets.volkswagen.com/is/image/volkswagenag/4-3_Accessories-Gallery-3-4?Zml0PWNyb3AsMSZmbXQ9d2VicCZxbHQ9Nzkmd2lkPTY4MCZoZWk9NTEwJmFsaWduPTAuMDAsMC4wMCZiZmM9b2ZmJjdjN2E=',
        //         'https://assets.volkswagen.com/is/image/volkswagenag/16-9_Accessories-Gallery-1-4?Zml0PWNyb3AsMSZmbXQ9d2VicCZxbHQ9Nzkmd2lkPTUwMCZoZWk9MjgxJmFsaWduPTAuMDAsMC4wMCZiZmM9b2ZmJjMwZjQ=',
        //         'https://assets.volkswagen.com/is/image/volkswagenag/2-1_Accessories-Gallery-4-4?Zml0PWNyb3AsMSZmbXQ9d2VicCZxbHQ9Nzkmd2lkPTY4MCZoZWk9MzQwJmFsaWduPTAuMDAsMC4wMCZiZmM9b2ZmJmU0MTE='
        //     ]
        // },
        // {
        //     component: "owner-photo-gallery",
        //     title: 'Phụ kiện mang đậm tính cá nhân hóa cũng như chính những chiếc Volkswagen của bạn',
        //     description: 'Tra cứu thông tin phụ kiện chính hãng của chúng tôi  - cung cấp mọi thứ bạn muốn',
        //     link: '/owner/123',
        //     total: 4,
        //     items: [
        //         'https://assets.volkswagen.com/is/image/volkswagenag/2-1_Accessories-Gallery-2-4?Zml0PWNyb3AsMSZmbXQ9d2VicCZxbHQ9Nzkmd2lkPTEyODAmaGVpPTY0MCZhbGlnbj0wLjAwLDAuMDAmYmZjPW9mZiZlNjdm',
        //         'https://assets.volkswagen.com/is/image/volkswagenag/4-3_Accessories-Gallery-3-4?Zml0PWNyb3AsMSZmbXQ9d2VicCZxbHQ9Nzkmd2lkPTY4MCZoZWk9NTEwJmFsaWduPTAuMDAsMC4wMCZiZmM9b2ZmJjdjN2E=',
        //         'https://assets.volkswagen.com/is/image/volkswagenag/16-9_Accessories-Gallery-1-4?Zml0PWNyb3AsMSZmbXQ9d2VicCZxbHQ9Nzkmd2lkPTUwMCZoZWk9MjgxJmFsaWduPTAuMDAsMC4wMCZiZmM9b2ZmJjMwZjQ=',
        //         'https://assets.volkswagen.com/is/image/volkswagenag/2-1_Accessories-Gallery-4-4?Zml0PWNyb3AsMSZmbXQ9d2VicCZxbHQ9Nzkmd2lkPTY4MCZoZWk9MzQwJmFsaWduPTAuMDAsMC4wMCZiZmM9b2ZmJmU0MTE='
        //     ]
        // },
        // {
        //     component: "owner-photo-gallery",
        //     title: 'Phụ kiện mang đậm tính cá nhân hóa cũng như chính những chiếc Volkswagen của bạn',
        //     description: 'Tra cứu thông tin phụ kiện chính hãng của chúng tôi  - cung cấp mọi thứ bạn muốn',
        //     link: '/owner/123',
        //     total: 3,
        //     items: [
        //         'https://assets.volkswagen.com/is/image/volkswagenag/2-1_Accessories-Gallery-2-4?Zml0PWNyb3AsMSZmbXQ9d2VicCZxbHQ9Nzkmd2lkPTEyODAmaGVpPTY0MCZhbGlnbj0wLjAwLDAuMDAmYmZjPW9mZiZlNjdm',
        //         'https://assets.volkswagen.com/is/image/volkswagenag/4-3_Accessories-Gallery-3-4?Zml0PWNyb3AsMSZmbXQ9d2VicCZxbHQ9Nzkmd2lkPTY4MCZoZWk9NTEwJmFsaWduPTAuMDAsMC4wMCZiZmM9b2ZmJjdjN2E=',
        //         'https://assets.volkswagen.com/is/image/volkswagenag/16-9_Accessories-Gallery-1-4?Zml0PWNyb3AsMSZmbXQ9d2VicCZxbHQ9Nzkmd2lkPTUwMCZoZWk9MjgxJmFsaWduPTAuMDAsMC4wMCZiZmM9b2ZmJjMwZjQ=',
        //     ]
        // },
        // {
        //     component: "owner-photo-gallery",
        //     title: 'Phụ kiện mang đậm tính cá nhân hóa cũng như chính những chiếc Volkswagen của bạn',
        //     description: 'Tra cứu thông tin phụ kiện chính hãng của chúng tôi  - cung cấp mọi thứ bạn muốn',
        //     link: '/owner/123',
        //     total: 2,
        //     items: [
        //         'https://assets.volkswagen.com/is/image/volkswagenag/2-1_Accessories-Gallery-2-4?Zml0PWNyb3AsMSZmbXQ9d2VicCZxbHQ9Nzkmd2lkPTEyODAmaGVpPTY0MCZhbGlnbj0wLjAwLDAuMDAmYmZjPW9mZiZlNjdm',
        //         'https://assets.volkswagen.com/is/image/volkswagenag/4-3_Accessories-Gallery-3-4?Zml0PWNyb3AsMSZmbXQ9d2VicCZxbHQ9Nzkmd2lkPTY4MCZoZWk9NTEwJmFsaWduPTAuMDAsMC4wMCZiZmM9b2ZmJjdjN2E=',
        //         'https://assets.volkswagen.com/is/image/volkswagenag/16-9_Accessories-Gallery-1-4?Zml0PWNyb3AsMSZmbXQ9d2VicCZxbHQ9Nzkmd2lkPTUwMCZoZWk9MjgxJmFsaWduPTAuMDAsMC4wMCZiZmM9b2ZmJjMwZjQ=',

        //     ]
        // },
        // {
        //     component: "owner-photo-gallery",
        //     title: 'Phụ kiện mang đậm tính cá nhân hóa cũng như chính những chiếc Volkswagen của bạn',
        //     description: 'Tra cứu thông tin phụ kiện chính hãng của chúng tôi  - cung cấp mọi thứ bạn muốn',
        //     link: '/owner/123',
        //     total: 1,
        //     items: [
        //         'https://assets.volkswagen.com/is/image/volkswagenag/2-1_Accessories-Gallery-2-4?Zml0PWNyb3AsMSZmbXQ9d2VicCZxbHQ9Nzkmd2lkPTEyODAmaGVpPTY0MCZhbGlnbj0wLjAwLDAuMDAmYmZjPW9mZiZlNjdm',
        //         'https://assets.volkswagen.com/is/image/volkswagenag/4-3_Accessories-Gallery-3-4?Zml0PWNyb3AsMSZmbXQ9d2VicCZxbHQ9Nzkmd2lkPTY4MCZoZWk9NTEwJmFsaWduPTAuMDAsMC4wMCZiZmM9b2ZmJjdjN2E=',
        //         'https://assets.volkswagen.com/is/image/volkswagenag/16-9_Accessories-Gallery-1-4?Zml0PWNyb3AsMSZmbXQ9d2VicCZxbHQ9Nzkmd2lkPTUwMCZoZWk9MjgxJmFsaWduPTAuMDAsMC4wMCZiZmM9b2ZmJjMwZjQ=',

        //     ]
        // },
        // {
        //     component: "owner-detail-vertical",
        //     total: 1,
        //     items: [
        //         {
        //             image: 'https://assets.volkswagen.com/is/image/volkswagenag/16-9_Useful-information-4?Zml0PWNyb3AsMSZmbXQ9d2VicCZxbHQ9Nzkmd2lkPTEyODAmaGVpPTcyMCZhbGlnbj0wLjAwLDAuMDAmYmZjPW9mZiY5ZjIy',
        //             title: 'Thông tin hữu ích dành cho chiếc Volkswagen của bạn',
        //             description: '',
        //             link: '/owner/123'
        //         }
        //     ]
        // },


        // {
        //     component: "owner-list",
        //     title: 'Độ an toàn của bánh xe đã được kiểm chứng thông qua:',
        //     description: 'Độ an toàn của bánh xe đã được kiểm chứng thông qua:Độ an toàn của bánh xe đã được kiểm chứng thông qua:',
        //     items: [`Khả năng chịu lực tốt.`, `Mỗi bánh xe sẽ được kiểm tra độ mòn, độ vênh, cũng như cân bằng động.`, 'Mỗi bánh xe sẽ được kiểm tra độ mòn, độ vênh, cũng như cân bằng động.']
        // },
        // {
        //     component: "owner-list",
        //     title: 'Độ an toàn của bánh xe đã được kiểm chứng thông qua:',
        //     items: [`Khả năng chịu lực tốt.`, `Mỗi bánh xe sẽ được kiểm tra độ mòn, độ vênh, cũng như cân bằng động.`, 'Mỗi bánh xe sẽ được kiểm tra độ mòn, độ vênh, cũng như cân bằng động.']
        // },
        // {
        //     component: "owner-main-title",
        //     title: "Mọi điều bạn cần biết về chiếc xe",
        //     description: 'Dù cho mùa hè, mùa đông hay bất kỳ thời tiết nào.'
        // },
        // {
        //     component: "owner-p",
        //     content: 'Bánh xe của chúng tôi được thiết kế với đặc trưng riêng, mâm và lốp xe hoàn toàn tương thích với xe cả về mặt trực quan và kỹ thuật. Chúng tôi hợp tác với các nhà sản xuất lốp xe hàng đầu thế giới để luôn đảm bảo chất lượng mâm và bánh xe hoàn hảo.Bánh xe của chúng tôi được thiết kế với đặc trưng riêng, mâm và lốp xe hoàn toàn tương thích với xe cả về mặt trực quan và kỹ thuật. Chúng tôi hợp tác với các nhà sản xuất lốp xe hàng đầu thế giới để luôn đảm bảo chất lượng mâm và bánh xe hoàn hảo.'
        // },
        // {
        //     component: "owner-image",
        //     title: 'Bánh xe của chúng tôi',
        //     image: 'https://assets.volkswagen.com/is/image/volkswagenag/4-3_Silencer-3?Zml0PWNyb3AsMSZmbXQ9d2VicCZxbHQ9Nzkmd2lkPTk2MCZoZWk9NzIwJmFsaWduPTAuMDAsMC4wMCZiZmM9b2ZmJjBhMDQ='
        // },
        // {
        //     component: "owner-accordion",
        //     isHasImage: true,
        //     title: 'Nội thất rộng rãi và tiện nghi',
        //     items: [
        //         {
        //             tabHeader: 'Nội thất sang trộng',
        //             title: 'Hài hòa và tinh tế trong từng chi tiết',
        //             description: 'Tay lái bọc da 3 chấu phẳng đáy, kết hợp với các chi tiết trang trí mạ bạc',
        //             image: 'https://assets.volkswagen.com/is/image/volkswagenag/4-3_Accessories-Gallery-3-4?Zml0PWNyb3AsMSZmbXQ9d2VicCZxbHQ9Nzkmd2lkPTY4MCZoZWk9NTEwJmFsaWduPTAuMDAsMC4wMCZiZmM9b2ZmJjdjN2E=',
        //             items: [
        //                 'Nội thất phối hợp hài hòa giữa màu sắc và chất liệu cao cấp cùng với các đường nét thiết kế sắc nét và tinh tế.',
        //                 'Hỗ trợ vào xe thông minh',
        //                 'Hỗ trợ vào xe thông minh',
        //                 'Hỗ trợ vào xe thông min'
        //             ]
        //         },
        //         {
        //             tabHeader: 'Nội thất sang trộng2',
        //             title: 'Hài hòa và tinh tế trong từng chi tiết',
        //             description: 'Tay lái bọc da 3 chấu phẳng đáy, kết hợp với các chi tiết trang trí mạ bạc',
        //             image: 'https://assets.volkswagen.com/is/image/volkswagenag/2-1_Accessories-Gallery-4-4?Zml0PWNyb3AsMSZmbXQ9d2VicCZxbHQ9Nzkmd2lkPTY4MCZoZWk9MzQwJmFsaWduPTAuMDAsMC4wMCZiZmM9b2ZmJmU0MTE=',
        //             items: [
        //                 'Nội thất phối hợp hài hòa giữa màu sắc và chất liệu cao cấp cùng với các đường nét thiết kế sắc nét và tinh tế.',
        //                 'Hỗ trợ vào xe thông minh',
        //                 'Hỗ trợ vào xe thông minh',
        //                 'Hỗ trợ vào xe thông min'
        //             ]
        //         },
        //         {
        //             tabHeader: 'Nội thất sang trộng3',
        //             title: 'Hài hòa và tinh tế trong từng chi tiết',
        //             description: 'Tay lái bọc da 3 chấu phẳng đáy, kết hợp với các chi tiết trang trí mạ bạc',
        //             image: 'https://assets.volkswagen.com/is/image/volkswagenag/2-1_Accessories-Gallery-4-4?Zml0PWNyb3AsMSZmbXQ9d2VicCZxbHQ9Nzkmd2lkPTY4MCZoZWk9MzQwJmFsaWduPTAuMDAsMC4wMCZiZmM9b2ZmJmU0MTE=',
        //             items: [
        //                 'Nội thất phối hợp hài hòa giữa màu sắc và chất liệu cao cấp cùng với các đường nét thiết kế sắc nét và tinh tế.',
        //                 'Hỗ trợ vào xe thông minh',
        //                 'Hỗ trợ vào xe thông minh',
        //                 'Hỗ trợ vào xe thông min'
        //             ]
        //         }
        //     ]
        // },
        // {
        //     component: "owner-accordion",
        //     isHasImage: false,
        //     title: 'Nội thất rộng rãi và tiện nghi',
        //     items: [
        //         {
        //             tabHeader: 'Nội thất sang trộng',
        //             title: 'Hài hòa và tinh tế trong từng chi tiết',
        //             description: 'Tay lái bọc da 3 chấu phẳng đáy, kết hợp với các chi tiết trang trí mạ bạc',
        //             items: [
        //                 'Nội thất phối hợp hài hòa giữa màu sắc và chất liệu cao cấp cùng với các đường nét thiết kế sắc nét và tinh tế.',
        //                 'Hỗ trợ vào xe thông minh',
        //                 'Hỗ trợ vào xe thông minh',
        //                 'Hỗ trợ vào xe thông min'
        //             ]
        //         },
        //         {
        //             tabHeader: 'Nội thất sang trộng2',
        //             title: 'Hài hòa và tinh tế trong từng chi tiết',
        //             description: 'Tay lái bọc da 3 chấu phẳng đáy, kết hợp với các chi tiết trang trí mạ bạc',
        //             items: [
        //                 'Nội thất phối hợp hài hòa giữa màu sắc và chất liệu cao cấp cùng với các đường nét thiết kế sắc nét và tinh tế.',
        //                 'Hỗ trợ vào xe thông minh',
        //                 'Hỗ trợ vào xe thông minh',
        //                 'Hỗ trợ vào xe thông min'
        //             ]
        //         },
        //         {
        //             tabHeader: 'Nội thất sang trộng3',
        //             title: 'Hài hòa và tinh tế trong từng chi tiết',
        //             description: 'Tay lái bọc da 3 chấu phẳng đáy, kết hợp với các chi tiết trang trí mạ bạc',
        //             items: [
        //                 'Nội thất phối hợp hài hòa giữa màu sắc và chất liệu cao cấp cùng với các đường nét thiết kế sắc nét và tinh tế.',
        //                 'Hỗ trợ vào xe thông minh',
        //                 'Hỗ trợ vào xe thông minh',
        //                 'Hỗ trợ vào xe thông min'
        //             ]
        //         }
        //     ]
        // },
        // {
        //     component: "owner-link-list",
        //     items: [
        //         {
        //             image: 'https://assets.volkswagen.com/is/image/volkswagenag/my_car-warning_lights-adblue-1_1-2500x2500?Zml0PWNyb3AsMSZmbXQ9anBnJnFsdD03OSZ3aWQ9MTkyMCZoZWk9MTA4MCZhbGlnbj0wLjAwLDAuMDAmYmZjPW9mZiZlNTg4',
        //             link: {
        //                 name: 'Bổ xung  dung dịch AdBlue',
        //                 value: '/owner/123'
        //             }
        //         },
        //         {
        //             image: 'https://assets.volkswagen.com/is/image/volkswagenag/my_car-warning_lights-adblue-1_1-2500x2500?Zml0PWNyb3AsMSZmbXQ9anBnJnFsdD03OSZ3aWQ9MTkyMCZoZWk9MTA4MCZhbGlnbj0wLjAwLDAuMDAmYmZjPW9mZiZlNTg4',
        //             link: {
        //                 name: 'Bổ xung  dung dịch AdBlue',
        //                 value: '/owner/123'
        //             }
        //         },
        //         {
        //             image: 'https://assets.volkswagen.com/is/image/volkswagenag/my_car-warning_lights-adblue-1_1-2500x2500?Zml0PWNyb3AsMSZmbXQ9anBnJnFsdD03OSZ3aWQ9MTkyMCZoZWk9MTA4MCZhbGlnbj0wLjAwLDAuMDAmYmZjPW9mZiZlNTg4',
        //             link: {
        //                 name: 'Bổ xung  dung dịch AdBlue',
        //                 value: '/owner/123'
        //             }
        //         },
        //         {
        //             image: 'https://assets.volkswagen.com/is/image/volkswagenag/my_car-warning_lights-bonnet-1_1-2500x2500?Zml0PWNyb3AsMSZmbXQ9anBnJnFsdD03OSZ3aWQ9MTkyMCZoZWk9MTA4MCZhbGlnbj0wLjAwLDAuMDAmYmZjPW9mZiZlNTg4',
        //             link: {
        //                 name: 'Bổ xung  dung dịch AdBlue4',
        //                 value: 'https://www.youtube.com/watch?v=9bZkp7q19f0&list=PL9dppUWWRkOeuqupkr7m2kVdF_9fqgvql&index=5'
        //             }
        //         }

        //     ]
        // },
        // {
        //     component: "owner-detail-vertical",
        //     total: 1,
        //     items: [
        //         {
        //             //image: 'https://assets.volkswagen.com/is/image/volkswagenag/16-9_Repair-Service?Zml0PWNyb3AsMSZmbXQ9d2VicCZxbHQ9Nzkmd2lkPTEyODAmaGVpPTcyMCZhbGlnbj0wLjAwLDAuMDAmYmZjPW9mZiY5ZjIy',
        //             title: 'Các hạng mục sửa chữa và dịch vụ dành cho xe của bạn',
        //             description: 'Sự quan tâm đúng đắn và dịch vụ thích hợp sẽ cho bạn cảm giác an toàn trên từng chặng đường. Tham khảo nhiều hơn về các dịch vụ phù hợp cho xe của bạn.',
        //             link: '/owner/123'
        //         }
        //     ]
        // },
        // {
        //     component: "owner-text-info",
        //     title: 'Công tắc khóa điện',
        //     items: [
        //         'Sự quan tâm đúng đắn và dịch vụ thích hợp sẽ cho bạn cảm giác an toàn trên từng chặng đường. Tham khảo nhiều hơn về các dịch vụ phù hợp cho xe của bạn.Sự quan tâm đúng đắn và dịch vụ thích hợp sẽ cho bạn cảm giác an toàn trên từng chặng đường. Tham khảo nhiều hơn về các dịch vụ phù hợp cho xe của bạn.',
        //         'Sự quan tâm đúng đắn và dịch vụ thích hợp sẽ cho bạn cảm giác an toàn trên từng chặng đường. Tham khảo nhiều hơn về các dịch vụ phù hợp cho xe của bạn.Sự quan tâm đúng đắn và dịch vụ thích hợp sẽ cho bạn cảm giác an toàn trên từng chặng đường. Tham khảo nhiều hơn về các dịch vụ phù hợp cho xe của bạn.'
        //     ]
        // },

    ]
    ngOnInit(): void {
        // alert('Please')
        this.meta.updateTag({ name: 'description', content: PAGE_META_DESCRIPTION.repairAndService });
    }
    //   data: any
}
