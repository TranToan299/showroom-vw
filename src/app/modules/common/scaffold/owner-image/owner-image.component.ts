import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-owner-image',
  templateUrl: './owner-image.component.html',
  styleUrls: ['./owner-image.component.scss']
})
export class OwnerImageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() image: any
  @Input() title: any


}
