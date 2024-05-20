import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-category-special-features',
  templateUrl: './category-special-features.component.html',
  styleUrls: ['./category-special-features.component.scss']
})
export class CategorySpecialFeaturesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() title: any
  @Input() content: any
  @Input() mt: any
  @Input() id: any


  goToElement(q: string) {
    let elemnet: any = document.querySelector(q)
    elemnet.scrollIntoView({ behavior: 'smooth' });
  }
}
