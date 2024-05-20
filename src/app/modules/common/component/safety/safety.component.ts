import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-safety',
  templateUrl: './safety.component.html',
  styleUrls: ['./safety.component.scss']
})
export class SafetyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  image: string = './assets/images/overviewSafety.jfif'
  onTabOpen(e: any) {
    let index = e.index
    if (index == 0) this.image = './assets/images/overviewSafety.jfif'
    else if (index == 1) this.image = './assets/images/cameraSafety.jfif'
    else if (index == 2) this.image = './assets/images/cageSafety.jfif'
    else if (index == 3) this.image = './assets/images/brakingSafety.jfif'

  }

}
