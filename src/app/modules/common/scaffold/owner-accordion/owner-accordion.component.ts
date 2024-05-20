import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-owner-accordion',
  templateUrl: './owner-accordion.component.html',
  styleUrls: ['./owner-accordion.component.scss']
})
export class OwnerAccordionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    this.image = this.items[0].image

  }
  image: any
  onTabOpen(e: any) {
    let index = e.index
    this.image = this.items[index].image
  }

  @Input() title: any
  @Input() items: any


}
