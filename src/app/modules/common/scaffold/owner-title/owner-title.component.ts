import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-owner-title',
  templateUrl: './owner-title.component.html',
  styleUrls: ['./owner-title.component.scss']
})
export class OwnerTitleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("margin " + this.margin)
  }
  @Input() title: any
  @Input() margin: any
}
