import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayModalExterior: boolean = false
  displayModalInterior: boolean = false
  onClickExterior() {
    this.displayModalExterior = true
  }
  onClickInterior() {
    this.displayModalInterior = true
  }
  listExterior: string[] = [
    './assets/images/exterior1.jpg',
    './assets/images/exterior2.jpg',
    './assets/images/exterior3.jpg',
    './assets/images/exterior4.jpg',
    './assets/images/exterior5.jpg'
  ]
  listInterior: string[] = [
    './assets/images/interior1.jpg',
    './assets/images/interior2.jpg',
    './assets/images/interior3.jpg',
    './assets/images/interior4.jpg',
    './assets/images/interior5.jpg'
  ]

}
