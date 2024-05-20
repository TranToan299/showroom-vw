import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-category-viloran-special-features',
  templateUrl: './category-viloran-special-features.component.html',
  styleUrls: ['./category-viloran-special-features.component.scss']
})
export class CategoryViloranSpecialFeaturesComponent implements OnInit {

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
