import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-owner-main-title',
  templateUrl: './owner-main-title.component.html',
  styleUrls: ['./owner-main-title.component.scss']
})
export class OwnerMainTitleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() title: any
  @Input() description: any



}
