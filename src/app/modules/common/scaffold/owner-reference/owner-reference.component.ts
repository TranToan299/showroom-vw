import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-owner-reference',
  templateUrl: './owner-reference.component.html',
  styleUrls: ['./owner-reference.component.scss']
})
export class OwnerReferenceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() title: any
  @Input() description: any
  @Input() link: any

}
