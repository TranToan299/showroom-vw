import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CommonService } from "src/app/services/apis/common.service";
import { Meta, Title } from '@angular/platform-browser'
import { PAGE_META_DESCRIPTION, PAGE_TITLE } from 'src/app/constants/app-constants';

@Component({
    selector: 'app-owner-part',
    templateUrl: './owner-part.component.html',
    styleUrls: ['./owner-part.component.scss']
})
export class OwnerPartComponent implements OnInit {

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private commonService: CommonService,
        private titleService:Title,
        private meta: Meta
    ) { this.titleService.setTitle(`${PAGE_TITLE.accessories} | Volkswagen Việt Nam`);  }
    content: any = [
        {
            component: "owner-banner",
            video: "https://vw-image.s3.ap-southeast-1.amazonaws.com/video/ST_16-9_Loop_Parts-0x540-2000k.mp4"
        },
        {
            component: "owner-main-title",
            title: "Các phụ tùng chính hãng của Volkswagen luôn là lựa chọn đúng"
        },
        {
            component: "owner-title",
            title: "Chất lượng cao và phù hợp: Với phụ tùng chính hãng của Volkswagen, xe của bạn luôn 100% nguyên bản, ngay cả sau khi sửa chữa hoặc bảo dưỡng"
        },
        {
            component: "owner-detail-vertical",
            total: 1,
            items: [
                {
                    image: 'https://vw-image.s3.ap-southeast-1.amazonaws.com/video/part-1.webp',
                    title: 'Phụ tùng chính hãng',
                    description: 'Bạn cần phụ tùng thay thế? Hãy tham khảo các phụ tùng chính hãng chất lượng cao của chúng tôi. Phụ tùng được thiết kế đặc biệt dành cho chiếc Volkswagen của bạn, từ ắc quy chính hãng cho đến má phanh, từ bu – gi  cho đến bộ giảm thanh.',
                    //link: '/owner/dich-vu'
                }
            ]
        },
        {
            component: "owner-reference",
            title: 'Bạn cần phụ tùng thay thế?',
            description: 'Hãy liên hệ để đặt hẹn dịch vụ tại các đại lý ủy quyền của chúng tôi',
            link: {
                name: 'Tìm đại lí ủy quyền của Volkswagen',
                value: 'https://www.vw.com.vn/vi/volkswagen-dealer-search.html'
            }
        },
        {
            component: "owner-list",
            title: 'Kính chắn gió, hệ thống đèn và tầm quan sát',
            description: 'Chúng tôi đảm bảo rằng bạn sẽ có một góc nhìn tốt. Khi lái xe trên đường, việc nhìn thấy rõ mọi thứ và được người khác nhìn thấy là vô cùng quan trọng. Với kính chắn gió, lưỡi gạt mưa, hệ thống đèn chiếu sáng chính hãng, bạn sẽ nhìn thấy mọi thứ rõ ràng.',
            items: [
                { title: "Kính chắn gió:", content: `Bảo vệ bạn từ tác động của gió, mưa, ánh nắng cũng như tiếng ồn, được làm từ vật liệu đảm bảo an toàn và hỗ trợ cho hoạt động của túi khí.` },
                { title: "Lưỡi gạt mưa:", content: `Có công dụng làm sạch kính, giúp bạn nhìn rõ ràng mọi thứ trên đường kể cả khi lái xe ở tốc độ cao. Được thiết kế khí động học phù hợp hoàn hảo với chiếc Volkswagen của bạn và được làm từ vật liệu chất lượng cao ít bị hao mòn hơn lên đến 30%.` },
                { title: "Hệ thống đèn chiếu sáng:", content: `Độ sáng cao kèm hiệu ứng chống chói mắt, với mức tiêu thụ năng lượng thấp đem lại cho bạn góc nhìn tổng quan tốt trên đường cũng như giúp những người tham gia giao thông khác nhìn thấy xe của bạn.` },
            ]
        },
        {
            component: "owner-image",
            //   title: 'Bánh xe của chúng tôi',
            image: 'https://vw-image.s3.ap-southeast-1.amazonaws.com/video/part-2.webp'
        },
        {
            component: "owner-title",
            title: "Ắc quy là nguyên nhân chính gây ra tình trạng chết máy ở xe hơi"
        },
        {
            component: "owner-detail-horizontal",
            title: 'Sử dụng đúng ắc quy',
            description: 'Chiếc Volkswagen của bạn cần điều gì để sẵn sàng lăn bánh? Chính xác - đó là năng lượng điện được cung cấp từ ắc quy. Với các sản phẩm của chúng tôi, bạn sẽ nhận được lợi ích cả về chất lượng cũng như tính năng.',
            subTitle: 'Lợi ích',
            image: 'https://vw-image.s3.ap-southeast-1.amazonaws.com/video/part-3.webp',
            items: [
                { title: "Tương thích tuyệt đối:", content: `Cung cấp chính xác lượng năng lượng điện mà chiếc xe Volkswagen của bạn cần.` },
                { title: "Nhiều năng lượng hơn:", content: `Dựa vào hàm lượng chì trên mức trung bình và vật liệu chất lượng cao.` },
            ],
            // link: '/owner/bao-hanh'
        },
        {
            component: "owner-split-horizontal",
            image1: {
                component: "owner-image",
                image: "https://vw-image.s3.ap-southeast-1.amazonaws.com/video/part-4.webp",
                //title:""
            },
            image2: {
                component: "owner-image",
                image: "https://vw-image.s3.ap-southeast-1.amazonaws.com/video/part-5.webp",
                //title:""
            },
            title1: {
                component: "owner-title",
                title: "Không làm bạn thất vọng, ngay cả trong những tình huống nguy hiểm và bất ngờ"
            },
            title2: {
                component: "owner-title",
                title: "Động cơ là bộ phận cốt lõi của xe"
            },
            list1: {
                component: "owner-list",
                title: 'Má phanh chính hãng Volkswagen',
                description: 'Má phanh Volkswagen sẽ tương tác với hệ thống phanh trên xe của bạn - với chất lượng vượt trên cả Luật tiêu chuẩn phanh hiện hành, ECE-R90. Ưu điểm: tuổi thọ sử dụng dài hơn và cảm giác phanh thoải mái hơn với mức độ mòn tối thiểu.',
                subTitle: 'Lợi ích',
                //image: 'https://assets.volkswagen.com/is/image/volkswagenag/16-9_Battery-3?Zml0PWNyb3AsMSZmbXQ9d2VicCZxbHQ9Nzkmd2lkPTgwMCZoZWk9NDUwJmFsaWduPTAuMDAsMC4wMCZiZmM9b2ZmJmZkMTc=',
                items: [
                    { title: "An toàn hơn:", content: `Dựa vào khoảng cách phanh ngắn hơn.` },
                    { title: "Tương thích hoàn hảo:", content: `Được phát triển cho chiếc xe Volkswagen của bạn và phù hợp với trọng lượng, công suất và tốc độ tối đa của chiếc xe.` },
                    { title: "Độ bền cao hơn:", content: `Được khẳng định từ các bài thử nghiệm thực tế phức tạp dưới nhiều điều kiện thời tiết khác nhau và có tới 1000 lần ép phanh liên tục trên bệ thử nghiệm.` },
                ],
            },
            list2: {
                component: "owner-list",
                title: 'Động cơ chính hãng',
                description: 'Tránh tổn hại động cơ gây ra bởi các phụ tùng, chất lỏng do bên thứ ba cung cấp, chỉ sử dụng khi đã thử nghiệm chất lượng. Cho dù là bugi, dây đai răng, phụ gia bôi trơn hoặc chất làm mát - động cơ và hộp số sẽ luôn hoạt động tốt khi sử dụng Phụ tùng chính hãng. Dây đai răng được làm bằng vật liệu cứng và bugi đánh lửa mạnh - vì vậy, chiếc Volkswagen của bạn thậm chí còn vận hành trơn tru hơn.',
                items: [
                    { title: "Dây đai rang chắc chắn và ổn định về kích thước:", content: `Nhờ sợi thủy tinh, sợi tổng hộp và lớp phủ chống mài mòn. Ngay cả ở nhiệt độ cực cao và di chuyển tới 360,000 km` },
                    { title: "Bugi đảm bảo đánh lửa tốt và mức tiêu thụ nhiên liệu thấp hơn :", content: `Nhờ hoạt động trơn tru và vị trí chính xác của tia lửa trong buồng đốt.` },
                    { title: "Tương thích hoàn hảo:", content: `Phụ tùng chính hãng của chúng tôi được nghiên cứu phát triển dành riêng cho động cơ Volkswagen` },
                ],
                subTitle: 'Lợi ích'
            }
        },
        {
            component: "owner-photo-gallery",
            title: 'Phụ kiện mang đậm tính cá nhân hóa cũng như chính những chiếc Volkswagen của bạn',
            description: 'Tra cứu thông tin phụ kiện chính hãng của chúng tôi  - cung cấp mọi thứ bạn muốn',
            link: '/owner/phu-kien',
            total: 3,
            items: [
                'https://vw-image.s3.ap-southeast-1.amazonaws.com/video/part-6.webp',
                'https://vw-image.s3.ap-southeast-1.amazonaws.com/video/part-7.webp',
                'https://vw-image.s3.ap-southeast-1.amazonaws.com/video/part-8.webp',
            ]
        },
        {
            component: "owner-title",
            title: "Các loại lọc của chúng tôi bảo vệ bạn khỏi bụi bẩn, các chất độc hại và gây ô nhiễm."
        },
        {
            component: "owner-detail-horizontal",
            title: 'Bảo đảm an toàn và sức khỏe',
            description: 'Cho dù đó là không khí, chất gây dị ứng hoặc phấn hoa: Sản phẩm của chúng tôi có khả năng lọc các chất độc hại và bụi bẩn, ngay cả trong những điều kiện khó khăn nhất.',
            subTitle: 'Lợi ích',
            image: 'https://vw-image.s3.ap-southeast-1.amazonaws.com/video/part-9.webp',
            items: [
                { title: "Không khí trong lành:", content: `Lọc máy lạnh của Volkswagen bảo vệ bạn khỏi bụi, phấn hoa, chất gây dị ứng, aerosole và một phần chống lại ozone.` },
                { title: "Hiệu suất hoàn hảo:", content: `Lọc động cơ hỗ trợ phun chính xác hỗn hợp nhiên liệu / không khí – điều tuyệt đối cần thiết để đốt cháy hiệu quả, đảm bảo hiệu suất động cơ tối đa và mức tiêu thụ nhiên liệu thấp.` },
                { title: "Đảm bảo sức khỏe:", content: `Bộ lọc hấp thụ một số chất gây dị ứng và cản trở sự phát triển của nấm mốc và vi khuẩn.` },
            ]
            // link: '/owner/bao-hanh'
        },
        {
            component: "owner-title",
            title: "Tăng sức mạnh đông cơ, giảm tiêu hao nhiên liệu"
        },
        {
            component: "owner-detail-horizontal",
            title: 'Lọc dầu chính hãng',
            description: 'Lọc dầu có tác dụng làm sạch việc tuần hoàn của dầu động cơ khỏi bụi bẩn, cặn kim loại, cặn dầu, các cặn muội để chỉ có dầu đã được lọc chạm đến điểm bôi trơn và điểm mang. Việc này sẽ ngăn ngừa sự mài mòn và đảm bảo tuổi thọ cao của động cơ. Lọc dầu chính hãng Vokswagen đảm bảo cả về chất lượng, hiệu suất cũng như hiệu quả kinh tế cho động cơ xe của bạn.',
            subTitle: 'Lợi ích',
            image: 'https://vw-image.s3.ap-southeast-1.amazonaws.com/video/part-10.webp',
            items: [
                { title: "Bền vững:", content: `Với sự thay đổi thất thường của nhiệt độ và áp suất.` },
                { title: "Không có sự rò rỉ:", content: `Lọc dầu và các kênh dầu không bị rò rỉ trong các-te dầu.` },
                { title: "Vận hành mạnh mẽ:", content: `Tương thich cho cả xe trang bị tính năng Start/Stop tự động.` },
                { title: "Sẵn sàng sử dụng tức thì:", content: `Ngay lập tức nhận áp lực dầu và bôi trơn khi động cơ được khởi động.` },
            ],
            reverse: 'reverse'
            // link: '/owner/bao-hanh'
        },
        {
            component: "owner-split-horizontal",
            image1: {
                component: "owner-image",
                image: "https://vw-image.s3.ap-southeast-1.amazonaws.com/video/part-11.webp",
                //title:""
            },
            image2: {
                component: "owner-image",
                image: "https://vw-image.s3.ap-southeast-1.amazonaws.com/video/part-12.webp",
                // title:""
            },
            title1: {
                component: "owner-title",
                title: "Để hành trình giảm bớt tiếng ồn"
            },
            title2: {
                component: "owner-title",
                title: "Phối hợp để cùng nhau tạo nên sự an toàn và thoải mái hơn"
            },
            list1: {
                component: "owner-list",
                title: 'Bộ giảm thanh Volkswagen chính hãng',
                description: 'Lý do tại sao bộ giảm thanh của chúng tôi đặc biệt hiệu quả khi hấp thụ tiếng ồn khí thải – vì chúng nhỏ hơn 2 dB so với quy định pháp luật. Nhờ vào vật liệu chất lượng cao và bảo vệ hiệu quả chống gỉ, sản phẩm có tuổi thọ đặc biệt dài.',
                subTitle: 'Lợi ích',
                //image: 'https://assets.volkswagen.com/is/image/volkswagenag/16-9_Battery-3?Zml0PWNyb3AsMSZmbXQ9d2VicCZxbHQ9Nzkmd2lkPTgwMCZoZWk9NDUwJmFsaWduPTAuMDAsMC4wMCZiZmM9b2ZmJmZkMTc=',
                items: [
                    { title: "Yên tĩnh:", content: `Hấp thụ tiếng ồn lái xe hiệu quả hơn.` },
                    { title: "Tuổi thọ dài hơn:", content: `Nhờ các vật liệu bền như thép không gỉ và cấu trúc kiểm soát độ ẩm.` },
                    { title: "Tối ưu hóa hiệu suất và mức tiêu thụ động cơ của bạn:", content: `Nhờ khả năng chống chảy thấp và áp suất ngược của khí thải.` },
                ],
            },
            list2: {
                component: "owner-list",
                title: 'Bộ giảm xóc Volkswagen chính hãng',
                description: 'Tương thích tuyệt đối với từng model xe, hộp số và các hệ thống hỗ trợ trên chiếc xe của bạn. Trong khi tăng tốc, phanh và đánh lái, giảm sóc sẽ hấp thụ lực và hoạt động ổn định và đảm bảo lực kéo đủ tốt - tạo nên cảm giác lái xe an toàn.',
                items: [
                    { title: "Đáng tin cậy:", content: `Làm giảm tác động của sự chuyển động và hỗ trợ chức năng cho các hệ thống hỗ trợ (ví dụ: tính năng cân bằng điện tử hoặc chống bó cứng phanh ABS).` },
                    { title: "Độ đàn hồi:", content: `Hiệu năng đỉnh ở tốc độ cao và với tải trọng nặng (ví dụ: vật kéo nặng hoặc chở nhiều hành lý).` },
                    { title: "Hiệu quả kinh tế:", content: `Bảo vệ thân xe và các bộ phận khác của xe tránh khỏi sự mài mòn.` },
                ],
                subTitle: 'Lợi ích'
            }
        },
        // {
        //     component: "owner-detail-vertical",
        //     total: 1,
        //     items: [
        //         {
        //             image: 'https://assets.volkswagen.com/is/image/volkswagenag/16-9_Wheels-tyres-4?Zml0PWNyb3AsMSZmbXQ9d2VicCZxbHQ9Nzkmd2lkPTEyODAmaGVpPTcyMCZhbGlnbj0wLjAwLDAuMDAmYmZjPW9mZiY5ZjIy',
        //             title: 'Mâm xe và lốp',
        //             description: 'Bộ phận quan trọng của xe, tiếp xúc trực tiếp với mặt đường: tìm thông tin về lốp xe ngay tại đây',
        //             link: '/owner/mam-va-lop'
        //         }
        //     ]
        // },
        // {
        //     component: "owner-detail-vertical2",
        //     total: 2,
        //     items: [
        //         {
        //             image: 'https://assets.volkswagen.com/is/image/volkswagenag/16-9_Parts-4?Zml0PWNyb3AsMSZmbXQ9d2VicCZxbHQ9Nzkmd2lkPTk2MCZoZWk9NTQwJmFsaWduPTAuMDAsMC4wMCZiZmM9b2ZmJjRhNzg=',
        //             title: 'Phụ tùng chính hãng – 100% từ Volkswagen',
        //             description: 'Sự lựa chọn hoàn hảo cho chiếc xe của bạn: Với phụ tùng chính hãng của chúng tôi, giá trị và an toàn của xe luôn được đảm bảo. Tham khảo thêm các sản phẩm của chúng tôi',
        //             link: '/owner/phu-tung'
        //         },
        //         {
        //             image: 'https://assets.volkswagen.com/is/image/volkswagenag/16-9_Engine-oil-fluids-4?Zml0PWNyb3AsMSZmbXQ9d2VicCZxbHQ9Nzkmd2lkPTk2MCZoZWk9NTQwJmFsaWduPTAuMDAsMC4wMCZiZmM9b2ZmJjRhNzg=',
        //             title: 'Dầu nhớt động cơ và các chất lưu giúp bảo vệ và bổ sung cho hệ thống',
        //             description: 'Sử dụng dầu chất lượng sẽ giúp xe vận hành tốt hơn: Với các chất lưu chính hãng của chúng tôi, như keo AdBlue®, nước rửa kính, dung dịch làm mát, dầu phanh và dầu động cơ, chiếc Volkswagen của bạn sẽ luôn vận hành tốt',
        //             link: '/owner/dong-co'
        //         }
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
        //             link: '/owner/thong-tin'
        //         }
        //     ]
        // },
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
        this.meta.updateTag({ name: 'description', content: PAGE_META_DESCRIPTION.accessories });
    }
    //   data: any
}
