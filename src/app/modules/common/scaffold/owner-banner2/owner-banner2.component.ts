import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-owner-banner2',
  templateUrl: './owner-banner2.component.html',
  styleUrls: ['./owner-banner2.component.scss']
})
export class OwnerBanner2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // console.log('image', this.image)
  }
  @Input() video = '';

}
