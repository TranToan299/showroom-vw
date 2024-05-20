import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-owner-detail-vertical',
  templateUrl: './owner-detail-vertical.component.html',
  styleUrls: ['./owner-detail-vertical.component.scss']
})
export class OwnerDetailVerticalComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {
  }
  @Input() items: any



}
