import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.scss']
})
export class OwnerListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    console.log('subTitle:' + this.subTitle)
  }
  @Input() title: any
  @Input() description: any
  @Input() items: any
  @Input() subTitle: any
}
