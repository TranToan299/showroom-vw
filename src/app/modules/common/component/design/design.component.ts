import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.scss']
})
export class DesignComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  image: string = './assets/images/exterior1.jpg'//interior1.jpg//comfort.jfif
  onTabOpen(e: any) {
    let index = e.index
    if (index == 0) this.image = './assets/images/exterior1.jpg'
    else if (index == 1) this.image = './assets/images/interior1.jpg'
    else this.image = './assets/images/comfort.jfif'

  }

}
