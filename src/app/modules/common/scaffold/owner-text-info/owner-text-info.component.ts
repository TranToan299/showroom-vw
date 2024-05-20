import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-owner-text-info',
  templateUrl: './owner-text-info.component.html',
  styleUrls: ['./owner-text-info.component.scss']
})
export class OwnerTextInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() title: any
  @Input() items: any


}
