import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CommonService } from "src/app/services/apis/common.service";
import { Meta } from '@angular/platform-browser'

@Component({
    selector: 'app-owner-warning-light',
    templateUrl: './owner-warning-light.component.html',
    styleUrls: ['./owner-warning-light.component.scss']
})
export class OwnerWarningLightComponent implements OnInit {

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private commonService: CommonService,
        private meta: Meta
    ) { }

    ngOnInit(): void {
        // this.mainTitle.title = "Owner Warning"
    }

    type: string = 'main'

    mainTitle: any = {
        title: 'Đèn cảnh báo'
    }

    title: any = {
        component: "owner-title",
        title: "Đèn cảnh báo có ba loại: màu đỏ, vàng và xanh lá cây. Màu đỏ có nghĩa là bạn cần phải kiểm tra ngay. Đèn cảnh báo màu vàng ít nghiêm trọng hơn nhưng  vẫn cần lưu ý hoặc phải liên hệ chuyên gia ngay khi có thể. Cảnh báo màu xanh lá cây chỉ  cung cấp thông tin. không yêu cầu biện pháp khắc phục. Kéo xuống bên dưới để tìm hiểu về các đèn cảnh báo, nhấp vào từng hình để biết thêm chi tiết."
    }

    listLink: any = {
        component: "owner-link-list",
        items: [
            {
                image: 'https://vw-image.s3.ap-southeast-1.amazonaws.com/video/my_car-warning_lights-adblue.webp',
                link: {
                    name: 'Bổ xung dung dịch AdBlue',
                    value: '/owner/warning-light/adblue-red'
                },
                title: 'Bổ xung dung dịch AdBlue',
                subTitle: 'Bổ xung dung dịch AdBlue',
                content: [
                    { header: '', description: 'Đèn cảnh báo màu đỏ xuất hiện khi dung dịch Adblue sử dụng trên xe đã cạn; một khi điều này xảy ra xe của bạn sẽ không thể khởi động lại sau khi đã tắt chìa khóa xe.' },
                    { header: '', description: 'Đây không phải là lỗi, nhưng là một tính năng bắt buộc của hệ thống. Nếu trạng thái này xảy ra, hệ thống cần phải nạp đầy dung dịch Adblue trước khi chiếc xe có thể khởi động lại. Để biết thêm thông tin  vui lòng tham khảo sổ tay hướng dẫn sử dụng xe.' },
                ]
            },
            {
                image: 'https://vw-image.s3.ap-southeast-1.amazonaws.com/video/my_car-warning_lights-airbag_and_seatbelt_system.webp',
                link: {
                    name: 'Túi khí và hệ thống dây đai an toàn',
                    value: '/owner/warning-light/airbag-and-seat-belt'
                },
                title: 'Túi khí và hệ thống dây đai an toàn',
                subTitle: 'Đèn cảnh báo túi khí và hệ thống dây đai an toàn màu đỏ xuất hiện đồng nghĩa với việc bạn nên dừng xe lại ngay khi có thể',
                content: [
                    { description: 'Vui lòng liên hệ đại lý ngay lập tức để kiểm tra.' },
                ]
            },
            {
                image: 'https://vw-image.s3.ap-southeast-1.amazonaws.com/video/my_car-warning_lights-bonnet.webp',
                link: {
                    name: 'Nắp khoang động cơ',
                    value: '/owner/warning-light/bonnet'
                },
                title: 'Nắp khoang động cơ',
                subTitle: 'Nếu đèn cảnh báo nắp khoang động cơ màu đỏ xuất hiện đồng nghĩa với việc bạn nên dừng xe lại ngay khi có thể',
                content: [
                    { description: 'Kiểm tra việc nắp khoang động cơ đã được đóng đúng cách. Sau đó kiểm tra lại xem đèn cảnh báo đã tắt hay chưa?' },
                    { header: 'Đã tắt:', description: 'Đèn cảnh báo đã tắt. Không cần thưc hiện gì thêm.' },
                    { header: 'Chưa tắt:', description: 'Đèn cảnh báo vẫn sáng. Vui lòng liên hệ đại lý ủy quyền.' },
                ]
            },
            {
                image: 'https://vw-image.s3.ap-southeast-1.amazonaws.com/video/warning-light-boot_lid.webp',
                link: {
                    name: 'Nắp khoang hành lý',
                    value: '/owner/warning-light/boot_lid'
                },
                title: 'Nắp khoang hành lý',
                subTitle: 'Nếu đèn cảnh báo nắp khoang hành lý màu đỏ xuất hiện đồng nghĩa với việc bạn nên dừng xe lại ngay khi có thể',
                content: [
                    { description: 'Kiểm tra việc nắp khoang động cơ đã được đóng đúng cách. Sau đó kiểm tra lại xem đèn cảnh báo đã tắt hay chưa?' },
                    { header: 'Đã tắt:', description: 'Đèn cảnh báo đã tắt. Không cần thưc hiện gì thêm.' },
                    { header: 'Chưa tắt:', description: 'Đèn cảnh báo vẫn sáng. Vui lòng liên hệ đại lý ủy quyền.' },
                ]
            },
            {
                image: 'https://vw-image.s3.ap-southeast-1.amazonaws.com/video/warning-lights-brake-system.webp',
                link: {
                    name: 'Hệ thống phanh',
                    value: '/owner/warning-light/brake-system'
                },
                title: 'Hệ thống phanh',
                subTitle: 'Nếu đèn cảnh báo hệ thống phanh màu đỏ xuất hiện đồng nghĩa với việc bạn nên dừng xe lại ngay khi có thể',
                content: [
                    { description: '1. Xe đang cài phanh tay?' },
                    { header: 'Đúng:', description: 'Xe đang cài phanh tay. Nhả phanh tay. Nếu đèn cảnh báo vẫn sáng, thực hiện bước 2. Nếu đèn cảnh  báo tắt, bạn có thể tiếp tục lái xe bình thường.' },
                    { header: 'Sai:', description: 'Xe không cài phanh tay. Thực hiện bước 2.' },
                    { description: '2. Mức dầu phanh đảm bảo đủ?' },
                    { header: 'Mức dầu phanh đủ.', description: 'Nếu đèn cảnh báo vẫn sáng. Vui lòng liên hệ Đại lý của bạn.' },
                    { header: 'Không:', description: 'mức dầu phanh thấp hơn tiêu chuẩn. Châm thêm tới mức tiêu chuẩn. Để nhận sự trợ giúp, vui lòng liên hệ Đại lý ủy quyền.3. Đèn cảnh báo đã tắt hay chưa?' },
                    { description: '3. Đèn cảnh báo đã tắt hay chưa?' },
                    { header: 'Đã tắt:', description: 'đèn cảnh báo đã tắt. Tiếp tục lái xe.' },
                    { header: 'Chưa:', description: 'đèn cảnh báo vẫn sáng. Liên hệ Đại lý Volkswagen' },
                ]
            },
            {
                image: 'https://vw-image.s3.ap-southeast-1.amazonaws.com/video/warning-light-doors.webp',
                link: {
                    name: 'Các cửa',
                    value: '/owner/warning-light/doors'
                },
                title: 'Các cửa',
                subTitle: 'Nếu đèn cảnh báo cửa màu đỏ xuất hiện đồng nghĩa với việc bạn nên dừng xe lại ngay khi có thểa với việc bạn nên dừng xe lại ngay khi có thể',
                content: [
                    { description: 'Kiểm tra tất cả các cửa đã được đóng đúng cách. Đèn cảnh báo đã tắt hay chưa?' },
                    { header: 'Đã tắt:', description: 'Đèn cảnh báo đã tắt. Không cần thực hiện gì thêm.báo đã tắt hay chưa?' },
                    { header: 'Chưa tắt:', description: 'Đèn cảnh báo đã tắt. Vui lòng liên hệ đại lý ủy quyền.' },
                ]
            },
            {
                image: 'https://vw-image.s3.ap-southeast-1.amazonaws.com/video/warning-light-red-electronic-parking-brake.webp',
                link: {
                    name: 'Hệ thống phanh tay điện tử',
                    value: '/owner/warning-light/red-electronic-parking-brake'
                },
                title: 'Hệ thống phanh tay điện tử',
                subTitle: 'Hệ thống phanh tay điện tử',
                content: [
                    { description: 'Hệ thống phanh tay điện tử kích hoạt trong khi bạn đang lái xe. Ngay khi có thể, tấp xe vào lề và tắt hệ thống phanh tay trước khi tiếp tục hành trình của bạn. Một khi tắt hệ thống phanh tay điện tử, đèn cảnh báo sẽ tắt. Nếu đèn cảnh báo tiếp tục sáng, vui lòng liên hệ xưởng dich vụ ủy quyền.' },
                ]
            },
            {
                image: 'https://vw-image.s3.ap-southeast-1.amazonaws.com/video/warning-light-engine-cooling-system.webp',
                link: {
                    name: 'Hệ thống làm mát động cơ',
                    value: '/owner/warning-light/engine-cooling-system'
                },
                title: 'Hệ thống làm mát động cơ',
                subTitle: 'Nếu đèn cảnh báo hệ thống làm mát động cơ màu đỏ xuất hiện đồng nghĩa với việc bạn nên dừng xe lại ngay khi có thể',
                content: [
                    { description: 'Tắt động cơ ngay lập tức và không tiếp tục lái xe. Kiểm tra mức dung dịch làm mát ( tham khảo sổ tay hướng dẫn hoặc liên hệ bộ phận hỗ trợ chuyên nghiệp).' },
                    { description: '1. Mức dung dịch làm mát có đúng yêu cầu?' },
                    { header: 'Đúng, mức dung dịch làm mát đúng theo yêu cầu.', description: 'Hiện tượng quá nhiệt có thể gây ra bởi một lỗi trong hệ thống làm mát. Vui lòng liên hệ bộ phận cứu hộ của Đại lý.' },
                    { header: 'Không, mức dung dịch làm mát không đủ.', description: 'Châm thêm dung dịch làm mát ( tham khảo sổ tay hướng dẫn hoăc liên hệ bộ phận hỗ trợ chuyên nghiệp). Khởi động lại động cơ. Thực hiện bước 2.' },
                    { description: '2. Đèn cảnh báo đã tắt hay chưa?' },
                    { header: 'Đã tắt: Đèn cảnh báo đã tắt.', description: 'Tiếp tục lái xe' },
                    { header: 'Chưa tắt: Đèn cảnh báo chưa tắt.', description: 'Hiện tượng quá nhiệt có thể gây ra bởi một lỗi của hệ thống làm mát. Vui lòng liên hệ Đại lý gần nhất.' },
                ]
            },
            {
                image: 'https://vw-image.s3.ap-southeast-1.amazonaws.com/video/warning-lights-engine-oil-pressure.webp',
                link: {
                    name: 'Áp suất dầu động cơ',
                    value: '/owner/warning-light/engine-oil-pressure'
                },
                title: 'Áp suất dầu động cơ',
                subTitle: 'Nếu đèn cảnh báo áp suất dầu động cơ màu đỏ xuất hiện đồng nghĩa với việc bạn nên dừng xe lại ngay khi có thể',
                content: [
                    { description: '1. Tắt động cơ ngay lập tức và không khởi động lại. Kiểm tra mức dầu động cơ' },
                    { header: 'Mức dầu đúng yêu cầu:', description: 'Vui lòng liên hệ Đại lý của bạn' },
                    { header: 'Mức dầu không đủ:', description: 'Châm thêm dầu đến khi đạt mức yêu cầu ( tham khảo sổ tay hướng dẫn và liên hệ bộ phận hỗ trợ chuyên nghiệp). Khởi động lại động cơ, để động cơ vận hành trong 5 giây, kiểm tra đèn cảnh báo, sau đó tắt động cơ. Thực hiện bước 2.' },
                    { description: '2. Đèn cảnh báo tắt sau 5 giây?' },
                    { header: 'Có:', description: 'Đèn cảnh báo đã tắt. Tiếp tục lái xe.' },
                    { header: 'Không:', description: 'Đèn cảnh báo không tắt. Vui lòng liên hệ Đại lý của bạn.' },
                ]
            },
            {
                image: 'https://vw-image.s3.ap-southeast-1.amazonaws.com/video/warning-light-front-assist.webp',
                link: {
                    name: 'Hê thống hỗ trợ phía trước xe',
                    value: '/owner/warning-light/front-assist'
                },
                title: 'Hê thống hỗ trợ phía trước xe',
                subTitle: 'Hê thống hỗ trợ phía trước xe',
                content: [
                    { description: 'Hệ thống hỗ trợ phía trước xe sẽ xác định những nguy cơ có thể va chạm. Hỗ trợ phanh khẩn cấp hoặc thực thi các hành động giúp giảm thiểu rủi ro' },
                    { description: 'Đèn cảnh báo sẽ tắt khi nguy cơ va chạm không còn nữa. Nếu đèn cảnh báo không tự tắt, vui lòng liên hệ đại lý ủy quyền gần nhất để được hỗ trợ.' },
                ]
            },
            {
                image: 'https://vw-image.s3.ap-southeast-1.amazonaws.com/video/warning-light-ignition-switch.webp',
                link: {
                    name: 'Công tắc khóa điện',
                    value: '/owner/warning-light/ignition-switch'
                },
                title: 'Công tắc khóa điện',
                subTitle: 'Nếu đèn cảnh báo công tắc khóa điện màu đỏ xuất hiện đồng nghĩa với việc bạn nên dừng xe lại ngay khi có thể',
                content: [
                    { header: '1. Đèn cảnh báo màu gì xuất hiện?' },
                    { header: 'Màu đỏ:', description: 'Không tắt khóa điện vì bạn sẽ không thể bật lại khóa điện. Lái xe không dừng đến đại lý ủy quyền gần nhất để kiểm tra toàn bộ hệ thống.' },
                    { header: 'Màu vàng:', description: 'Đã xuất hiện lỗi trên bộ công tắc khóa điện. Lái xe không dừng đến đại lý ủy quyền gần nhất để kiểm tra toàn bộ hệ thống.' },
                ]
            },
            {
                image: 'https://vw-image.s3.ap-southeast-1.amazonaws.com/video/warning-light-power-steering-system.webp',
                link: {
                    name: 'Hệ thống trợ lực lái',
                    value: '/owner/warning-light/power-steering-system'
                },
                title: 'Hệ thống trợ lực lái',
                subTitle: 'Hệ thống trợ lực lái',
                content: [
                    { header: '', description: '1. Tắt và rút chìa khóa trong khoảng 30 giây và rồi khởi động lại động cơ. Đèn cảnh báo đã tắt hay chưa?' },
                    { header: 'Đã tắt:', description: 'Đèn cảnh báo đã tắt. Vấn đề đã được khắc phục.' },
                    { header: 'Chưa tắt:', description: 'Đèn cảnh bảo vẫn sáng. Thực hiện bước 2.' },
                    { header: '', description: '2. Bạn có thể lái xe đến đại lý vụ ủy quyền một cách an toàn?' },
                    { header: 'Có thể:', description: 'Nếu bạn có thể lái xe một cách an toàn, vui lòng chú ý trong lúc lái xe.' },
                    { header: 'Không thể:', description: 'Nếu bạn cảm thấy không an tâm để lái xe, vui lòng liên hệ Đại lý uỷ quyền.' },
                ]
            },
            {
                image: 'https://vw-image.s3.ap-southeast-1.amazonaws.com/video/warning-light-seat-belt-buckles.webp',
                link: {
                    name: 'Khóa dây đai an toàn',
                    value: '/owner/warning-light/seat-belt-buckles'
                },
                title: 'Khóa dây đai an toàn',
                subTitle: 'Nếu đèn cảnh báo khóa dây đai an toàn màu đỏ xuất hiện đồng nghĩa với việc bạn nên dừng xe lại ngay khi có thể',
                content: [
                    { description: 'Đèn cảnh báo xuất hiện nếu người lái xe hoặc hành khách ngồi phía trước không thắt dây đai an toàn, đảm bảo các dây đai an toàn đã được cài.' },
                    { header: '1.', description: 'Người lái xe ( và nếu có hành khách ngồi phía trước) đã thắt dây đai an toàn đúng cách?' },
                    { header: 'Đúng:', description: 'Dây đai an toàn đã được cài đúng cách: thực hiện câu hỏi 2.' },
                    { header: 'Sai:', description: 'Dây đai an toàn không được cài đúng cách. Cài dây đai an toàn đúng cách và thực hiện câu hỏi 2.' },
                    { header: '2.', description: 'Đèn cảnh báo đã tắt?' },
                    { header: 'Đúng:', description: 'Hệ thống không cần kiểm tra gì thêm.' },
                    { header: 'Sai:', description: 'Vui lòng liên hệ đại lý ủy quyền.' },
                ]
            },
            {
                image: 'https://vw-image.s3.ap-southeast-1.amazonaws.com/video/warning-light-steering-lock.webp',
                link: {
                    name: 'Hệ thống khóa cơ cấu lái',
                    value: '/owner/warning-light/steering-lock'
                },
                title: 'Hệ thống khóa cơ cấu lái',
                subTitle: 'Nếu đèn cảnh báo khóa cơ cấu lái màu đỏ xuất hiện đồng nghĩa với việc bạn nên dừng xe lại ngay khi có thể',
                content: [
                    { header: '1. Đèn cảnh báo màu gì xuất hiên?' },
                    { description: 'Màu đỏ: Không tiếp tục lái xe. Vui lòng liên hệ đại lý ủy quyền.' },
                    { description: 'Màu vàng: Xảy ra lỗi bên trong hệ thống khóa cơ cấu lái. Lái xe không dừng đếnđại lý ủy quyền để kiểm tra lại hệ thống' },
                ]
            },
            {
                image: 'https://vw-image.s3.ap-southeast-1.amazonaws.com/video/warning-light-vehicle-charging-system.webp',
                link: {
                    name: 'Hệ thống sạc trên xe',
                    value: '/owner/warning-light/vehicle-charging-system'
                },
                title: 'Hệ thống sạc trên xe',
                subTitle: 'Nếu đèn cảnh báo hệ thống sạc trên xe màu đỏ xuất hiện đồng nghĩa với việc bạn nên dừng xe lại ngay khi có thể',
                content: [
                    { description: 'Xảy ra lỗi ở máy phát hoặc lỗi trong hệ thống.' },
                    { description: '1. Có thể khởi động động cơ hay không?' },
                    { header: 'Có thể: Động cơ hoạt động.', description: 'Lái xe không dừng đến xưởng dịch vụ ủy quyền. Hạn chế sử dụng các thiết bị điện không cần thiết vì  có thể sẽ gây ra hết điện bình ắc quy.' },
                    { header: 'Không thể: Động cơ không thể khởi động.', description: 'Vui lòng liên hệ đại lý  uỷ quyền của Volkswagen.' },
                ]
            },
            {
                image: 'https://vw-image.s3.ap-southeast-1.amazonaws.com/video/warning-light-adaptive-cruise-control.webp',
                link: {
                    name: 'Hệ thống kiểm soát tốc độ hành trình thông minh',
                    value: '/owner/warning-light/adaptive-cruise-control'
                },
                title: 'Hệ thống kiểm soát tốc độ hành trình thông minh',
                subTitle: 'Đèn cảnh báo hệ thống kiểm soát tốc độ hành trình thông minh (ACC) màu vàng xuất hiện báo hiệu hệ thống cần phải kiểm tra',
                content: [
                    { description: 'ACC không thể hoạt động vào thời điểm hiện tại. Dừng xe lại ngay khi có thể và tắt động cơ. Khởi động lại xe và kiểm tra hệ thống ra-đa liệu có bị bụi che phủ. Nếu đèn cảnh báo tiếp tục sáng, vui lòng tới Đại lý ủy quyền gần nhất để được hỗ trợ.' },
                ]
            },
            {
                image: 'https://vw-image.s3.ap-southeast-1.amazonaws.com/video/warning-light-adaptive-light-system.webp',
                link: {
                    name: 'Hê thống đèn pha thông minh',
                    value: '/owner/warning-light/adaptive-light-system'
                },
                title: 'Hê thống đèn pha thông minh',
                subTitle: 'Đèn cảnh báo hệ thống đèn pha thông minh màu vàng xuất hiện báo hiệu hệ thống cần phải kiểm tra',
                content: [
                    { description: 'Đèn pha không thể tự động điều chỉnh góc chiếu. Điều chỉnh góc chiếu đèn pha sẽ được thực hiện thủ công.' },
                    { description: 'Vui lòng liên hệ đại lý ủy quyền.' },
                ]
            },
            {
                image: 'https://vw-image.s3.ap-southeast-1.amazonaws.com/video/warning-light-adaptive-suspension-dampers.webp',
                link: {
                    name: 'Hệ thống giảm chấn thông minh',
                    value: '/owner/warning-light/adaptive-suspension-dampers'
                },
                title: 'Hệ thống giảm chấn thông minh',
                subTitle: 'Hệ thống giảm chấn thông minh',
                content: [
                    { description: 'Vui lòng liên hệ Đại lý ủy quyền để được sửa chữa' },
                ]
            },
            {
                image: 'https://vw-image.s3.ap-southeast-1.amazonaws.com/video/warning-light-airbags.webp',
                link: {
                    name: 'Túi khí hành khách',
                    value: '/owner/warning-light/airbags'
                },
                title: 'Túi khí hành khách',
                subTitle: 'Đèn báo túi khí hành khách sáng màu vàng nghĩa là hệ thống cần phải kiểm tra',
                content: [
                    { description: 'Chức năng túi khí hành khách phía trước đã bị ngắt' },
                    { description: 'Kiểm tra xem túi khí hành khách phía trước có nên được kích hoạt và đưa ra biện pháp kiểm tra phù hợp.' },
                    { description: 'Một khi túi khí được kích hoạt lại, đèn báo sẽ mất đi. Nếu đèn báo vẫn sáng, vui lòng liên hệ Đại lý ủy quyền để được sửa chữa.' },
                ]
            },
            {
                image: 'https://vw-image.s3.ap-southeast-1.amazonaws.com/video/warning-light-airbag-and-seatbelt-system.webp',
                link: {
                    name: 'Hệ thống túi khí và đai an toàn',
                    value: '/owner/warning-light/airbag-and-seat-belt-system'
                },
                title: 'Hệ thống túi khí và đai an toàn',
                subTitle: 'Đèn báo túi khí và đai an toàn sáng lên nghĩa là hệ thống cần phải kiểm tra',
                content: [
                    { description: 'Nếu đèn cảnh báo sáng lên hoặc chớp liên tục, nghĩa là có lỗi ở hệ thống túi khí hoặc đai an toàn.' },
                    { description: 'Vui lòng lái xe cẩn thận và đến Đại lý ủy quyền ngay lập tức để được sửa chữa.' },
                    { description: 'Lỗi túi khí hoặc đai an toàn phải được kiểm tra ngay lập tức, nếu không  hệ thống có thể hoạt động sai và nguy cơ dẫn đến tai nạn. ' },
                ]
            },
            {
                image: 'https://vw-image.s3.ap-southeast-1.amazonaws.com/video/warning-light-air-suspension.webp',
                link: {
                    name: 'Hệ thống treo khí nén',
                    value: '/owner/warning-light/air-suspension'
                },
                title: 'Hệ thống treo khí nén',
                subTitle: 'Đèn báo hệ thống tren khí nén sáng màu vàng nghĩa là hệ thống cần phải kiểm tra',
                content: [
                    { description: 'Xảy ra lỗi hệ thống và việc chở hàng, độ ổn định của xe cũng như khoảng sáng gầm xe sẽ bị ảnh hưởng.' },
                    { description: 'Vui lòng lái xe cẩn thận và chậm rãi đến đại lý ủy quyền để được xử lý lỗi hệ thống.' },
                ]
            },
            {
                image: 'https://vw-image.s3.ap-southeast-1.amazonaws.com/video/warning-light-anti-lock-brake-system.webp',
                link: {
                    name: 'Hệ thống chống bó cứng phanh',
                    value: '/owner/warning-light/anti-lock-brake-system'
                },
                title: 'Hệ thống chống bó cứng phanh',
                subTitle: 'Đèn báo hệ thống chống bó cứng phanh sáng màu vàng nghĩa là hệ thống cần phải kiểm tra',
                content: [
                    { description: 'Lỗi hệ thống chống bó cứng phanh.' },
                    { description: 'Xe vận có thể phanh bình thường, tuy nhiên chức năng ABS và ESP sẽ không hoạt động.' },
                    { description: 'Vui lòng lái xe cẩn thận và chậm rãi đến đại lý ủy quyền để được xử lý lỗi hệ thống ABS.' },
                ]
            },
            {
                image: 'https://vw-image.s3.ap-southeast-1.amazonaws.com/video/my_car-warning_lights-blind_spot_monitor.webp',
                link: {
                    name: 'Hệ thống cảnh báo điểm mù',
                    value: '/owner/warning-light/blind-spot-monitor'
                },
                title: 'Hệ thống cảnh báo điểm mù',
                subTitle: 'Đèn báo hệ thống cảnh báo điểm mù sáng màu vàng nghĩa là hệ thống cần phải kiểm tra',
                content: [
                    { description: 'Khi đèn báo hệ thống cảnh báo điểm mù sáng lên và nhanh chóng tắt đi, nghĩa là hệ thống đã được kích hoạt và sẵng sàng để sử dụng.' },
                    { description: 'Nếu đèn báo vẫn sáng, nghĩa là có đối tượng đang ở trong điểm mù của bạn. Nên chú ý quan sát kĩ càng trước khi di chuyển, ví dụ như lúc chuyển làn hoặc khi quay xe…' },
                    { description: 'Nếu đèn báo vẫn sáng liên tục, vui lòng liện hệ với Đại lý ủy quyền để được sửa chữa.' },
                ]
            },
            {
                image: 'https://vw-image.s3.ap-southeast-1.amazonaws.com/video/my_car-warning_lights-brake_lights.webp',
                link: {
                    name: 'Đèn báo phanh',
                    value: '/owner/warning-light/brake-lights'
                },
                title: 'Đèn báo phanh',
                subTitle: 'Đèn báo hệ thống báo  phanh sáng màu vàng nghĩa là hệ thống cần phải kiểm tra',
                content: [
                    { description: 'Đèn báo này xuất hiện khi bóng đèn phanh bị hỏng.' },
                    { description: 'Kiểm tra hoạt động của tất cả các đèn báo phanh.' },
                    { description: 'Các đèn báo phanh bị hỏng cần phải thay thế ngay lập tức.' },
                ]
            },
            {
                image: 'https://vw-image.s3.ap-southeast-1.amazonaws.com/video/my_car-warning_lights-brake_pad_monitoring.webp',
                link: {
                    name: 'Hệ thống cảnh báo mòn bố phanh',
                    value: '/owner/warning-light/brake-pad-monitoring'
                },
                title: 'Hệ thống cảnh báo mòn bố phanh',
                subTitle: 'Đèn báo hệ thống cảnh báo mòn bố phanh sáng lên nghĩa là hệ thống cần phải kiểm tra',
                content: [
                    { description: 'Đèn báo chỉ ra rằng bố phanh đã bị mòn' },
                    { description: 'Vui lòng liên hệ Đại lý ủy quyền để được sửa chữa.' },
                ]
            },
            {
                image: 'https://vw-image.s3.ap-southeast-1.amazonaws.com/video/my_car-warning_lights-bulb_monitoring.webp',
                link: {
                    name: 'Hệ thống chiếu sáng',
                    value: '/owner/warning-light/bulb-monitoring'
                },
                title: 'Hệ thống chiếu sáng',
                subTitle: 'Đèn báo hệ thống chiếu sáng sáng màu vàng nghĩa là hệ thống cần phải kiểm tra',
                content: [
                    { description: 'Kiểm tra hoạt động của tất cả các bóng đèn bên ngoài xe.' },
                    { description: 'Bóng đèn bị hỏng cần phải thay thế ngay lập tức.' },
                ]
            },
            {
                image: 'https://vw-image.s3.ap-southeast-1.amazonaws.com/video/my_car-warning_lights-convertible_roof.webp',
                link: {
                    name: 'Hệ thống mui xếp',
                    value: '/owner/warning-light/convertible-roof'
                },
                title: 'Hệ thống mui xếp',
                subTitle: 'Đèn báo hệ thống mui xếp sáng màu vàng nghĩa là hệ thống cần phải kiểm tra',
                content: [
                    { description: 'Đèn báo sẽ sáng lên trong lúc mui xếp được mở hoặc đóng lại. Khi mui xếp được mở hoặc đóng lại hoàn toàn, đèn báo sẽ mất đi. Nếu đèn báo vẫn sáng liên tục, nghĩa là mui xếp chưa được mở hoàn toàn hoặc xảy ra lỗi hệ thống.' },
                    { description: '1. Đèn báo có sáng liên tục hay không?' },
                    { header: 'Có:', description: 'Đèn báo sáng liên tục. Mở mui xếp lại lần nữa và nhấn giữ công tắc cho đến khi mui xếp được mở hoặc đóng hoàn toàn. Chuyển sang bước 2.' },
                    { header: 'Không:', description: 'Đèn báo không sáng. Hệ thống bình thường. Đèn báo sáng lên trong lúc mui xếp hoạt động. Vui lòng tham khảo trong số tay hướng dẫn sử dụng xe để biết thêm thông tin và bạn có thể tiếp tục lái xe.' },
                    { description: '2. Đèn báo vẫn sáng?' },
                    { header: 'Có:', description: 'Đèn báo vẫn sáng. Vui lòng liên hệ Đại lý ủy quyền để được sửa chữa' },
                    { header: 'Không:', description: 'Đèn báo không sáng. Hệ thống bình thường. Đèn báo sáng lên trong lúc mui xếp hoạt động. Vui lòng tham khảo trong số tay hướng dẫn sử dụng xe để biết thêm thông tin và bạn có thể tiếp tục lái xe.' },
                ]
            },
            {
                image: 'https://vw-image.s3.ap-southeast-1.amazonaws.com/video/my_car-warning_lights-diesel_particulate_filter.webp',
                link: {
                    name: 'Bộ lọc khí thải động cơ Dielsel',
                    value: '/owner/warning-light/diesel-particulate-filter'
                },
                title: 'Bộ lọc khí thải động cơ Dielsel',
                subTitle: 'Đèn báo hệ thống lọc khí thải động cơ diesel sáng màu vàng nghĩa là hệ thống cần phải kiểm tra',
                content: [
                    { description: '1. Có bao nhiêu đèn báo sáng?' },
                    { header: 'Một:', description: 'Chuyển sang bước 2' },
                    { header: 'Nhiều hơn một:', description: 'Vui lòng liện hệ đại lý Volkswagen uỷ quyền.' },
                    { description: '2. Đèn báo nhiên liệu có sáng hay không?' },
                    { header: 'Có:', description: 'Đèn báo sáng. Nạp nhiên liệu và chuyển sang bước 3.' },
                    { header: 'Không:', description: 'Đèn báo không sáng. Chuyển sang bước 3.' },
                    { header: '', description: '3. Lái xe ở tốc độ ít nhất là 60 km/h. Tốc động động cơ trong khoảng từ 1800-2500 vòng/phút, trong vòng ít nhất 15 phút cho đến khi đèn báo mất đi. (Hộp số tự động: Lựa chọn chế độ thể thao) Đèn báo có mất đi hay không?' },
                    { header: 'Có:', description: 'Đèn báo mất đi. Bộ lọc đã được phục hồi' },
                    { header: 'Không:', description: 'Chuyển sang bước 4.' },
                    { description: '4.Bạn có thể đưa xe đến Đại lý ủy quyền gần nhất hay không?' },
                    { header: 'Có:', description: 'Nếu bạn có thể đưa xe đến, vui lòng lái xe cẩn thận.' },
                    { header: 'Không:', description: 'Nếu bạn không thể đưa xe đến, vui lòng liên hệ với Đại lý Volkswagen.' },
                ]
            },
            {
                image: 'https://vw-image.s3.ap-southeast-1.amazonaws.com/video/my_car-warning_lights-electronic_parking_brake.webp',
                link: {
                    name: 'Hệ thống phanh đỗ xe điện tử',
                    value: '/owner/warning-light/electronic-parking-brake'
                },
                title: 'Hệ thống phanh đỗ xe điện tử',
                subTitle: 'Đèn báo hệ thống phanh đỗ xe điện tử sáng màu vàng nghĩa là hệ thống cần phải kiểm tra',
                content: [
                    { description: 'Có lỗi xảy ra ở hệ thống phanh đỗ xe điện tử.' },
                    { description: 'Ngay lập tức thực hiện các biện pháp an toàn, đưa xe vào lề đường và liên hệ vơi đại lý ủy quyền để được sửa chữa.' },
                ]
            },
            {
                image: 'https://vw-image.s3.ap-southeast-1.amazonaws.com/video/my_car-warning_lights-eletronic_stability_programme.webp',
                link: {
                    name: 'Hệ thống cân bằng điện tử (ESP)',
                    value: '/owner/warning-light/eletronic-stability-programme'
                },
                title: 'Hệ thống cân bằng điện tử (ESP)',
                subTitle: 'Đèn báo hệ thống cân bằng điện tử sáng màu vàng nghĩa là hệ thống cần phải kiểm tra',
                content: [
                    { description: '1. Đèn báo ESP có áng liên tục hoặc nó có chớp trong lúc lái xe hay không?' },
                    { header: 'Thỉnh thoảng có chớp:', description: 'Nếu đèn ESP chớp trong lúc xe đang di chuyển. Hệ thống ESP hoặc hệ thống kiểm soát lực kéo đang can thiệp. Đây là đặc điểm bình thường.' },
                    { header: 'Đèn sáng liên tục:', description: 'Đèn báo ESP sáng liên tục khi công tắc ngắt chức năng ESP được nhấn. ESP có thể tái kích hoạt bằng việc tắt và bật lại công tắc khởi động. Nếu đèn báo ESP mất đi, Hệ thống hoạt động bình thường. Chuyển sang bước 2.' },
                    { description: '2. Đèn báo ESP vẫn sáng?' },
                    { header: 'Có:', description: 'Đèn báo vẫn sáng. Xe vẫn có thể phanh bình thường' },
                    { header: 'Không:', description: 'Đèn báo không sáng. Bạn không cần làm gì nữa và có thể tiếp tục lái xe. Nếu đèn ESP sáng liên tục (và chức năng ESP/ESC không bị ngắt), Bạn nên liên hệ Đại lý ủy quyền của Volkswagen để được kiểm tra hệ thống.' },
                ]
            },
            {
                image: 'https://vw-image.s3.ap-southeast-1.amazonaws.com/video/my_car-warning_lights-emissions_control_lamp.webp',
                link: {
                    name: 'Đèn báo hệ thống kiểm soát khí thải/ kiểm soát động cơ',
                    value: '/owner/warning-light/emissions-control-lamp'
                },
                title: 'Đèn báo hệ thống kiểm soát khí thải/ kiểm soát động cơ',
                subTitle: 'Đèn báo hệ thống kiểm soát khí thải sáng màu vàng nghĩa là hệ thống cần phải kiểm tra',
                content: [
                    { description: '1. Đèn báo chớp hay sáng liên tục?' },
                    { header: 'Sáng liên tục:', description: 'Rút chìa khóa ra khoảng 30s sau đó cắm lại và khởi động động cơ. Chuyển sang bước 2' },
                    { header: 'Chớp:', description: 'Chuyển sang bước 2.' },
                    { description: '2. Xe có rung hoặc bị giảm công suất hay không?' },
                    { header: 'Có:', description: 'Liện hệ đội cứu hộ' },
                    { header: 'Không:', description: 'Chuyển sang bước 3.' },
                    { description: '3. Bạn có thể lái xe an toàn đến đại lý ủy quyền?' },
                    { header: 'Có:', description: 'Lái xe cẩn thận đến Đại lý ủy quyền.' },
                    { header: 'Không:', description: 'Vui lòng liên hệ với Đại lý' },
                ]
            },
            {
                image: 'https://vw-image.s3.ap-southeast-1.amazonaws.com/video/my_car-warning_lights-engine_management_lamp.webp',
                link: {
                    name: 'Hệ thống điều khiển động cơ',
                    value: '/owner/warning-light/engine-management-lamp'
                },
                title: 'Hệ thống điều khiển động cơ',
                subTitle: 'Đèn báo hệ thống điều khiển động cơ sáng màu vàng nghĩa là hệ thống cần phải kiểm tra',
                content: [
                    { description: 'Đèn báo hệ thống điều khiển động cơ sáng lên (Chỉ áp dụng cho động cơ xăng)' },
                    { description: 'Vui lòng lái xe cẩn thận và chậm rãi đến đại lý ủy quyền để được kiểm tra.' },
                ]
            },
            {
                image: 'https://vw-image.s3.ap-southeast-1.amazonaws.com/video/my_car-warning_lights-engine_oil_level.webp',
                link: {
                    name: 'Mức dầu động cơ',
                    value: '/owner/warning-light/engine-oil-level'
                },
                title: 'Mức dầu động cơ',
                subTitle: 'Đèn cảnh báo mức dầu động cơ hiển thị màu vàng nghĩa là bạn cần dừng xe nhanh nhất  có thể để đảm bảo an toàn',
                content: [
                    { description: 'Đèn cảnh báo này sẽ sáng liên tục hay nhấp nháy?' },
                    { description: 'Khi đèn cảnh báo sáng liên tục: bạn nên bổ sung/ thay dầu động cơ sớm nhất có thể (tham khảo sổ tay hướng dẫn sử dụng hoặc liên hệ đại lý  ủy quyền Volkswagen)' },
                    { description: 'Khi đèn cảnh báo sáng nhấp nháy: cảm biến mức dầu động cơ có thể bị lỗi. Hãy kiểm tra mức dầu động cơ và bổ sung/ thay thế (tham khảo sổ tay hướng dẫn sử dụng hoặc liên hệ đại lý  ủy quyền Volkswagen)' },
                ]
            },
            {
                image: 'https://vw-image.s3.ap-southeast-1.amazonaws.com/video/my_car-warning_lights-front_assist.webp',
                link: {
                    name: 'Hỗ trợ phía trước',
                    value: '/owner/warning-light/front-assist'
                },
                title: 'Hỗ trợ phía trước',
                subTitle: 'Hỗ trợ phía trước',
                content: [
                    { description: 'Hỗ trợ phía trước đã bị vô hiệu hóa và hệ thống này sẽ không cảnh báo về những rủi ro có thể xảy ra. Lái xe cần hết sức thận trọng khi di chuyển.' },
                    { description: 'Nếu bạn không thể kích hoạt tính năng Hỗ trợ phía trước, vui lòng liên hệ đại lý ủy quyền gần nhất của Volkswagen để được hỗ trợ.' },
                ]
            },
            {
                image: 'https://vw-image.s3.ap-southeast-1.amazonaws.com/video/my_car-warning_lights-fuel_tank_cap.webp',
                link: {
                    name: 'Đèn vàng cảnh báo nắp thùng nhiên liệu',
                    value: '/owner/warning-light/fuel-tank-cap'
                },
                title: 'Đèn vàng cảnh báo nắp thùng nhiên liệu',
                subTitle: 'Đèn vàng cảnh báo nắp thùng nhiên liệu hiện sáng có nghĩa là cần phải kiểm tra',
                content: [
                    { description: 'Nắp thùng nhiên liệu chưa được đóng đúng cách.' },
                    { description: 'Để thực kiện thao tác đúng, cần phải kéo nắp ra và đóng lại một cách an toàn' },
                    { description: 'Trường hợp vẫn hiện đèn vàng, vui lòng liên hệ đại lý được ủy quyền gần nhất để được hỗ trợ.' },
                ]
            },
            {
                image: 'https://vw-image.s3.ap-southeast-1.amazonaws.com/video/my_car-warning_lights-diesel_engine_management_lamp.webp',
                link: {
                    name: 'Bugi sấy / Đèn điểu khiển động cơ Diesel',
                    value: '/owner/warning-light/diesel-engine-management-lamp'
                },
                title: 'Bugi sấy / Đèn điểu khiển động cơ Diesel',
                subTitle: 'Đèn vàng điều khiển động cơ diesel sáng có nghĩa là cần phải kiểm tra',
                content: [
                    { description: 'Có 2 trường hợp: Đèn này xuất hiện khi bật ON công tắc khởi động xe hay lúc động cơ đang nổ?' },
                    { header: 'Nếu khi bật công tắc ON:', description: 'Đây là hiện tượng bình thường. Đèn này sẽ sáng một vài giây rồi tắt để báo rằng bugi sấy đang làm nóng động cơ.' },
                    { header: 'Nếu là khi động cơ đang nổ:', description: 'Đây là lỗi của hệ thống điều khiển động cơ. Nếu đang trong khi nổ máy mà đèn này hiện lên hoặc nhấp nháy. Hãy lái xe chậm lại và đến đại lý  ủy quyền  để kiểm tra sớm nhất có thể.' },
                ]
            },
            {
                image: 'https://vw-image.s3.ap-southeast-1.amazonaws.com/video/my_car-warning_lights-headlight_range_control.webp',
                link: {
                    name: 'Bộ điều khiển khoảng sáng của đèn phía trước',
                    value: '/owner/warning-light/headlight-range-control'
                },
                title: 'Bộ điều khiển khoảng sáng của đèn phía trước',
                subTitle: 'Đèn cảnh báo xuất hiện có nghĩa là hệ thống cần phải kiểm tra',
                content: [
                    { description: 'Có lỗi trong hệ thống điều khiển khoảng sáng của đèn phía trước .' },
                    { description: ' Vui lòng liên hệ đại lý ủy quyền của Volkswagen để được hỗ trợ.' },
                ]
            },
            {
                image: 'https://vw-image.s3.ap-southeast-1.amazonaws.com/video/my_car-warning_lights-key_not_in_vehicle.webp',
                link: {
                    name: 'Chìa khóa không có trong xe',
                    value: '/owner/warning-light/key-not-in-vehicle'
                },
                title: 'Chìa khóa không có trong xe',
                content: [
                    { description: 'Đèn báo này chỉ xuất hiện ở những xe sử dụng chìa khóa thông minh, và chìa khoá được lấy ra khỏi xe khi động cơ đang nổ.' },
                    { description: 'Đảm bảo rằng chìa khóa đang nằm trong xe nếu không sẽ không thể khởi động lại động cơ.' },
                ]
            },
            {
                image: 'https://vw-image.s3.ap-southeast-1.amazonaws.com/video/my_car-warning_lights-lane_assist.webp',
                link: {
                    name: 'Hỗ trợ giữ làn đường',
                    value: '/owner/warning-light/lane-assist'
                },
                title: 'Hỗ trợ giữ làn đường',
                content: [
                    { description: 'Đèn này nổi lên khi hệ thống hỗ trợ giữ làn đường được bật ON và không nhận diện được các điểm đánh dấu dưới làn đường.' },
                    { description: 'Nếu đèn này nổi lên và kèm theo thông báo "System Fault" - Lỗi hệ thống, vui lòng liên lạc với đại lý được ủy quyền gần nhất.' },
                ]
            },
            {
                image: 'https://vw-image.s3.ap-southeast-1.amazonaws.com/video/my_car-warning_lights-low_fuel_level.webp',
                link: {
                    name: 'Mức nhiên liệu thấp',
                    value: '/owner/warning-light/low-fuel-level'
                },
                title: 'Mức nhiên liệu thấp',
                subTitle: 'Cần phải kiểm tra',
                content: [
                    { description: 'Nhiên liệu trong thùng đã chạm xuống mức dự trữ.' },
                    { description: 'Hãy di chuyển đến trạm xăng nhanh nhất có thể và nạp nhiên liệu vào thùng.' },
                    { description: 'Mũi tên màu đỏ của cảnh báo có nghĩa là nhiên liệu dự trữ đang được sử dụng. Đổ đầy bình càng sớm càng tốt.' },
                    { description: 'Nếu cảnh báo này vẫn còn khi bình nhiên liệu của bạn đã được nạp đầy, vui lòng liên hệ với đại lý được ủy quyền gần nhất.' },
                ]
            },
            {
                image: 'https://vw-image.s3.ap-southeast-1.amazonaws.com/video/my_car-warning_lights-power_steering.webp',
                link: {
                    name: 'Hệ thống trợ lực lái',
                    value: '/owner/warning-light/power-steering'
                },
                title: 'Hệ thống trợ lực lái',
                content: [
                    { description: '1. Bình ắc quy có bị ngắt kết nối, bị xả điện hoặc bị kích điện không?' },
                    { header: 'Đúng:', description: 'Bình ắc quy có bị ngắt kết nối, bị xả điện hoặc bị kích điện. Đánh vô lăng hết về phía trái, sau đó đánh hết về bên phải, và lái xe trong khoảng ngắn với tốc độ 15-20 km/h. Đèn sẽ được tắt. Chuyển đến bước 2.' },
                    { header: 'Sai:', description: 'Chuyển tới bước 3.' },
                    { description: '2. Đèn đã tắt?' },
                    { header: 'Đúng:', description: ' Đèn đã tắt, vấn đề đã được khắc phục. Vui lòng đến đại lý  để kiểm tra lại hệ thống.' },
                    { header: 'No:', description: 'Đèn chưa tắt, chuyển đến bước 3.' },
                    { description: '3. Có thể lái xe đến một đại lý ủy quyền một cách an toàn không?' },
                    { header: 'Có:', description: 'Hãy lái xe một cách an toàn đến đại lý ủy quyền của Volkswagen.' },
                    { header: 'Không:', description: 'Liện hệ với đại lý ủy quyền của Volkswagen.' },
                ]
            },
            {
                image: 'https://vw-image.s3.ap-southeast-1.amazonaws.com/video/my_car-warning_lights-press_clutch_pedal.webp',
                link: {
                    name: 'Bàn đạp ly hợp',
                    value: '/owner/warning-light/press-clutch-pedal'
                },
                title: 'Bàn đạp ly hợp',
                content: [
                    { description: 'Đèn vàng này chỉ được trang bị cho những xe có  bàn đạp ly hợp (số sàn)' },
                    { description: 'Đạp và giữ bàn đạp thắng trong khi  di chuyển cần số khỏi số P (Parking)' },
                ]
            },
            {
                image: 'https://vw-image.s3.ap-southeast-1.amazonaws.com/video/my_car-warning_lights-rain_and_light_sensor.webp',
                link: {
                    name: 'Cảm biến ánh sáng và mưa',
                    value: '/owner/warning-light/rain-and-light-sensor'
                },
                title: 'Cảm biến ánh sáng và mưa',
                subTitle: 'Đèn hiện lên chỉ để biểu thị thông tin',
                content: [
                    { description: 'Đèn và gạt mưa sẽ không tự động kích hoạt, nhưng sẽ kích hoạt được bằng tay.' },
                    { description: 'Vui lòng liên hệ với đại lý được ủy quyền.' },
                ]
            },
            {
                image: 'https://vw-image.s3.ap-southeast-1.amazonaws.com/video/my_car-warning_lights-rear_fog.webp',
                link: {
                    name: 'Đèn sương mù',
                    value: '/owner/warning-light/rear-fog-light'
                },
                title: 'Đèn sương mù',
                subTitle: 'Đèn này hiển thị lên  có nghĩa là cần phải kiểm tra',
                content: [
                    { description: 'Đèn này sáng lên có nghĩa là đèn sương mù sau đang bật .' },
                    { description: 'Chỉ bật đèn sương mù phía sau khi hoạt động trong vùng có sương mù, để tránh làm chói mắt các phương tiện phía sau bạn.' },
                ]
            },
            {
                image: 'https://vw-image.s3.ap-southeast-1.amazonaws.com/video/my_car-warning_lights-rear_spoiler.webp',
                link: {
                    name: 'Cánh lướt gió phía sau',
                    value: '/owner/warning-light/rear-spoiler'
                },
                title: 'Cánh lướt gió phía sau',
                subTitle: 'Đèn này hiện lên có nghĩa là cần phải kiểm tra ',
                content: [
                    { description: 'Có lỗi trong hệ thống cánh hướng gió phía sau.' },
                    { description: 'Vui lòng liên hệ đại lý được ủy quyền. Không chạy vượt quá 120km/h.' },
                ]
            },
            {
                image: 'https://vw-image.s3.ap-southeast-1.amazonaws.com/video/my_car-warning_lights-adblue_yellow.webp',
                link: {
                    name: 'Nạp thêm Adblue',
                    value: '/owner/warning-light/adblue-yellow'
                },
                title: 'Nạp thêm Adblue',
                subTitle: 'Đèn này hiện lên có nghĩa là cần phải kiểm tra',
                content: [
                    { description: 'Đèn vàng này xuất hiện khi quãng đường có thể chạy được với lượng AdBlue còn lại là 1000 mile (~16000 km) .Cảnh báo này được lặp lại mỗi 31 miles (57 km) kèm với âm thanh. Nếu không có hành động khắc phục, cảnh báo sẽ chuyển sang màu đỏ; khi đó sẽ không khởi động lại được xe khi đã tắt chìa khóa.' },
                    { description: 'Đây không phải là lỗi, nhưng là một tính năng cần thiết của hệ thống. Nếu đã đến giai đoạn này thì xe cần phải thực thiện các thao tác cần thiết để có thể khởi động lại. Thông tin chi tiết có trong sổ tay hướng dẫn sử dụng xe.' },
                ]
            },
            {
                image: 'https://vw-image.s3.ap-southeast-1.amazonaws.com/video/my_car-warning_lights-adblue_white.webp',
                link: {
                    name: 'Nạp thêm AdBlue',
                    value: '/owner/warning-light/adblue-white'
                },
                title: 'Nạp thêm AdBlue',
                subTitle: 'Nạp thêm AdBlue',
                content: [
                    { description: 'Đèn vàng này xuất hiện khi quãng đường có thể chạy được với lượng AdBlue còn lại là 1500 mile (~24000 km), Cảnh báo này được lặp lại mỗi 62 miles (115 km) cho đến khi giới hạn xuống còn 1000 miles (1600 km) cảnh báo sẽ chuyển thành màu vàng.' },
                    { description: 'Cảnh báo này được lặp lại mỗi 31 miles (57 km) kèm với âm thanh. Nếu không có hành động khắc phục, cảnh báo sẽ chuyển sang màu đỏ; khi đó sẽ không khởi động lại được xe khi đã tắt chìa khóa.' },
                    { description: 'Đây không phải là lỗi, nhưng là một tính năng cần thiết của hệ thống. Nếu đã đến giai đoạn này thì xe cần phải thực thiện các thao tác cần thiết để có thể khởi động lại. Thông tin chi tiết có trong sổ tay hướng dẫn sử dụng xe.' },
                ]
            },
            {
                image: 'https://vw-image.s3.ap-southeast-1.amazonaws.com/video/my_car_warning_lights-towing_hitch.webp',
                link: {
                    name: 'Móc kéo xe',
                    value: '/owner/warning-light/towing-hitch'
                },
                title: 'Móc kéo xe',
                subTitle: 'Đèn này hiện lên có nghĩa là cần phải kiểm tra',
                content: [
                    { description: 'Kiểm tra móc kéo xe có được để lại đúng vị trí không? Rút móc kéo ra và gắn lại. Đèn cảnh báo có tắt không?' },
                    { header: 'Có:', description: 'Đèn cảnh báo đã tắt. Tiếp tục chạy xe bình thường.' },
                    { header: 'Không:', description: 'Đèn không tắt. Không gắn thêm vật kéo. Vui lòng liên hệ với đại lý ủy quyền.' },
                ]
            },
            {
                image: 'https://vw-image.s3.ap-southeast-1.amazonaws.com/video/my_car-warning_lights-tyre_pressure_monitoring.webp',
                link: {
                    name: 'Kiểm soát áp suất lốp',
                    value: '/owner/warning-light/tyre-pressure-monitoring'
                },
                title: 'Kiểm soát áp suất lốp',
                subTitle: 'Đèn này hiện lên có nghĩa là cần phải kiểm tra',
                content: [
                    { description: 'Hệ thống kiểm soát áp suất lốp.' },
                    { description: '1. Kiểm tra và điều chỉnh áp suất lốp nếu cần thiết. Lưu lại thông tin áp suất lốp bằng cách sử dụng màn hình hiển thị hoặc nhấn nút "set".  Đèn có tắt không?' },
                    { header: 'Có:', description: 'Đèn tắt, tiếp tục lái xe và thường xuyên kiểm tra áp suất lốp.' },
                    { header: 'Không:', description: 'Đèn không tắt, tới bước 2.' },
                    { description: '2. Kiểm tra áp suất lốp lại một lần nữa. Tất cả có tốt không?' },
                    { header: 'Có:', description: 'Tất cả đều tốt. Lưu lại thông tin áp suất lốp bằng cách sử dụng màn hình hiển thị hoặc nhấn nút "set". Tới bước 3.' },
                    { header: 'Không:', description: 'Không tốt. Hãy sửa chữa hoặc thay lốp.' },
                    { description: '3. Đèn đã tắt chưa?' },
                    { header: 'Có:', description: 'Đèn đã tắt. Tiếp tục lái xe và thường xuyên kiểm tra áp suất lốp.' },
                    { header: 'Không:', description: 'Đèn chưa tắt. Hãy lái xe thận cẩn thận và đến đại lý ủy quyền để kiểm tra.' },
                ]
            },
            {
                image: 'https://vw-image.s3.ap-southeast-1.amazonaws.com/video/my_car-warning_lights-water_in_diesel_fuel_tank.webp',
                link: {
                    name: 'Nước trong bình chứa nhiên liệu',
                    value: '/owner/warning-light/water-in-diesel-fuel-tank'
                },
                title: 'Nước trong bình chứa nhiên liệu',
                subTitle: 'Đèn cảnh báo có nước trong bình chứa nhiên liệu hiển thị màu vàng nghĩa là bạn cần thực hiện hành động khắc phục',
                content: [
                    { description: 'Có nước đang lẫn trong bình chứa nhiên liệu. Bạn cần giảm tốc độ và lái xe cẩn thận đại lý ủy quyền Volkswagen để kiểm tra.' },
                    { description: 'Nếu đèn cảnh báo sáng lên ngay sau khi bơm nhiên liệu trở lại, hãy tắt động cơ và liên hệ đại lý gần nhất.' },
                ]
            },
            {
                image: 'https://vw-image.s3.ap-southeast-1.amazonaws.com/video/my_car-warning_lights-wind_screen_washer_fluid.webp',
                link: {
                    name: 'Mức nước rửa kính',
                    value: '/owner/warning-light/wind-screen-washer-fluid'
                },
                title: 'Mức nước rửa kính',
                subTitle: 'Đèn cảnh báo có mức nước rửa kính hiển thị màu vàng nghĩa là bạn cần thực hiện hành động khắc phục.',
                content: [
                    { description: 'Bình chứa nước rửa kính đã gần cạn.' },
                    { description: 'Hãy bổ sung nước rửa kính vào bình chứa sớm nhất có thể.' },
                ]
            },
            {
                image: 'https://vw-image.s3.ap-southeast-1.amazonaws.com/video/my_car-warning_lights-adaptive_cruise_control_acc.webp',
                link: {
                    name: 'Hệ thống kiểm soát hành trình thích ứng - Adaptive Cruise Control',
                    value: '/owner/warning-light/adaptive-cruise-control-acc'
                },
                title: 'Hệ thống kiểm soát hành trình thích ứng - Adaptive Cruise Control',
                subTitle: 'Đèn cảnh báo hệ thống kiểm soát hành trình thích ứng - Adaptive Cruise Control (ACC) hiển thị màu xanh chỉ với mục đích cung cấp thông tin',
                content: [
                    { description: 'Hệ thống kiểm soát hành trình, kiểm soát hành trình thích ứng và giới hạn tốc độ được kích hoạt. Nếu đèn cảnh báo sáng nhấp nháy cho bạn biết rằng bạn đã vượt quá tốc độ tối đa được định trước. Khi đó, hãy giảm tốc độ về mức quy định.' },
                    { description: 'Nếu đèn cảnh báo vẫn còn nhấp nháy sau khi bạn đã giảm tốc độ, hãy liên hệ đại lý uỷ quyền để kiểm tra.' },
                ]
            },
            {
                image: 'https://vw-image.s3.ap-southeast-1.amazonaws.com/video/my_car-warning_light-cruise_control.webp',
                link: {
                    name: 'Hệ thống kiểm soát hành trình',
                    value: '/owner/warning-light/cruise-control'
                },
                title: 'Hệ thống kiểm soát hành trình',
                subTitle: 'Đèn cảnh báo hệ thống kiểm soát hành trình  - Cruise Control hiển thị màu xanh chỉ với mục đích cung cấp thông tin',
                content: [
                    { description: 'Đèn cảnh báo xuất hiện khi hệ thống kiểm soát hành trình - Cruise Control được kích hoạt. Đây là tính năng vận hành thông thường của hệ thống.' },
                    { description: 'Tham khảo sổ tay hướng dẫn sử dụng hoặc liên hệ đại lý để được giải thích về việc vận hành của hệ thống.' },
                ]
            },
            {
                image: 'https://vw-image.s3.ap-southeast-1.amazonaws.com/video/my_car-warning_lights-electronic_parking_brake-green.webp',
                link: {
                    name: 'Phanh tay điện tử - EPB',
                    value: '/owner/warning-light/electronic-parking-brake-green'
                },
                title: 'Phanh tay điện tử - EPB',
                subTitle: 'Đèn cảnh báo phanh tay điện tử hiển thị màu xanh chỉ với mục đích cung cấp thông tin',
                content: [
                    { description: 'Xe của bạn lúc này đang được kiểm soát bởi tính năng giữ tự động (Auto Hold), bạn cũng có thể vô hiệu hóa tính năng này nếu cần thiết.' },
                    { description: 'Để biết chi tiết về tính năng giữ tự động (Auto Hold) và cách để vô hiệu hóa nó, hãy tham khảo sổ tay hướng dẫn sử dụng hoặc liên hệ đại lý  ủy quyền của Volkswagen.' },
                ]
            },
            {
                image: 'https://vw-image.s3.ap-southeast-1.amazonaws.com/video/my_car-warning_lights-lane_assist-green.webp',
                link: {
                    name: 'Hỗ trợ giữ làn đường',
                    value: '/owner/warning-light/lane-assist-green'
                },
                title: 'Hỗ trợ giữ làn đường',
                subTitle: 'Đèn cảnh báo hỗ trợ chuyển làn hiển thị màu xanh chỉ với mục đích cung cấp thông tin',
                content: [
                    { description: 'Đèn cảnh báo xuất hiện khi hệ thống hỗ trợ chuyển làn đã được bật và vạch kẻ đường được phát hiện.' },
                ]
            },
            {
                image: 'https://vw-image.s3.ap-southeast-1.amazonaws.com/video/my_car-warning_lights-press_brake_pedal-green.webp',
                link: {
                    name: 'Bàn đạp phanh',
                    value: '/owner/warning-light/press-brake-pedal-green'
                },
                title: 'Bàn đạp phanh',
                subTitle: 'Đèn cảnh báo bàn đạp  phanh hiển thị màu xanh chỉ với mục đích cung cấp thông tin',
                content: [
                    {  description: 'Đèn này chỉ được trang bị cho các xe sử dụng hộp số tự động.' },
                    {  description: 'Bàn đạp phanh cần phải đạp giữ khi cần số di chuyển ra khỏi vị trí số dừng P.' },
                ]
            },
        ]
    }

    //   data: any
}
