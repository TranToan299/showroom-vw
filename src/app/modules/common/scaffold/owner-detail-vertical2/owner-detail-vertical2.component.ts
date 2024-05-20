import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-owner-detail-vertical2',
  templateUrl: './owner-detail-vertical2.component.html',
  styleUrls: ['./owner-detail-vertical2.component.scss']
})
export class OwnerDetailVertical2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() items: any
}
