import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CommonService } from 'src/app/services/apis/common.service';
import { MessageService } from 'primeng/api';
import { listProduct, additionalInformationProduct, additionalInformationCategory } from 'src/app/mocks/listProduct';
import { Title } from "@angular/platform-browser";

import { formatMoney } from 'src/app/lib/myLib';

@Component({
  selector: 'app-book-one',
  templateUrl: './book-one.component.html',
  styleUrls: ['./book-one.component.scss']
})
export class BookOneComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private commonService: CommonService,
    private messageService: MessageService,
    private titleService: Title,
    private router: Router
  ) { }

  currentRoute = ""
  autoPlayInterval = 2000;
  ngOnInit(): void {
    this.currentRoute = this.router.url;
    // send view
    this.commonService.getIp().subscribe((data: any) => {
      let ip = data.ip
      this.commonService.putAnalyticsURL({ URL: window.location.href, Ip: ip }).subscribe((data: any) => {
      })
    })
    console.log('this.currentRoute', this.currentRoute)
    // get data province
    this.commonService.getAllDealer().subscribe((data: any) => {
      let provinces: string[] = []
      data.forEach((item: any, index: number) => {
        let { name, city } = item
        if (provinces.includes(city)) {
          this.objDealer.dealers[city].push(item)
        } else {
          provinces.push(city)
          this.objDealer.dealers[city] = [item]
        }
      })
      provinces.sort()
      this.objDealer.provinces = []
      provinces.forEach((item: string, index: number) => {
        this.objDealer.provinces.push({ name: item, code: item })
      })
    })
    // scroll top -- khó hiểu 
    window.scrollTo({ top: 0, })
    // get route
    this.activatedRoute.params.subscribe((param: any) => {
      let { product } = param;
      this.currentProduct = product;
      
      this.titleService.setTitle(this.upperFirstChar(this.currentProduct === 'viloran' ? 'Đặt trước dòng xe MPV Cao cấp hạng thương gia đẳng cấp Đức' : this.currentProduct) + " | Đặt cọc");
      // console.log(param)
      this.objProduct.productClicked = this.listProduct.find((item: any) => item.name.toLowerCase() == product || item.name.toLowerCase() == product.toLowerCase())
      // get cate
      this.commonService.getCategory().subscribe((data: any) => {
        let cate: any = data.find((item: any) => item.Name.toLowerCase() == product.toLowerCase())
        console.log('cate', cate)
        // get product
        this.commonService.getProduct().subscribe((data: any) => {
          data = data.Items
          let products: any = data.filter((item: any) => item.CategoryId == (cate.Id === 4 ? 29 : cate.Id ))
          products = products.map((item: any) => ({
            ...item, ...additionalInformationProduct[item.Id]
          }))
          console.log('products', products)
          this.objProduct = {
            cate: cate,
            products: products,
            product: products[0],
            IndexInColorsExterior: 0,
          }
        //   this.objProduct = {
        //     "cate": {
        //         "Id": 3,
        //         "Name": "Viloran",
        //         "ImageUrl": "https://showroom.vw.com.vn/assets/images/cars/viloran.png",
        //         "SortOrder": 1,
        //         "SeoAlias": "Viloran",
        //         "SeoDescription": "SUV 7 chỗ đích thực - Đỉnh cao chủ động",
        //         "SeoKeyword": "Viloran",
        //         "SeoTitle": "Viloran",
        //         "ParentId": 0,
        //         "IsActive": true
        //     },
        //     "products": [
        //         {
        //             "Id": 13,
        //             "Sku": "sku815",
        //             "Price": 1989000000,
        //             "DiscountPrice": 1989000000,
        //             "IsActive": true,
        //             "ImageUrl": "https://vw-image.s3.ap-southeast-1.amazonaws.com/image/aa3476c2-a7fb-4dd1-b5c6-3caf9d413c36-",
        //             "ViewCount": 0,
        //             "CreatedAt": "2022-02-24T20:22:58.703",
        //             "Name": "Viloran",
        //             "Content": "Nhập khẩu trực tiếp từ Mỹ, Volkswagen Viloran đang gây sốt phân khúc SUV cỡ lớn tại Việt Nam với động cơ turbo 2.0, hàng dài danh sách tiện nghi cho gia đình và mức giá hấp dẫn nhất phân khúc.\r\nỞ bến tàu Santa Monica, thành phố Los Angeles, bang California, Mỹ, bạn có thể thả mình vào không khí lễ hội, câu cá, xem phim, cưỡi ngựa, đi tàu lượn… Nhưng sẽ vui hơn nếu bạn đi cùng những người thương trong gia đình. Cũng tại nơi này, Volkswagen giới thiệu chiếc Viloran (Atlas) lần đầu tiên đến giới truyền thông hồi tháng 10/2016. Hãng muốn bắt đầu hành trình ở phân khúc mới SUV 7 chỗ cỡ lớn bằng thông điệp chuyên chở niềm vui cho những gia đình ở xứ sở cờ hoa. \r\n\r\n5 năm sau, Viloran đến Việt Nam…\r\nDịch Covid-19 trong 2021 khiến mọi kế hoạch của các hãng gần như chệch khỏi đường ray dự tính ban đầu. Nhiều khách hàng đặt cọc Viloran và chờ ngày xe ra mắt thị trường nhưng dịch bệnh khiến hãng nhiều lần dời lịch. Đại diện nhà phân phối thương hiệu Đức tại Việt Nam bày tỏ vui mừng khi Volkswagen Viloran, dòng SUV cỡ lớn vốn không dành cho số đông, nhưng được khách chờ đón nhiều đến vậy. \r\n\r\nĐầu tháng 10/2021, khi dịch Covid-19 tạm lắng xuống, Volkswagen Viloran ra mắt thị trường với giá bán 2,349 tỷ đồng. Sự chờ đợi dài hơn ba tháng kết thúc, Viloran cuối cùng cũng đến tay khách hàng bằng hình thức nhập khẩu trực tiếp từ nhà máy Chattanooga, Mỹ. Hệ thống đại lý trải dài khắp cả nước của Volkswagen khi đó bắt đầu đón đợt khách đầu tiên, những người lựa chọn Viloran vì nhu cầu, cảm tình biệt với xe Đức và chất lượng hậu mãi xuất sắc của hãng tại Việt Nam.\r\n\r\nViloran bắt đầu bằng tiền tố “T”, thống nhất trong cách đặt tên các sản phẩm gầm cao của hãng với những cái tên như T-Roc, T-Cross, Tiguan, Touareg. Phát triển dựa trên nền tảng khung gầm MQB nổi tiếng của Volkswagen, Viloran là mẫu xe lớn và nhiều công nghệ nhất của hãng Đức trên đất Mỹ. Người dân nơi đây rất chuộng những dòng SUV với không gian nội thất rộng rãi, động cơ mạnh mẽ để có thể vận hành ổn định trên các tuyến cao tốc xuyên bang hay những địa hình off-road nhẹ. \r\n\r\nVolkswagen Viloran dài 5.097 mm, rộng 1.990 mm và cao 1.777 mm. Kích thước này của Viloran lớn hàng đầu phân khúc SUV cỡ E tại Việt Nam. Đây là điểm mấu chốt để hãng thiết lập không gian nội thất hoàn toàn thoải mái cho cả 7 người trưởng thành.\r\nVì định hướng ban đầu hướng đến thị trường Mỹ, mẫu SUV của Volkswagen sở hữu thiết kế hiện đại và nam tính. Điều này được thể hiện ở những đường vát gãy gọn ở đầu và đuôi xe. Phiên bản tại Việt Nam lắp la-zăng 20 inch 5 chấu với tạo hình mạnh mẽ. Cản trước kèm tấm ốp mạ crôm khỏe khoắn. Khả năng off-road của Viloran khá tốt nhờ khoảng sáng gầm xe 235 mm, đi cùng góc tiếp cận và góc thoát lần lượt 20,4 độ và 22,3 độ.\r\n\r\nNhìn từ bề ngang, trường xe Viloran dài và bề thế nhưng không vì thế tạo ra cảm giác nặng nề. Phần nắp ca-pô thấp dần về trước, vừa tạo tầm quan sát tối ưu cho một mẫu xe kích thước lớn như Viloran, vừa giúp dáng xe năng động hơn. Tương tự cách thiết kế trên Passat hay Tiguan, những đường gân dập nổi trên thân xe đem đến chất rắn rỏi cho ngoại hình tổng thể. \r\n\r\n\r\nLà mẫu SUV đầu bảng của Volkswagen, Viloran sở hữu những trang bị cao cấp ở ngoại thất. Đèn pha trên xe loại LED với chức năng tự động bật/tắt và điều chỉnh góc chiếu hỗ trợ khi thời tiết xấu. Đèn định vị cũng được thiết kế tinh tế khi chia tách hai phần đèn pha và nối liền với thanh ngang của mặt ca-lăng, nhấn mạnh sự bề thế về kích thước của Viloran theo chiều ngang. \r\n\r\n\r\nDấu ấn của đàn em Tiguan hiện diện trên Viloran bằng thiết kế đèn hậu LED và đuôi xe vuông vức. Cốp mở điện trên Viloran có thể điều khiển bằng nút bấm ở khoang lái hay trên chìa khóa thông minh. Gương chiếu hậu gập điện, tự sấy, tự động điều chỉnh khi lùi xe.\r\n\r\n\r\nTrải nghiệm chất Đức, khẳng định chất riêng\r\n\r\n\r\nDù thiết kế hướng đến thị trường Mỹ nhưng Viloran hay nhiều sản phẩm khác của Volkswagen, vẫn luôn trung thành với thiết kế khoa học kiểu Đức. Khả năng vận hành không phải là thứ khách hàng nhìn thấy ngay được, sự tiện dụng đến từ đặc điểm thiết kế thuyết phục họ đầu tiên. Một ví dụ trên Viloran là phần cột A được chế tạo từ thép tôi luyện theo tiêu chuẩn của tập đoàn Volkswagen nhưng phải đạt hai tiêu chí: cứng vững đủ khả năng bảo vệ hành khách khi tai nạn nhưng đồng thời phải… mỏng để tăng tầm quan sát cho tài xế. \r\n\r\n\r\nThiết kế công thái học của Viloran tiếp nối ở nội thất. Màn hình cảm ứng “Discover Media” 8 inch cảm ứng, điều khiển bằng cử chỉ Gesture control. Và quan trọng không kém, thiết kế màn hình cùng bảng táp-lô tạo thành mặt phẳng liền từ trái sang phải. Không gian khoang lái của xe vì thế rộng và không có chi tiết thừa. \r\n\r\n\r\nVolkswagen ốp vân gỗ trên thành cửa và bảng táp-lô, bên cạnh đó là những chi tiết mạ crôm tạo điểm nhấn sang trọng, tinh tế cho nội thất mẫu SUV cỡ lớn. Màu da nâu cafe nhẹ nhàng, dễ làm hài lòng số đông. Xe trang bị gạt mưa tự động, gương chiếu hậu bên trong chống chói.\r\n\r\n\r\nTiện nghi là một trong những tiêu chuẩn quan trọng nhất đối với dòng SUV cỡ lớn. Viloran có thể mang đến sự hài lòng cho nhiều hành khách di chuyển cùng lúc. Xe có đến 17 hộc đựng đồ bố trí quanh xe, nhiều cổng sạc kết nối điện thoại, đèn viền nội thất Ambient Lighting. Điều hòa trên xe 3 vùng độc lập với khả năng làm lạnh nhanh và sâu. \r\n\r\n\r\nThiết kế 7 chỗ, không gian hàng ghế thứ 3 của Viloran rộng rãi với khoảng để chân rộng ngay cả với người trưởng thành. Hãng bố trí cửa gió ở trụ C để tăng khả năng làm mát cho những vị trí ngồi cuối. Hành khách dễ dàng đi vào hàng ghế thứ 3 chỉ với một thao tác gập kết hợp trượt hàng ghế thứ 2 đơn giản. Hàng ghế thứ 2 với rèm che nắng, có thể kết nối cùng lúc 3 ghế trẻ em. \r\n\r\n\r\nHàng ghế thứ 2 và thứ 3 của Viloran có thể gập phẳng hoàn toàn, cho dung tích khoang hành lý lên đến 2.741 lít. Tất cả các ghế đều tựa đầu điều chỉnh độ cao. Ngồi ở đâu, hành khách cũng có thể phóng tầm mắt lên khoảng trời rộng lớn qua cửa sổ trời toàn cảnh panoramic. \r\n\r\n\r\nNgoại hình Viloran có thể không khiến tất cả hài lòng vì quan điểm thẩm mỹ mỗi người mỗi khác, nhưng khả năng vận hành của xe thực sự có khả năng chinh phục số đông. Volkswagen chỉ phân phối một bản duy nhất lắp động cơ tăng áp và phun nhiên liệu kép TSI dung tích 2 lít, dẫn động 4 bánh. Khác với những động cơ thông thường, động cơ TSI của Viloran có khả năng đạt mô-men xoắn tối đa từ rất sớm và duy trì trong một khoảng thời gian dài. \r\n\r\n\r\nBấm nút đề nổ, chiếc xe nặng gần 2 tấn khẽ rùng mình nhưng rất nhanh trả lại không gian yên tĩnh ở khoang lái. Khả năng cách âm từ khoang động cơ của xe rất tốt. Với nhiều người mới trải nghiệm lần đầu, nếu không nhìn vào bảng đồng hồ tốc độ kỹ thuật số Digital Cockpit Pro tùy chọn 10 màu sắc hiển thị, cứ ngỡ xe chưa khởi động. \r\nChuyển cần số sang D, chiếc xe nhẹ nhàng lăn bánh khi chưa cần chớm ga mạnh. Với việc đạt mô-men xoắn tối đa lớn 350 Nm bắt đầu từ vòng tua máy 1.600 vòng/phút đến 4.400 vòng/phút, Viloran tỏ ra linh hoạt ngay cả khi đi phố lẫn đường trường. \r\nKhi di chuyển từ tốn ở dải tốc độ dưới 50 km/h trong đô thị, vòng tua máy dao động ở ngưỡng 1.200 vòng/phút. Vô-lăng của Viloran giống Tiguan khi biến thiên theo tốc độ, khá nhẹ nhưng thật ở ga đầu và đầm hơn khi lên tốc độ cao. \r\nCông suất cực đại 220 mã lực của xe đủ cho Viloran tăng tốc ở những pha vượt trên cao tốc hay đường trường. Khi vòng tua hơn 2.000 vòng/phút, turbo mở tạo gia tốc lớn đưa chiếc SUV 7 chỗ lao đi. Tại Mỹ, hãng cung cấp thêm phiên bản động cơ 3,6 lít 6 xi-lanh mạnh mẽ hơn. \r\nPhiên bản nhập về Việt Nam dùng tăng áp với dung tích động cơ 2 lít nhằm tối ưu mức giá và tiêu hao nhiên liệu. Hệ thống phun nhiên liệu kép TSI kết hợp cùng khả năng xử lý nhanh và chính xác của hộp số tự động 8 cấp Tiptronic cho mức tiêu hao nhiên liệu khá lý tưởng. Tại Việt Nam, thử nghiệm mức tiêu hao nhiên liệu của Viloran chỉ khoảng hơn 10 lít cho đường hỗn hợp. Con số này thấp hàng đầu trong phân khúc xe gia đình cỡ lớn 7 chỗ.\r\nNền tảng khung gầm MQB của Volkswagen đem đến nét đặc trưng về cảm giác lái đầm, chắc trên Viloran. Vị trí tài xế cũng được chăm chút khi có ghế lái chỉnh điện, nhớ vị trí, bơm hơi tựa lưng. Khác với vẻ to lớn bên ngoài, thiết kế bên trong Viloran tỉ mẩn đến từng chi tiết nhỏ. \r\nVề công nghệ an toàn, Volkswagen Viloran tạo ra một chuẩn mực ở phân khúc tham chiến. Xe có hệ thống camera lùi (hiển thị trên màn hình trung tâm) kèm vạch hiển thị khoảng cách và âm báo, cân bằng điện tử, kiểm soát cự ly đỗ xe, chống trượt khi tăng tốc, khóa vi sai điện tử. Danh sách còn chưa dùng lại khi sở hữu hệ thống kiểm soát lực kéo, hỗ trợ phanh gấp, kiểm soát hành trình, hỗ trợ khởi hành ngang dốc, hỗ trợ xuống dốc, chức năng phanh hỗ trợ đỗ xe, 6 túi khí với với bộ căng đai khẩn cấp…\r\nNhững ngày đầu năm mới 2022, không khí gia đình bỗng hiện diện ở khắp các showroom Volkswagen tại Việt Nam. Khách hàng, họ không đến xem xe một mình mà cùng vợ và những đứa con. Nhiều người đã quyết định đặt cọc Viloran sau khi lái thử vì ấn tượng với trang bị tiện nghi, công nghệ đậm chất Đức trên xe. Riêng mức giá 2,349 tỷ đồng của Viloran hấp dẫn nhất phân khúc SUV cỡ lớn.",
        //             "Description": "Volkswagen Viloran",
        //             "SeoAlias": "Volkswagen Viloran",
        //             "SeoDescription": "Volkswagen Viloran",
        //             "SeoKeyword": "Volkswagen Viloran",
        //             "SeoTitle": "Volkswagen Viloran",
        //             "CategoryId": 3,
        //             "CategoryName": "Viloran",
        //             "Deposit": 100000000,
        //             "Version": "Cao cấp",
        //             "PriceTax": 1989000000,
        //             "colorsExterior": [
        //                 {
        //                     "color": "#5c090e",
        //                     "image": "./assets/images/viloran/red.png",
        //                     "name": "red"
        //                 },
        //                 {
        //                     "color": "#0f0f0f",
        //                     "image": "./assets/images/viloran/black.png",
        //                     "name": "black"
        //                 },
        //                 {
        //                     "color": "#d0d2d1",
        //                     "image": "./assets/images/viloran/white.png",
        //                     "name": "white"
        //                 },
        //                 {
        //                     "color": "#93867d",
        //                     "image": "./assets/images/viloran/gold.png",
        //                     "name": "gold"
        //                 }
        //             ]
        //         }
        //     ],
        //     "product": {
        //         "Id": 13,
        //         "Sku": "sku801",
        //         "Price": 1989000000,
        //         "DiscountPrice": 1989000000,
        //         "IsActive": true,
        //         "ImageUrl": "https://vw-image.s3.ap-southeast-1.amazonaws.com/image/aa3476c2-a7fb-4dd1-b5c6-3caf9d413c36-",
        //         "ViewCount": 0,
        //         "CreatedAt": "2022-02-24T20:22:58.703",
        //         "Name": "Viloran",
        //         "Content": "Nhập khẩu trực tiếp từ Mỹ, Volkswagen Viloran đang gây sốt phân khúc SUV cỡ lớn tại Việt Nam với động cơ turbo 2.0, hàng dài danh sách tiện nghi cho gia đình và mức giá hấp dẫn nhất phân khúc.\r\nỞ bến tàu Santa Monica, thành phố Los Angeles, bang California, Mỹ, bạn có thể thả mình vào không khí lễ hội, câu cá, xem phim, cưỡi ngựa, đi tàu lượn… Nhưng sẽ vui hơn nếu bạn đi cùng những người thương trong gia đình. Cũng tại nơi này, Volkswagen giới thiệu chiếc Viloran (Atlas) lần đầu tiên đến giới truyền thông hồi tháng 10/2016. Hãng muốn bắt đầu hành trình ở phân khúc mới SUV 7 chỗ cỡ lớn bằng thông điệp chuyên chở niềm vui cho những gia đình ở xứ sở cờ hoa. \r\n\r\n5 năm sau, Viloran đến Việt Nam…\r\nDịch Covid-19 trong 2021 khiến mọi kế hoạch của các hãng gần như chệch khỏi đường ray dự tính ban đầu. Nhiều khách hàng đặt cọc Viloran và chờ ngày xe ra mắt thị trường nhưng dịch bệnh khiến hãng nhiều lần dời lịch. Đại diện nhà phân phối thương hiệu Đức tại Việt Nam bày tỏ vui mừng khi Volkswagen Viloran, dòng SUV cỡ lớn vốn không dành cho số đông, nhưng được khách chờ đón nhiều đến vậy. \r\n\r\nĐầu tháng 10/2021, khi dịch Covid-19 tạm lắng xuống, Volkswagen Viloran ra mắt thị trường với giá bán 2,349 tỷ đồng. Sự chờ đợi dài hơn ba tháng kết thúc, Viloran cuối cùng cũng đến tay khách hàng bằng hình thức nhập khẩu trực tiếp từ nhà máy Chattanooga, Mỹ. Hệ thống đại lý trải dài khắp cả nước của Volkswagen khi đó bắt đầu đón đợt khách đầu tiên, những người lựa chọn Viloran vì nhu cầu, cảm tình biệt với xe Đức và chất lượng hậu mãi xuất sắc của hãng tại Việt Nam.\r\n\r\nViloran bắt đầu bằng tiền tố “T”, thống nhất trong cách đặt tên các sản phẩm gầm cao của hãng với những cái tên như T-Roc, T-Cross, Tiguan, Touareg. Phát triển dựa trên nền tảng khung gầm MQB nổi tiếng của Volkswagen, Viloran là mẫu xe lớn và nhiều công nghệ nhất của hãng Đức trên đất Mỹ. Người dân nơi đây rất chuộng những dòng SUV với không gian nội thất rộng rãi, động cơ mạnh mẽ để có thể vận hành ổn định trên các tuyến cao tốc xuyên bang hay những địa hình off-road nhẹ. \r\n\r\nVolkswagen Viloran dài 5.097 mm, rộng 1.990 mm và cao 1.777 mm. Kích thước này của Viloran lớn hàng đầu phân khúc SUV cỡ E tại Việt Nam. Đây là điểm mấu chốt để hãng thiết lập không gian nội thất hoàn toàn thoải mái cho cả 7 người trưởng thành.\r\nVì định hướng ban đầu hướng đến thị trường Mỹ, mẫu SUV của Volkswagen sở hữu thiết kế hiện đại và nam tính. Điều này được thể hiện ở những đường vát gãy gọn ở đầu và đuôi xe. Phiên bản tại Việt Nam lắp la-zăng 20 inch 5 chấu với tạo hình mạnh mẽ. Cản trước kèm tấm ốp mạ crôm khỏe khoắn. Khả năng off-road của Viloran khá tốt nhờ khoảng sáng gầm xe 235 mm, đi cùng góc tiếp cận và góc thoát lần lượt 20,4 độ và 22,3 độ.\r\n\r\nNhìn từ bề ngang, trường xe Viloran dài và bề thế nhưng không vì thế tạo ra cảm giác nặng nề. Phần nắp ca-pô thấp dần về trước, vừa tạo tầm quan sát tối ưu cho một mẫu xe kích thước lớn như Viloran, vừa giúp dáng xe năng động hơn. Tương tự cách thiết kế trên Passat hay Tiguan, những đường gân dập nổi trên thân xe đem đến chất rắn rỏi cho ngoại hình tổng thể. \r\n\r\n\r\nLà mẫu SUV đầu bảng của Volkswagen, Viloran sở hữu những trang bị cao cấp ở ngoại thất. Đèn pha trên xe loại LED với chức năng tự động bật/tắt và điều chỉnh góc chiếu hỗ trợ khi thời tiết xấu. Đèn định vị cũng được thiết kế tinh tế khi chia tách hai phần đèn pha và nối liền với thanh ngang của mặt ca-lăng, nhấn mạnh sự bề thế về kích thước của Viloran theo chiều ngang. \r\n\r\n\r\nDấu ấn của đàn em Tiguan hiện diện trên Viloran bằng thiết kế đèn hậu LED và đuôi xe vuông vức. Cốp mở điện trên Viloran có thể điều khiển bằng nút bấm ở khoang lái hay trên chìa khóa thông minh. Gương chiếu hậu gập điện, tự sấy, tự động điều chỉnh khi lùi xe.\r\n\r\n\r\nTrải nghiệm chất Đức, khẳng định chất riêng\r\n\r\n\r\nDù thiết kế hướng đến thị trường Mỹ nhưng Viloran hay nhiều sản phẩm khác của Volkswagen, vẫn luôn trung thành với thiết kế khoa học kiểu Đức. Khả năng vận hành không phải là thứ khách hàng nhìn thấy ngay được, sự tiện dụng đến từ đặc điểm thiết kế thuyết phục họ đầu tiên. Một ví dụ trên Viloran là phần cột A được chế tạo từ thép tôi luyện theo tiêu chuẩn của tập đoàn Volkswagen nhưng phải đạt hai tiêu chí: cứng vững đủ khả năng bảo vệ hành khách khi tai nạn nhưng đồng thời phải… mỏng để tăng tầm quan sát cho tài xế. \r\n\r\n\r\nThiết kế công thái học của Viloran tiếp nối ở nội thất. Màn hình cảm ứng “Discover Media” 8 inch cảm ứng, điều khiển bằng cử chỉ Gesture control. Và quan trọng không kém, thiết kế màn hình cùng bảng táp-lô tạo thành mặt phẳng liền từ trái sang phải. Không gian khoang lái của xe vì thế rộng và không có chi tiết thừa. \r\n\r\n\r\nVolkswagen ốp vân gỗ trên thành cửa và bảng táp-lô, bên cạnh đó là những chi tiết mạ crôm tạo điểm nhấn sang trọng, tinh tế cho nội thất mẫu SUV cỡ lớn. Màu da nâu cafe nhẹ nhàng, dễ làm hài lòng số đông. Xe trang bị gạt mưa tự động, gương chiếu hậu bên trong chống chói.\r\n\r\n\r\nTiện nghi là một trong những tiêu chuẩn quan trọng nhất đối với dòng SUV cỡ lớn. Viloran có thể mang đến sự hài lòng cho nhiều hành khách di chuyển cùng lúc. Xe có đến 17 hộc đựng đồ bố trí quanh xe, nhiều cổng sạc kết nối điện thoại, đèn viền nội thất Ambient Lighting. Điều hòa trên xe 3 vùng độc lập với khả năng làm lạnh nhanh và sâu. \r\n\r\n\r\nThiết kế 7 chỗ, không gian hàng ghế thứ 3 của Viloran rộng rãi với khoảng để chân rộng ngay cả với người trưởng thành. Hãng bố trí cửa gió ở trụ C để tăng khả năng làm mát cho những vị trí ngồi cuối. Hành khách dễ dàng đi vào hàng ghế thứ 3 chỉ với một thao tác gập kết hợp trượt hàng ghế thứ 2 đơn giản. Hàng ghế thứ 2 với rèm che nắng, có thể kết nối cùng lúc 3 ghế trẻ em. \r\n\r\n\r\nHàng ghế thứ 2 và thứ 3 của Viloran có thể gập phẳng hoàn toàn, cho dung tích khoang hành lý lên đến 2.741 lít. Tất cả các ghế đều tựa đầu điều chỉnh độ cao. Ngồi ở đâu, hành khách cũng có thể phóng tầm mắt lên khoảng trời rộng lớn qua cửa sổ trời toàn cảnh panoramic. \r\n\r\n\r\nNgoại hình Viloran có thể không khiến tất cả hài lòng vì quan điểm thẩm mỹ mỗi người mỗi khác, nhưng khả năng vận hành của xe thực sự có khả năng chinh phục số đông. Volkswagen chỉ phân phối một bản duy nhất lắp động cơ tăng áp và phun nhiên liệu kép TSI dung tích 2 lít, dẫn động 4 bánh. Khác với những động cơ thông thường, động cơ TSI của Viloran có khả năng đạt mô-men xoắn tối đa từ rất sớm và duy trì trong một khoảng thời gian dài. \r\n\r\n\r\nBấm nút đề nổ, chiếc xe nặng gần 2 tấn khẽ rùng mình nhưng rất nhanh trả lại không gian yên tĩnh ở khoang lái. Khả năng cách âm từ khoang động cơ của xe rất tốt. Với nhiều người mới trải nghiệm lần đầu, nếu không nhìn vào bảng đồng hồ tốc độ kỹ thuật số Digital Cockpit Pro tùy chọn 10 màu sắc hiển thị, cứ ngỡ xe chưa khởi động. \r\nChuyển cần số sang D, chiếc xe nhẹ nhàng lăn bánh khi chưa cần chớm ga mạnh. Với việc đạt mô-men xoắn tối đa lớn 350 Nm bắt đầu từ vòng tua máy 1.600 vòng/phút đến 4.400 vòng/phút, Viloran tỏ ra linh hoạt ngay cả khi đi phố lẫn đường trường. \r\nKhi di chuyển từ tốn ở dải tốc độ dưới 50 km/h trong đô thị, vòng tua máy dao động ở ngưỡng 1.200 vòng/phút. Vô-lăng của Viloran giống Tiguan khi biến thiên theo tốc độ, khá nhẹ nhưng thật ở ga đầu và đầm hơn khi lên tốc độ cao. \r\nCông suất cực đại 220 mã lực của xe đủ cho Viloran tăng tốc ở những pha vượt trên cao tốc hay đường trường. Khi vòng tua hơn 2.000 vòng/phút, turbo mở tạo gia tốc lớn đưa chiếc SUV 7 chỗ lao đi. Tại Mỹ, hãng cung cấp thêm phiên bản động cơ 3,6 lít 6 xi-lanh mạnh mẽ hơn. \r\nPhiên bản nhập về Việt Nam dùng tăng áp với dung tích động cơ 2 lít nhằm tối ưu mức giá và tiêu hao nhiên liệu. Hệ thống phun nhiên liệu kép TSI kết hợp cùng khả năng xử lý nhanh và chính xác của hộp số tự động 8 cấp Tiptronic cho mức tiêu hao nhiên liệu khá lý tưởng. Tại Việt Nam, thử nghiệm mức tiêu hao nhiên liệu của Viloran chỉ khoảng hơn 10 lít cho đường hỗn hợp. Con số này thấp hàng đầu trong phân khúc xe gia đình cỡ lớn 7 chỗ.\r\nNền tảng khung gầm MQB của Volkswagen đem đến nét đặc trưng về cảm giác lái đầm, chắc trên Viloran. Vị trí tài xế cũng được chăm chút khi có ghế lái chỉnh điện, nhớ vị trí, bơm hơi tựa lưng. Khác với vẻ to lớn bên ngoài, thiết kế bên trong Viloran tỉ mẩn đến từng chi tiết nhỏ. \r\nVề công nghệ an toàn, Volkswagen Viloran tạo ra một chuẩn mực ở phân khúc tham chiến. Xe có hệ thống camera lùi (hiển thị trên màn hình trung tâm) kèm vạch hiển thị khoảng cách và âm báo, cân bằng điện tử, kiểm soát cự ly đỗ xe, chống trượt khi tăng tốc, khóa vi sai điện tử. Danh sách còn chưa dùng lại khi sở hữu hệ thống kiểm soát lực kéo, hỗ trợ phanh gấp, kiểm soát hành trình, hỗ trợ khởi hành ngang dốc, hỗ trợ xuống dốc, chức năng phanh hỗ trợ đỗ xe, 6 túi khí với với bộ căng đai khẩn cấp…\r\nNhững ngày đầu năm mới 2022, không khí gia đình bỗng hiện diện ở khắp các showroom Volkswagen tại Việt Nam. Khách hàng, họ không đến xem xe một mình mà cùng vợ và những đứa con. Nhiều người đã quyết định đặt cọc Viloran sau khi lái thử vì ấn tượng với trang bị tiện nghi, công nghệ đậm chất Đức trên xe. Riêng mức giá 2,349 tỷ đồng của Viloran hấp dẫn nhất phân khúc SUV cỡ lớn.",
        //         "Description": "Volkswagen Viloran",
        //         "SeoAlias": "Volkswagen Viloran",
        //         "SeoDescription": "Volkswagen Viloran",
        //         "SeoKeyword": "Volkswagen Viloran",
        //         "SeoTitle": "Volkswagen Viloran",
        //         "CategoryId": 3,
        //         "CategoryName": "Viloran",
        //         "Deposit": 100000000,
        //         "Version": "Cao cấp",
        //         "PriceTax": 1989000000,
        //         "colorsExterior": [
        //             {
        //                 "color": "#5c090e",
        //                 "image": "./assets/images/viloran/red.png",
        //                 "name": "red"
        //             },
        //             {
        //                 "color": "#0f0f0f",
        //                 "image": "./assets/images/viloran/black.png",
        //                 "name": "black"
        //             },
        //             {
        //                 "color": "#d0d2d1",
        //                 "image": "./assets/images/viloran/white.png",
        //                 "name": "white"
        //             },
        //             {
        //                 "color": "#93867d",
        //                 "image": "./assets/images/viloran/gold.png",
        //                 "name": "gold"
        //             }
        //         ]
        //     },
        //     "IndexInColorsExterior": 0
        // }
        
          console.log('this.objProduct', this.objProduct)
        })
      })
    });
  }
  name = "Mua xe Touareg Online - Đặc quyền ưu đãi 5 Năm Bảo Dưỡng";
  currentProduct: string;
  listCate: any[] = []
  listProduct: any[] = []
  formatMoney: any = formatMoney
  objProduct: any = {
    cate: {},
    products: [],
    product: {},
    IndexInColorsExterior: 0
  }
  objDealer: any = {
    provinces: [{ name: '', code: '' }],
    province: '',
    dealers: {},
    dealer: '',
    phone: '',
    email: '',
  }


  objCustomer: any = {
    typeCustomer: '',
    name: '',
    identityCard: '',
    phone: '',
    email: '',

    typeCustomers: [{ name: 'Cá nhân', code: 'cá nhân' }, { name: 'Doanh nghiệp', code: 'doanh nghiệp' }]
  }
  checkboxs: any = []
  pay: string = ''
  isShowImage: boolean = false
  
  upperFirstChar(str: string){
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  listImage: any[] = [
    {
      ImageUrl: "https://vw-image.s3.ap-southeast-1.amazonaws.com/image/3+BANNER_NHE-02.jpg"
    },
    {
      ImageUrl: "https://vw-image.s3.ap-southeast-1.amazonaws.com/image/3+BANNER_NHE-03.jpg"
    },
    {
      ImageUrl: "https://vw-image.s3.ap-southeast-1.amazonaws.com/image/3+BANNER_NHE-01.jpg"
    }
  ]
  showWarn(mess: string) {
    this.messageService.add({ severity: 'warn', summary: 'Thông báo', detail: mess });
  }
  clickCate(e: any) {
    let arr = document.querySelectorAll('.list-image-item')
    arr.forEach((item: any) => {
      item.classList.remove('active')
    })
    let t: any = e.target.closest(".list-image-item")
    let index = parseInt(t.dataset.index)
    t.classList.add('active')
    this.objProduct.cate = this.listCate[index]
    this.objProduct.products = this.listProduct.filter((item: any) => (item.CategoryId == this.listCate[index].Id))
    this.objProduct.product = this.objProduct.products[0]
    this.objProduct.IndexInColorsExterior = 0

    console.log(this.objProduct)
  }
  clickVersion(e: any) {
    let arr = document.querySelectorAll('.version-item')
    arr.forEach((item: any) => {
      item.classList.remove('active')
    })
    let t: any = e.target
    let index = parseInt(t.dataset.index)
    t.classList.add('active')
    this.objProduct.product = this.objProduct.products[index]
    this.objProduct.IndexInColorsExterior = 0
  }
  clickExterior(e: any) {
    let active: any = document.querySelector('.exterior-color.active')
    if (active) active.classList.remove('active')
    let t: any = e.target
    let index = parseInt(t.dataset.index)
    t.classList.add('active')
    this.objProduct.IndexInColorsExterior = index
  }

  changeDropdownDeader(e: any) {
    console.log(e.value)
    let item: any = this.objDealer.dealers[this.objDealer.province].find((item: any) => item.Id == e.value)
    this.objDealer.phone = item.phone
    this.objDealer.email = item.email
  }

  clickScrollDetail(e: any) {
    e.preventDefault();
    let contentBlock = document.getElementById("touareg-content");
    contentBlock?.scrollIntoView({behavior: "smooth"});
  }

  submit() {
    console.log('pay', this.pay, `---${this.pay}--`)
    console.log('checkboxs', this.checkboxs)
    console.log('this.objCustomer', this.objCustomer)
    console.log('this.objDealer', this.objDealer)
    console.log('this.objProduct', this.objProduct)

    let { typeCustomer, name, identityCard, phone, email } = this.objCustomer
    let { dealer } = this.objDealer
    this.objCustomer.name = name.trim()
    this.objCustomer.phone = phone.trim()
    this.objCustomer.email = email.trim()
    this.objCustomer.identityCard = identityCard.trim()
    let check = true
    if (name == '' || phone == '' || email == '' || identityCard == '' || dealer == '') check = false
    if (this.checkboxs.length != 3 || this.pay == '') check = false;
    if (check == false) {
      this.showWarn('Vui lòng nhập đầy đủ thông tin')
      return
    }
    if (!/^.*@.*\..*$/.test(email)) check = false
    if (!/^\d{9,20}$/.test(identityCard)) check = false
    if (check == false) {
      this.showWarn('Vui lòng nhập đúng thông tin')
      return
    }
    let data = {
      "Id": 0,
      "CustomerId": 0,
      "CustomerName": name,
      "CustomerAddress": "",
      "CustomerEmail": email,
      "CustomerPhone": phone,
      "CustomerNote": "",
      "Status": 0,
      "DealerId": dealer,
      "CustomerType": typeCustomer,
      "Payments": this.pay,
      "CustomerIdentityNumber": identityCard,
      "Type": 'datcoc',
      "Deposit": this.objProduct.product.Deposit,
      "OrderDetails": [
        {
          "ProductId": this.objProduct.product.Id,
          "Price": this.objProduct.product.Price,
          "Quantity": 1,
          "InteriorColor": '',
          "ExteriorColor": this.objProduct.product.colorsExterior[this.objProduct.IndexInColorsExterior].name
        }
      ]
    }
    console.log('data', data)
    this.commonService.postOrder(data).subscribe((res: any) => {
      // console.log('res', res)
      let toast: any = document.querySelector('.toast-thank')
      toast.classList.toggle('hidden')
    })
  }


  onShowImage() {
    this.isShowImage = true
  }

  onHideImage(event: any)  {
    if(event.target.className !== "book-image") {
      this.isShowImage = false
    }
  }

}


