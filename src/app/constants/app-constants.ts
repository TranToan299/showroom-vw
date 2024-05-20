export const MAX_HISTORY_COUNT = 20;
export const MAX_ID_REDUCE = 100;
export const MAX_LENGTH_OVERFLOW = 40;

export const APP_MESSAGE = {
  LOGIN: {
    LOGIN_FAIL: 'Your email or password incorrect! Please check again!'
  },
  VALIDATE: {
    REQUIRED: 'This field is required!',
    MAX_LENGTH: (max: number) => `Maximum length is ${max} characters!`,
    RANGE_VALUE: (min: number, max: number) =>
      `Input value must be in range from ${min} to ${max}!`,
    COMPARE_WITH: (operatorValueDisplay: string, targetControlValue: any) =>
      `Input value must be ${operatorValueDisplay} ${targetControlValue}!`,
    EMAIL_FORMAT: 'Wrong email format!',
    MATCH_FIELD: (matchFieldName: string, targetFieldName: string) =>
      `${matchFieldName} value do not match with ${targetFieldName} value`,
    REENTER: 'shop name does not exit please enter shop code again',
  }
};


export const PAGE_TITLE = {
  teramont: "SUV 7 chỗ | Teramont | Đỉnh cao chủ động",
  newTiguan: "SUV | The New Tiguan | Linh hoạt cùng bạn",
  virtus: "Sedan | Virtus | Chuẩn mực thời thượng",
  viloran: "Viloran",
  teramontX: "Teramont X",
  tcross: "SUV đô thị | Tcross - Sắc màu độc bản",
  tiguanAllspace: "Tiguan Allspace | SUV 7 chỗ thương hiệu Đức",
  touareg: "SUV 5 chỗ | Touareg - Nam thần đường phố",
  vrShowroom: "Trải nghiệm thực tế ảo showroom xe VW",
  news: "Tin tức và sự kiện",
  aboutUs: "Câu chuyện về chúng tôi",
  contact: "Liên hệ",
  agent: "Hệ thống đại lý",
  owner: "Chủ sở hữu và người dùng xe",
  repairAndService: "Dịch vụ và sửa chữa VW",
  oilAndFluids: "Dầu động cơ cho xe của bạn",
  warranty: "Bảo hành hiện hành",
  accessories: "Phụ kiện chính hãng cho bạn và xe VW",
  lifestyle: "Phong cách sống",
  usefulInfo: "Thông tin hữu ích cho xe của bạn",
  bookingService: "Đặt xe dịch vụ",
  try: "Lái thử xe",
  bookingAppointment: "Đặt hẹn dịch vụ",
  promotion: "Chương trình khuyến mãi",
  faq: "FAQ",
  legal: "Pháp lý"
}


export const PAGE_META_DESCRIPTION = {
  teramont: "Volkswagen Teramont - SUV 7 chỗ đích thực với không gian rộng rãi nhất phân khúc. Tìm hiểu thêm.",
  newTiguan: "Volkswagen Tiguan tự hào là chiếc SUV bán chạy nhất trong phân khúc tại Châu Âu và là sản phẩm Volkswagen thành công nhất trên thế giới. Tìm hiểu thêm.",
  virtus: "Volkswagen Virtus - Sedan Đức tầm 1 tỷ duy nhất trong phân khúc. Tìm hiểu thêm.",
  tcross: "Volkswagen T-Cross - SUV đô thị thời thượng, năng động và cá tính nhất của Volkswagen. Tìm hiểu thêm.",
  tiguanAllspace: "Volkswagen Tiguan Allspace - SUV 7 chỗ linh hoạt trong mọi tình huống. Tìm hiểu thêm.",
  touareg: "Volkswagen Touareg - SUV đầu bảng của thương hiệu Volkswagen. Tìm hiểu thêm.",
  vrShowroom: "Trải nghiệm Virtual showroom cùng Volkswagen Việt Nam. Khám phá thêm.",
  news: "Tìm hiểu những tin tức mới nhất của Volkswagen Việt Nam.",
  aboutUs: "Công ty TNHH Trend Motor Việt Nam là nhà phân phối ủy quyền chính thức của Volkswagen tại Việt Nam. Tìm hiểu thêm.",
  contact: "Thông tin liên hệ Volkswagen Việt Nam. Tìm hiểu thêm.",
  agent: "Thông tin đại lý ủy quyền chính thức của Volkswagen trên toàn quốc. Tìm hiểu thêm.",
  owner: "Thông tin hữu ích cho chủ sở hữu xe Volkswagen. Tìm hiểu thêm.",
  repairAndService: "Khám phá các dịch vụ của Volkswagen. Đặt hẹn dịch vụ.",
  oilAndFluids: "Dầu động cơ chính hãng Volkswagen. Tìm hiểu thêm.",
  warranty: "Chính sách bảo hành của Volkswagen. Tìm hiểu thêm.",
  accessories: "Phụ kiện chính hãng Volkswagen mang đậm tính cá nhân hóa.",
  lifestyle: "Phong cách sống",
  usefulInfo: "Thông tin hữu ích cho chủ sở hữu xe Volkswagen. Tìm hiểu thêm.",
  bookingService: "Đặt hẹn dịch vụ trực tuyến để có được nhiều lợi ích nhất. Đặt hẹn ngay.",
  try: "Đăng ký lái thử và trải nghiệm các dòng xe Volkswagen. Đăng ký ngay.",
  bookingAppointment: "Đặt hẹn dịch vụ trực tuyến để có được nhiều lợi ích nhất. Đặt hẹn ngay.",
  promotion: "Tìm hiểu thông tin các chương trình ưu đãi mới nhất của Volkswagen Việt Nam.",
  faq: "Những câu hỏi thường gặp. Tìm hiểu thêm.",
  legal: "Thông tin pháp lý. Tìm hiểu thêm."
}


export type IProductVersion = {
  name: string;
  price: string;
    image: string;
    linkOrder: string;
    linkTrial: string;
    listInfo: {
      name: string;
      value: string;
    }[]
}
