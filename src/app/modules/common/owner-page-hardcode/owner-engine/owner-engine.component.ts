import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CommonService } from "src/app/services/apis/common.service";
import { Meta, Title } from '@angular/platform-browser'
import { PAGE_META_DESCRIPTION, PAGE_TITLE } from 'src/app/constants/app-constants';

@Component({
    selector: 'app-owner-engine',
    templateUrl: './owner-engine.component.html',
    styleUrls: ['./owner-engine.component.scss']
})
export class OwnerEngineComponent implements OnInit {

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private commonService: CommonService,
        private meta: Meta,
        private titleService:Title,
    ) { this.titleService.setTitle(`${PAGE_TITLE.oilAndFluids} | Volkswagen Việt Nam`);  }


    display: boolean = false;
    showDialog(){
        this.display = true;
    }
    
    hideDialog() {
        this.display = false;
    }

    banner: string = "https://vw-image.s3.ap-southeast-1.amazonaws.com/video/ST_16-9_Loop_Engine-oil-and-fluids-0x540-2000k-3.mp4"
    mainTitle: string = "Dầu động cơ và các chất lưu chính hãng Volkswagen";
    title: string = "Dầu động cơ và các chất lưu chính hãng Volkswagen";
    title1: string = "Thời điểm thay nhớt? Hiển thị thời gian dịch vụ trên màn hính chính bảng điều khiển sẽ nhắc nhở bạn";
    title2: string = "Dung dịch làm mát chính hãng Volkswagen G13";
    title3: string = "Bảo vệ tối đa động cơ";
    title4: string = "Tiêu chuẩn riêng biệt cho hệ thống phanh của bạn";
    title5: string = "Dầu phanh chính hãng Volkswagen";

    horizontal: any = {
        title: 'Hướng dẫn dành cho chủ sở hữu sẽ đề cập thời điểm cần thay nhớt cho xe.',
        description: 'Có hai loại dịch vụ  thay nhớt động cơ:',
        image: 'https://vw-image.s3.ap-southeast-1.amazonaws.com/video/engine-2.webp',
          items: [
            {title:'Dịch vụ linh hoạt:', content:'Theo hiển thị khoảng thời gian dịch vụ trên bảng điều khiển, nhưng ít nhất sau hai năm hoặc 30.000 km'},
            {title:'Dịch vụ cố định:', content:'Cứ sau 15.000 km, nhưng ít nhất mỗi năm một lần'},
            
          ],
        // link: '/owner/bao-hanh'
    }
    horizontal1: any = {
        description: 'Dung dịch làm mát của chúng tôi hoạt động ngay cả ở nhiệt độ khắc nghiệt, ví dụ như ở nhiệt độ thấp đến -40 ° C. Công thức đổi mới giúp bảo vệ, chống lại vôi, ăn mòn, axit và có đặc tính chống đóng băng. Đồng thời thích hợp cho những chiếc xe có động cơ hoàn toàn bằng nhôm.',
        image: 'https://vw-image.s3.ap-southeast-1.amazonaws.com/video/engine-3.webp',
          items: [
            {title:'Trên cơ sở nguyên liệu tái tạo và tái chế:', content:'Tiết kiệm khoảng 35.000 tấn CO2 mỗi năm chỉ với lần đổ đầy đầu tiên, tính riêng xe Volkswagen.'},
            {title:'Bảo vệ động cơ, bảo vệ vật liệu:', content:'Được thiết kế riêng cho các vật liệu trong hệ thống làm mát. Bảo vệ động cơ chống lại nhiệt độ khắc nghiệt, ăn mòn, axit hóa và vôi.'},
            {title:'Thích hợp để trộn:', content:'Với các sản phẩm tiền nhiệm G11, G12 và G12 plus.'},
            
          ],
        // link: '/owner/bao-hanh'
    }
    horizontal2: any = {
        description: 'Bảo vệ phanh trong thời tiết cực lạnh và dưới áp lực cực lớn: Dầu phanh của chúng tôi được phát triển cùng với hệ thống phanh của bạn. Không chỉ là tiêu chuẩn thông thường -  chúng tôi thậm chí còn đặt ra tiêu chuẩn của riêng mình: Tiêu chuẩn VW, 501.14.',
        image: 'https://vw-image.s3.ap-southeast-1.amazonaws.com/video/engine-5.webp',
          items: [
            {title:'Bảo vệ vật liệu:', content:'Tránh ảnh hưởng đến các vòng đệm. Ngăn chặn rỉ sét của đường ống và xi lanh.'},
            {title:'Hiệu suất tuyệt vời trong điều kiện lạnh:', content:'Sẵn sàng hoạt động, ngay cả ở nhiệt độ thấp tới -40 ° C.'},
            {title:'Khoảng cách cho đến lần bảo dưỡng tiếp theo dài hơn', content:''},
            
          ],
        // link: '/owner/bao-hanh'
    }

    horizontal3: any = {
        description: 'Đèn cảnh báo bất ngờ hiện trên bảng điều khiển khiến bạn bối rối. Để giúp bạn xác định nhanh chóng vấn đề, chúng tôi cung cấp các hướng dẫn liên quan đến đèn cảnh báo',
        image: 'https://vw-image.s3.ap-southeast-1.amazonaws.com/video/engine-6.webp',
        title:"Ý nghĩa của đèn cảnh báo",
        link: '/owner/warning-light'
    }
        // {
        //   component: "owner-reference",
        //   title: 'Bạn muốn đặt hẹn dịch vụ?',
        //   description: 'Liên hệ đại lý ủy quền gần nhất và đặt lịch hẹn ngay',
        //   link: {
        //     name: 'Tìm đại lí ủy quyền của Volkswagen',
        //     value: '/owner/123'
        //   }
        // },
        // {
        //   component: "owner-detail-horizontal",
        //   title: 'Chúng tôi luôn mong muốn bạn có được những trải nghiệm tốt nhất phía sau tay lái mà chẳng cần lo nghĩ nhiều.',
        //   description: 'Volkswagen Việt Nam áp dụng chính sách bảo hành đối với:',
        //   image: 'https://assets.volkswagen.com/is/image/volkswagenag/Service-Workshop-Motifs-Campaign-Stay-Original---Dialogue-Reception-Running-gear-Service-mechanic---JPG?Zml0PWNyb3AsMSZmbXQ9d2VicCZxbHQ9Nzkmd2lkPTk2MCZoZWk9NjQwJmFsaWduPTAuMDAsMC4wMCZiZmM9b2ZmJjUxNjE=',

        // },
        // {
        //   component: "owner-list",
        //   title: 'Độ an toàn của bánh xe đã được kiểm chứng thông qua:',
        //   description: 'Độ an toàn của bánh xe đã được kiểm chứng thông qua:Độ an toàn của bánh xe đã được kiểm chứng thông qua:',
        //   items: [`Khả năng chịu lực tốt.`, `Mỗi bánh xe sẽ được kiểm tra độ mòn, độ vênh, cũng như cân bằng động.`, 'Mỗi bánh xe sẽ được kiểm tra độ mòn, độ vênh, cũng như cân bằng động.']
        // },
        // {
        //   component: "owner-list",
        //   title: 'Độ an toàn của bánh xe đã được kiểm chứng thông qua:',
        //   items: [`Khả năng chịu lực tốt.`, `Mỗi bánh xe sẽ được kiểm tra độ mòn, độ vênh, cũng như cân bằng động.`, 'Mỗi bánh xe sẽ được kiểm tra độ mòn, độ vênh, cũng như cân bằng động.']
        // },
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

    ngOnInit(): void {
      this.meta.updateTag({ name: 'description', content: PAGE_META_DESCRIPTION.oilAndFluids });
    }
    //   data: any
}
