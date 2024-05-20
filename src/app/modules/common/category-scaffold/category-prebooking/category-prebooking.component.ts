import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-category-prebooking',
  templateUrl: './category-prebooking.component.html',
  styleUrls: ['./category-prebooking.component.scss']
})
export class CategoryPrebookingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() title: any
  @Input() link: any
  @Input() mt: any
  @Input() image: any


}
