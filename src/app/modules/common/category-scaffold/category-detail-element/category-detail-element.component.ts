import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-category-detail-element',
  templateUrl: './category-detail-element.component.html',
  styleUrls: ['./category-detail-element.component.scss']
})
export class CategoryDetailElementComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() title: any
  @Input() description: any
  @Input() image: any
  @Input() infos: any
  @Input() mt: any
  @Input() id: any


}
