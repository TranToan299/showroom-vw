import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-owner-banner',
  templateUrl: './owner-banner.component.html',
  styleUrls: ['./owner-banner.component.scss']
})
export class OwnerBannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // console.log('image', this.image)
  }
  @Input() image = '';

}
