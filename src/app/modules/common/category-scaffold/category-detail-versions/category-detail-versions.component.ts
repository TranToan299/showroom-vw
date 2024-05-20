import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-category-detail-versions',
  templateUrl: './category-detail-versions.component.html',
  styleUrls: ['./category-detail-versions.component.scss']
})
export class CategoryDetailVersionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() title: any
  @Input() mt: any
  @Input() content: any


}
