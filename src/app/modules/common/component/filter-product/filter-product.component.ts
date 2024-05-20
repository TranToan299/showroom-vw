import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-product',
  templateUrl: './filter-product.component.html',
  styleUrls: ['./filter-product.component.scss']
})
export class FilterProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayModal: boolean = false
  listKeys: string[] = []
  selectedColors: string[] = []
  colors: any = [{ value: 'red', name: 'đỏ' }, { value: 'green', name: 'xanh' }, { value: 'yellow', name: 'vàng' }]
  selectedPrices: string[] = []
  prices: string[] = ['500 triệu - 1 tỷ', '1 tỷ - 2 tỷ', '2 tỷ - 3 tỷ', '> 3 tỷ']
  selectedStores: string[] = []
  stores: string[] = ['Tân Bình', 'Tân Phú', 'Bình Thạnh', 'Thủ Đức', 'Quận 10']
  cates: string[] = ['Sản phẩm cao cấp', 'Sản phẩm bán chạy',]
  selectedCates: string[] = []
  fakeProducts: any = [
    {
      name: 'Tiguan Elegance',
      image: './assets/images/TiguanElegance.jpg'
    },
    {
      name: 'Polo',
      image: './assets/images/Polo.jpg'
    },
    {
      name: 'Tiguan Luxury S',
      image: './assets/images/TiguanLuxuryS.jpg'
    },
    {
      name: 'New Model',
      image: './assets/images/CommingSoonnewCar.jpg'
    },
    {
      name: 'Teramont',
      image: './assets/images/Teramont.jpg'
    },
  ]
  fakeDataKey: any = ['Mã số', 'Ngoại thất', 'Nội thất', 'Động cơ', 'Dung tích (cc)', 'Công suất tối đa (hp/rpm)',
    'Mô-men xoắn cực đại (Nm/rpm)', 'Thời gian tăng tốc (s/giây) (0~100km/giờ)', 'Tốc độ tối đa (km/giờ)',
    'Tự trọng (DIN) (kg)', 'Giá bán'
  ]
  fakeDataOrder: any = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  fakeDataValue: any = ['212049', 'Nâu Ánh Kim', 'Đen - Be', 'Động cơ điện phía sau', 1682, 326, 345, 5.3, 230, 2050, '6.162.236.000 VNĐ']
  showResult: boolean = false
  findProduct() {
    // console.log('listKey', this.listKeys)
    // this.displayModal = true
    this.showResult = true
  }

}
