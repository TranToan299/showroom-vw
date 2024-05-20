import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-owner-accordion2',
  templateUrl: './owner-accordion2.component.html',
  styleUrls: ['./owner-accordion2.component.scss']
})
export class OwnerAccordion2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onTabOpen(e: any) {
    let index = e.index
  }

  @Input() title: any
  @Input() items: any

}
