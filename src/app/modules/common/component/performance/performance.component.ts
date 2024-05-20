import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.scss']
})
export class PerformanceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  image: string = './assets/images/overviewPerformance.jfif'//interior1.jpg//comfort.jfif
  onTabOpen(e: any) {
    let index = e.index
    if (index == 0) this.image = './assets/images/overviewPerformance.jfif'
    else if (index == 1) this.image = './assets/images/enginePerformance.jfif'
    else if (index == 2) this.image = './assets/images/handlingPerformance.jfif'

  }

}
