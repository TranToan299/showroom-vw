import { Component, Input, OnInit } from '@angular/core';
import { IProductVersion } from '../../../constants/app-constants';

@Component({
  selector: 'app-product-version-detail',
  templateUrl: './product-version-detail.component.html',
  styleUrls: ['./product-version-detail.component.scss']
})
export class ProductVersionDetailComponent implements OnInit  {
  @Input() productVersion: IProductVersion;
  constructor() { }
  ngOnInit(): void {

  }

}
