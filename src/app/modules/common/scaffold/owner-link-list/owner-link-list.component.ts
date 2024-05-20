import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-owner-link-list',
  templateUrl: './owner-link-list.component.html',
  styleUrls: ['./owner-link-list.component.scss']
})
export class OwnerLinkListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() items: any

}
