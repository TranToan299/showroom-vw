import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-category-main-title',
  templateUrl: './category-main-title.component.html',
  styleUrls: ['./category-main-title.component.scss']
})
export class CategoryMainTitleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() title: any
  @Input() description: any

}
