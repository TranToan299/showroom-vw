import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  image: string = './assets/images/remote.jfif'//interior1.jpg//comfort.jfif
  onTabOpen(e: any) {
    let index = e.index
    if (index == 0) this.image = './assets/images/remote.jfif'
    else if (index == 1) this.image = './assets/images/media.jfif'
    else if (index == 2) this.image = './assets/images/cockpit.jfif'
    else if (index == 3) this.image = './assets/images/sound.jfif'
    else if (index == 4) this.image = './assets/images/assistance.jfif'

  }

}
