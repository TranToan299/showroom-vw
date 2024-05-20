import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-category-tab-horizontal',
  templateUrl: './category-tab-horizontal.component.html',
  styleUrls: ['./category-tab-horizontal.component.scss']
})
export class CategoryTabHorizontalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.image = this.content[0].image
    this.video = this.content[0].video
  }
  @Input() title: any
  @Input() mt: any
  @Input() content: any
  @Input() id: any


  image: string = ''
  video: string = ''

  onTabOpen(e: any) {
    let index = e.index
    this.image = this.content[index].image
    this.video = this.content[index].video
  }
}
