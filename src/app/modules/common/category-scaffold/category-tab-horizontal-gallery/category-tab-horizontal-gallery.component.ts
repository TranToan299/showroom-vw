import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-category-tab-horizontal-gallery',
  templateUrl: './category-tab-horizontal-gallery.component.html',
  styleUrls: ['./category-tab-horizontal-gallery.component.scss']
})
export class CategoryTabHorizontalGalleryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.image= this.content[0].image;
    this.video = this.content[0].video
  }
  @Input() title: any
  @Input() mt: any
  @Input() content: any
  @Input() id: any


  image: any = []
  video: object = []

  onTabOpen(e: any) {
    let index = e.index
    this.image = this.content[index].image
  }



}
