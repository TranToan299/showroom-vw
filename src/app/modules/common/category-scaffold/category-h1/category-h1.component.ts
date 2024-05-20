import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-category-h1',
  templateUrl: './category-h1.component.html',
  styleUrls: ['./category-h1.component.scss']
})
export class CategoryH1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(this.mt)
  }
  @Input() name: any
  @Input() description: any
  @Input() isCenterDescription: any
  @Input() mt: any

}
