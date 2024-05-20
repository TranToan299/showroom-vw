import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-category-special-features-v3',
  templateUrl: './category-special-features-v3.component.html',
  styleUrls: ['./category-special-features-v3.component.scss']
})
export class CategorySpecialFeaturesV3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() title: any
  @Input() images: any
  @Input() infos: any
  @Input() mt: any



}
