import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-category-special-features-v2',
  templateUrl: './category-special-features-v2.component.html',
  styleUrls: ['./category-special-features-v2.component.scss']
})
export class CategorySpecialFeaturesV2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() title: any
  @Input() images: any
  @Input() infos: any
  @Input() mt: any



}
